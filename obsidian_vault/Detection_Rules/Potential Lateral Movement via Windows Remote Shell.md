---
type: detection_rule
title: "Potential Lateral Movement via Windows Remote Shell"
rule_id: 79df3f68-dccb-48e9-9171-b75cbc37c51d
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.006]
---

# Potential Lateral Movement via Windows Remote Shell

## Description
Detects a child process spawned by 'winrshost.exe', which suggests remote command execution through Windows Remote Shell (WinRs) and may indicate potential lateral movement activity.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_conhost:
  Image: C:\Windows\System32\conhost.exe
selection:
  ParentImage|endswith: \winrshost.exe
```

## MITRE ATT&CK
- T1021.006

## False Positives
- Legitimate use of WinRM within the organization

## References
- https://cardinalops.com/blog/living-off-winrm-abusing-complexity-in-remote-management/
- https://www.ired.team/offensive-security/lateral-movement/winrs-for-lateral-movement

## Metadata
- **Author:** Liran Ravich
- **Date:** 2025-10-22
- **Rule ID:** `79df3f68-dccb-48e9-9171-b75cbc37c51d`
- **Source file:** `windows/process_creation/proc_creation_win_winrshost_command_execution.yml`
