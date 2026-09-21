---
type: detection_rule
title: "Remote Access Tool - AnyDesk Execution"
rule_id: b52e84a3-029e-4529-b09b-71d19dd27e94
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - AnyDesk Execution

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
condition: selection
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
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-2---anydesk-files-detected-test-on-windows
- https://thedfirreport.com/2025/02/24/confluence-exploit-leads-to-lockbit-ransomware/

## Metadata
- **Author:** frack113
- **Date:** 2022-02-11
- **Rule ID:** `b52e84a3-029e-4529-b09b-71d19dd27e94`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_anydesk.yml`
