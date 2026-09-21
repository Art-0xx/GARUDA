---
type: detection_rule
title: "Potential Process Injection Via Msra.EXE"
rule_id: 744a188b-0415-4792-896f-11ddb0588dbc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Potential Process Injection Via Msra.EXE

## Description
Detects potential process injection via Microsoft Remote Asssistance (Msra.exe) by looking at suspicious child processes spawned from the aforementioned process. It has been a target used by many threat actors and used for discovery and persistence tactics

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \arp.exe
  - \cmd.exe
  - \net.exe
  - \netstat.exe
  - \nslookup.exe
  - \route.exe
  - \schtasks.exe
  - \whoami.exe
  ParentCommandLine|endswith: msra.exe
  ParentImage|endswith: \msra.exe
```

## MITRE ATT&CK
- T1055

## False Positives
- Legitimate use of Msra.exe

## References
- https://www.microsoft.com/security/blog/2021/12/09/a-closer-look-at-qakbots-latest-building-blocks-and-how-to-knock-them-down/
- https://www.fortinet.com/content/dam/fortinet/assets/analyst-reports/ar-qakbot.pdf

## Metadata
- **Author:** Alexander McDonald
- **Date:** 2022-06-24
- **Rule ID:** `744a188b-0415-4792-896f-11ddb0588dbc`
- **Source file:** `windows/process_creation/proc_creation_win_msra_process_injection.yml`
