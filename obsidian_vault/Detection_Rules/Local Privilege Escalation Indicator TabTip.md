---
type: detection_rule
title: "Local Privilege Escalation Indicator TabTip"
rule_id: bc2e25ed-b92b-4daa-b074-b502bdd1982b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557.001]
---

# Local Privilege Escalation Indicator TabTip

## Description
Detects the invocation of TabTip via CLSID as seen when JuicyPotatoNG is used on a system in brute force mode

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 10001
  Provider_Name: Microsoft-Windows-DistributedCOM
  param1: C:\Program Files\Common Files\microsoft shared\ink\TabTip.exe
  param2: 2147943140
  param3: '{054AAE20-4BEA-4347-8A35-64A533254A9D}'
```

## MITRE ATT&CK
- T1557.001

## False Positives
- Unknown

## References
- https://github.com/antonioCoco/JuicyPotatoNG

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-10-07
- **Rule ID:** `bc2e25ed-b92b-4daa-b074-b502bdd1982b`
- **Source file:** `windows/builtin/system/microsoft_windows_distributed_com/win_system_lpe_indicators_tabtip.yml`
