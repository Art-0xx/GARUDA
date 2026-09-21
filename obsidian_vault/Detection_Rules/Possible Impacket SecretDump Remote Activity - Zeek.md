---
type: detection_rule
title: "Possible Impacket SecretDump Remote Activity - Zeek"
rule_id: 92dae1ed-1c9d-4eff-a567-33acbd95b00e
platform: network
level: high
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1003.002, attack.t1003.004, attack.t1003.003]
---

# Possible Impacket SecretDump Remote Activity - Zeek

## Description
Detect AD credential dumping using impacket secretdump HKTL. Based on the SIGMA rules/windows/builtin/win_impacket_secretdump.yml

## Log Source
```yaml
product: zeek
service: smb_files
```

## Detection Logic
```yaml
condition: selection
selection:
  name|contains: SYSTEM32\
  name|endswith: .tmp
  path|contains|all:
  - \
  - ADMIN$
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
- **Author:** Samir Bousseaden, @neu5ron
- **Date:** 2020-03-19
- **Rule ID:** `92dae1ed-1c9d-4eff-a567-33acbd95b00e`
- **Source file:** `network/zeek/zeek_smb_converted_win_impacket_secretdump.yml`
