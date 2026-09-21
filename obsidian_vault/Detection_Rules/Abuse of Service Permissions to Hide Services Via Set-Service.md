---
type: detection_rule
title: "Abuse of Service Permissions to Hide Services Via Set-Service"
rule_id: 514e4c3a-c77d-4cde-a00f-046425e2301e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Abuse of Service Permissions to Hide Services Via Set-Service

## Description
Detects usage of the "Set-Service" powershell cmdlet to configure a new SecurityDescriptor that allows a service to be hidden from other utilities such as "sc.exe", "Get-Service"...etc. (Works only in powershell 7)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  CommandLine|contains:
  - '-SecurityDescriptorSddl '
  - '-sd '
selection_img:
- Image|endswith: \pwsh.exe
- OriginalFileName: pwsh.dll
selection_sddl:
  CommandLine|contains|all:
  - 'Set-Service '
  - DCLCWPDTSD
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Rare intended use of hidden services

## References
- https://twitter.com/Alh4zr3d/status/1580925761996828672
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-service?view=powershell-7.2

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-17
- **Rule ID:** `514e4c3a-c77d-4cde-a00f-046425e2301e`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_hide_services_via_set_service.yml`
