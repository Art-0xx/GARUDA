---
type: detection_rule
title: "Potentially Suspicious Regsvr32 HTTP IP Pattern"
rule_id: 2dd2c217-bf68-437a-b57c-fe9fd01d5de8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Potentially Suspicious Regsvr32 HTTP IP Pattern

## Description
Detects regsvr32 execution to download and install DLLs located remotely where the address is an IP address.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith: \regsvr32.exe
- OriginalFileName: REGSVR32.EXE
selection_ip:
  CommandLine|contains:
  - ' /i:http://1'
  - ' /i:http://2'
  - ' /i:http://3'
  - ' /i:http://4'
  - ' /i:http://5'
  - ' /i:http://6'
  - ' /i:http://7'
  - ' /i:http://8'
  - ' /i:http://9'
  - ' /i:https://1'
  - ' /i:https://2'
  - ' /i:https://3'
  - ' /i:https://4'
  - ' /i:https://5'
  - ' /i:https://6'
  - ' /i:https://7'
  - ' /i:https://8'
  - ' /i:https://9'
  - ' -i:http://1'
  - ' -i:http://2'
  - ' -i:http://3'
  - ' -i:http://4'
  - ' -i:http://5'
  - ' -i:http://6'
  - ' -i:http://7'
  - ' -i:http://8'
  - ' -i:http://9'
  - ' -i:https://1'
  - ' -i:https://2'
  - ' -i:https://3'
  - ' -i:https://4'
  - ' -i:https://5'
  - ' -i:https://6'
  - ' -i:https://7'
  - ' -i:https://8'
  - ' -i:https://9'
```

## MITRE ATT&CK
- T1218.010

## False Positives
- FQDNs that start with a number such as "7-Zip"

## References
- https://twitter.com/mrd0x/status/1461041276514623491
- https://twitter.com/tccontre18/status/1480950986650832903
- https://lolbas-project.github.io/lolbas/Binaries/Regsvr32/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-11
- **Rule ID:** `2dd2c217-bf68-437a-b57c-fe9fd01d5de8`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_http_ip_pattern.yml`
