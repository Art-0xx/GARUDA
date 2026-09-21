---
type: detection_rule
title: "Suspicious Service DACL Modification Via Set-Service Cmdlet"
rule_id: a95b9b42-1308-4735-a1af-abb1c5e6f5ac
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Suspicious Service DACL Modification Via Set-Service Cmdlet

## Description
Detects suspicious DACL modifications via the "Set-Service" cmdlet using the "SecurityDescriptorSddl" flag (Only available with PowerShell 7) that can be used to hide services or make them unstopable

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith: \pwsh.exe
- OriginalFileName: pwsh.dll
selection_sddl_flag:
  CommandLine|contains:
  - '-SecurityDescriptorSddl '
  - '-sd '
selection_set_service:
  CommandLine|contains:
  - ;;;IU
  - ;;;SU
  - ;;;BA
  - ;;;SY
  - ;;;WD
  CommandLine|contains|all:
  - 'Set-Service '
  - D;;
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- https://www.sans.org/blog/red-team-tactics-hiding-windows-services/
- https://learn.microsoft.com/pt-br/windows/win32/secauthz/sid-strings

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-18
- **Rule ID:** `a95b9b42-1308-4735-a1af-abb1c5e6f5ac`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_service_dacl_modification_set_service.yml`
