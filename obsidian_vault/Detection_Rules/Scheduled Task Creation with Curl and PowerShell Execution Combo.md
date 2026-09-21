---
type: detection_rule
title: "Scheduled Task Creation with Curl and PowerShell Execution Combo"
rule_id: 1d174d38-8fda-4081-a9b6-56d9763c0cd8
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1218, attack.t1105]
---

# Scheduled Task Creation with Curl and PowerShell Execution Combo

## Description
Detects the creation of a scheduled task using schtasks.exe, potentially in combination with curl for downloading payloads and PowerShell for executing them.
This facilitates executing malicious payloads or connecting with C&C server persistently without dropping the malware sample on the host.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_curl:
  CommandLine|contains|all:
  - 'curl '
  - http
  - -o
selection_img:
  CommandLine|contains|windash: ' /create '
  Image|endswith: \schtasks.exe
selection_powershell:
  CommandLine|contains: powershell
```

## MITRE ATT&CK
- T1053.005
- T1218
- T1105

## False Positives
- Legitimate use of schtasks for administrative purposes.
- Automation scripts combining curl and PowerShell in controlled environments.

## References
- https://tria.ge/241015-l98snsyeje/behavioral2

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-02-05
- **Rule ID:** `1d174d38-8fda-4081-a9b6-56d9763c0cd8`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_curl_and_powershell_combo.yml`
