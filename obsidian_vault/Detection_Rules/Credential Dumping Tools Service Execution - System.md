---
type: detection_rule
title: "Credential Dumping Tools Service Execution - System"
rule_id: 4976aa50-8f41-45c6-8b15-ab3fc10e79ed
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001, attack.t1003.002, attack.t1003.004, attack.t1003.005, attack.t1003.006, attack.t1569.002]
---

# Credential Dumping Tools Service Execution - System

## Description
Detects well-known credential dumping tools execution via service execution events

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 7045
  ImagePath|contains:
  - cachedump
  - dumpsvc
  - fgexec
  - gsecdump
  - mimidrv
  - pwdump
  - servpw
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1003.001
- T1003.002
- T1003.004
- T1003.005
- T1003.006
- T1569.002

## False Positives
- Legitimate Administrator using credential dumping tool for password recovery

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment

## Metadata
- **Author:** Florian Roth (Nextron Systems), Teymur Kheirkhabarov, Daniil Yugoslavskiy, oscd.community
- **Date:** 2017-03-05
- **Rule ID:** `4976aa50-8f41-45c6-8b15-ab3fc10e79ed`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_mal_creddumper.yml`
