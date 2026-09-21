---
type: detection_rule
title: "Remote Access Tool - Anydesk Execution From Suspicious Folder"
rule_id: 065b00ca-5d5c-4557-ac95-64a6d0b64d86
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - Anydesk Execution From Suspicious Folder

## Description
An adversary may use legitimate desktop support and remote access software, such as Team Viewer, Go2Assist, LogMein, AmmyyAdmin, etc, to establish an interactive command and control channel to target systems within networks.
These services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment.
Remote access tools like VNC, Ammyy, and Teamviewer are used frequently when compared with other legitimate software commonly used by adversaries. (Citation: Symantec Living off the Land)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|contains:
  - \AppData\
  - Program Files (x86)\AnyDesk
  - Program Files\AnyDesk
selection:
- Image|endswith:
  - \AnyDesk.exe
  - \AnyDeskMSI.exe
- Description: AnyDesk
- Product: AnyDesk
- Company: AnyDesk Software GmbH
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate use of AnyDesk from a non-standard folder

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-2---anydesk-files-detected-test-on-windows
- https://thedfirreport.com/2025/02/24/confluence-exploit-leads-to-lockbit-ransomware/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-05-20
- **Rule ID:** `065b00ca-5d5c-4557-ac95-64a6d0b64d86`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_anydesk_susp_exec.yml`
