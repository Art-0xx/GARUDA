---
type: detection_rule
title: "Credential Dumping Tools Service Execution - Security"
rule_id: f0d1feba-4344-4ca9-8121-a6c97bd6df52
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001, attack.t1003.002, attack.t1003.004, attack.t1003.005, attack.t1003.006, attack.t1569.002]
---

# Credential Dumping Tools Service Execution - Security

## Description
Detects well-known credential dumping tools execution via service execution events

## Log Source
```yaml
definition: The 'System Security Extension' audit subcategory need to be enabled to
  log the EID 4697
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4697
  ServiceFileName|contains:
  - cachedump
  - dumpsvc
  - fgexec
  - gsecdump
  - mimidrv
  - pwdump
  - servpw
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
- **Rule ID:** `f0d1feba-4344-4ca9-8121-a6c97bd6df52`
- **Source file:** `windows/builtin/security/win_security_mal_creddumper.yml`
