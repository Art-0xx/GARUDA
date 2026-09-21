---
type: detection_rule
title: "Possible Impacket SecretDump Remote Activity"
rule_id: 252902e3-5830-4cf6-bf21-c22083dfd5cf
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002, attack.t1003.004, attack.t1003.003]
---

# Possible Impacket SecretDump Remote Activity

## Description
Detect AD credential dumping using impacket secretdump HKTL

## Log Source
```yaml
definition: The advanced audit policy setting "Object Access > Audit Detailed File
  Share" must be configured for Success/Failure
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 5145
  RelativeTargetName|contains|all:
  - SYSTEM32\
  - .tmp
  ShareName: \\\\\*\\ADMIN$
```

## MITRE ATT&CK
- T1003.002
- T1003.004
- T1003.003

## False Positives
- Unknown

## References
- https://web.archive.org/web/20230329153811/https://blog.menasec.net/2019/02/threat-huting-10-impacketsecretdump.html

## Metadata
- **Author:** Samir Bousseaden, wagga
- **Date:** 2019-04-03
- **Rule ID:** `252902e3-5830-4cf6-bf21-c22083dfd5cf`
- **Source file:** `windows/builtin/security/win_security_impacket_secretdump.yml`
