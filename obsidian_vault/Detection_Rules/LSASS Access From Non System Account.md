---
type: detection_rule
title: "LSASS Access From Non System Account"
rule_id: 962fe167-e48d-4fd6-9974-11e5b9a5d6d1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Access From Non System Account

## Description
Detects potential mimikatz-like tools accessing LSASS from non system account

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  ProcessName|contains:
  - :\Program Files\
  - :\Program Files (x86)\
filter_main_service_account:
  SubjectUserName|endswith: $
filter_main_wmiprvse:
  AccessMask: '0x1410'
  ProcessName: C:\Windows\System32\wbem\WmiPrvSE.exe
filter_optional_steam:
  ProcessName|contains: \SteamLibrary\steamapps\
selection:
  AccessMask:
  - '0x100000'
  - '0x1010'
  - '0x1400'
  - '0x1410'
  - '0x1418'
  - '0x1438'
  - '0x143a'
  - '0x1f0fff'
  - '0x1f1fff'
  - '0x1f2fff'
  - '0x1f3fff'
  - '0x40'
  - 143a
  - 1f0fff
  - 1f1fff
  - 1f2fff
  - 1f3fff
  EventID:
  - 4663
  - 4656
  ObjectName|endswith: \lsass.exe
  ObjectType: Process
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://threathunterplaybook.com/hunts/windows/170105-LSASSMemoryReadAccess/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-06-20
- **Rule ID:** `962fe167-e48d-4fd6-9974-11e5b9a5d6d1`
- **Source file:** `windows/builtin/security/win_security_lsass_access_non_system_account.yml`
