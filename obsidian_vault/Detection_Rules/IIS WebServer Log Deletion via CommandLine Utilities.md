---
type: detection_rule
title: "IIS WebServer Log Deletion via CommandLine Utilities"
rule_id: 0649be4a-aeb0-45b0-b89e-7f1668f6d9c0
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070]
---

# IIS WebServer Log Deletion via CommandLine Utilities

## Description
Detects attempts to delete Internet Information Services (IIS) log files via command line utilities, which is a common defense evasion technique used by attackers to cover their tracks.
Threat actors often abuse vulnerabilities in web applications hosted on IIS servers to gain initial access and later delete IIS logs to evade detection.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_del:
  CommandLine|contains:
  - 'del '
  - 'erase '
  - 'rm '
  - 'remove-item '
  - 'rmdir '
selection_cli_iis_dir:
  CommandLine|contains: \inetpub\logs\
selection_img:
- Image|endswith:
  - \cmd.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - cmd.exe
  - powershell.exe
  - powershell_ise.exe
  - pwsh.dll
```

## MITRE ATT&CK
- T1070

## False Positives
- Deletion of IIS logs that are older than a certain retention period as part of regular maintenance activities.
- Legitimate schedule tasks or scripts that clean up log files regularly.

## References
- https://learn.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/managing-iis-log-file-storage

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-09-02
- **Rule ID:** `0649be4a-aeb0-45b0-b89e-7f1668f6d9c0`
- **Source file:** `windows/process_creation/proc_creation_win_iis_logs_deletion.yml`
