---
type: detection_rule
title: "Suspicious Service DACL Modification Via Set-Service Cmdlet - PS"
rule_id: 22d80745-6f2c-46da-826b-77adaededd74
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Suspicious Service DACL Modification Via Set-Service Cmdlet - PS

## Description
Detects usage of the "Set-Service" powershell cmdlet to configure a new SecurityDescriptor that allows a service to be hidden from other utilities such as "sc.exe", "Get-Service"...etc. (Works only in powershell 7)

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_sddl_flag:
  ScriptBlockText|contains:
  - '-SecurityDescriptorSddl '
  - '-sd '
selection_set_service:
  ScriptBlockText|contains:
  - ;;;IU
  - ;;;SU
  - ;;;BA
  - ;;;SY
  - ;;;WD
  ScriptBlockText|contains|all:
  - 'Set-Service '
  - D;;
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Rare intended use of hidden services
- Rare FP could occur due to the non linearity of the ScriptBlockText log

## References
- https://twitter.com/Alh4zr3d/status/1580925761996828672
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-service?view=powershell-7.2

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-24
- **Rule ID:** `22d80745-6f2c-46da-826b-77adaededd74`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_service_dacl_modification_set_service.yml`
