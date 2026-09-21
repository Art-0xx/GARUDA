---
type: detection_rule
title: "LSASS Access From Potentially White-Listed Processes"
rule_id: 4be8b654-0c01-4c9d-a10c-6b28467fc651
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Access From Potentially White-Listed Processes

## Description
Detects a possible process memory dump that uses a white-listed filename like TrolleyExpress.exe as a way to dump the LSASS process memory without Microsoft Defender interference

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  GrantedAccess|endswith:
  - '10'
  - '30'
  - '50'
  - '70'
  - '90'
  - B0
  - D0
  - F0
  - '18'
  - '38'
  - '58'
  - '78'
  - '98'
  - B8
  - D8
  - F8
  - 1A
  - 3A
  - 5A
  - 7A
  - 9A
  - BA
  - DA
  - FA
  - '0x14C2'
  - FF
  SourceImage|endswith:
  - \TrolleyExpress.exe
  - \ProcessDump.exe
  - \dump64.exe
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/_xpn_/status/1491557187168178176
- https://www.ired.team/offensive-security/credential-access-and-credential-dumping/dump-credentials-from-lsass-process-without-mimikatz
- https://twitter.com/mrd0x/status/1460597833917251595

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-10
- **Rule ID:** `4be8b654-0c01-4c9d-a10c-6b28467fc651`
- **Source file:** `windows/process_access/proc_access_win_lsass_whitelisted_process_names.yml`
