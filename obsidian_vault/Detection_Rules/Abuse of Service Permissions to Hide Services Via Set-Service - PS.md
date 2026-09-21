---
type: detection_rule
title: "Abuse of Service Permissions to Hide Services Via Set-Service - PS"
rule_id: 953945c5-22fe-4a92-9f8a-a9edc1e522da
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Abuse of Service Permissions to Hide Services Via Set-Service - PS

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
condition: selection
selection:
  ScriptBlockText|contains:
  - '-SecurityDescriptorSddl '
  - '-sd '
  ScriptBlockText|contains|all:
  - 'Set-Service '
  - DCLCWPDTSD
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
- **Date:** 2022-10-17
- **Rule ID:** `953945c5-22fe-4a92-9f8a-a9edc1e522da`
- **Source file:** `windows/powershell/powershell_script/posh_ps_using_set_service_to_hide_services.yml`
