---
type: detection_rule
title: "Potential WMI Lateral Movement WmiPrvSE Spawned PowerShell"
rule_id: 692f0bec-83ba-4d04-af7e-e884a96059b6
platform: windows
level: medium
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1059.001]
---

# Potential WMI Lateral Movement WmiPrvSE Spawned PowerShell

## Description
Detects Powershell as a child of the WmiPrvSE process. Which could be a sign of lateral movement via WMI.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_parent:
  ParentImage|endswith: \WmiPrvSE.exe
```

## MITRE ATT&CK
- T1047
- T1059.001

## False Positives
- AppvClient
- CCM
- WinRM

## References
- https://any.run/report/68bc255f9b0db6a0d30a8f2dadfbee3256acfe12497bf93943bc1eab0735e45e/a2385d6f-34f7-403c-90d3-b1f9d2a90a5e

## Metadata
- **Author:** Markus Neis @Karneades
- **Date:** 2019-04-03
- **Rule ID:** `692f0bec-83ba-4d04-af7e-e884a96059b6`
- **Source file:** `windows/process_creation/proc_creation_win_wmiprvse_spawns_powershell.yml`
