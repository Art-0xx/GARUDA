---
type: detection_rule
title: "Permission Check Via Accesschk.EXE"
rule_id: c625d754-6a3d-4f65-9c9a-536aea960d37
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# Permission Check Via Accesschk.EXE

## Description
Detects the usage of the "Accesschk" utility, an access and privilege audit tool developed by SysInternal and often being abused by attacker to verify process privileges

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains:
  - 'uwcqv '
  - 'kwsu '
  - 'qwsu '
  - 'uwdqs '
selection_img:
- Product|endswith: AccessChk
- Description|contains: Reports effective permissions
- Image|endswith:
  - \accesschk.exe
  - \accesschk64.exe
  - \accesschk64a.exe
- OriginalFileName: accesschk.exe
```

## MITRE ATT&CK
- T1069.001

## False Positives
- System administrator Usage

## References
- https://speakerdeck.com/heirhabarov/hunting-for-privilege-escalation-in-windows-environment?slide=43
- https://www.youtube.com/watch?v=JGs-aKf2OtU&ab_channel=OFFZONEMOSCOW
- https://github.com/carlospolop/PEASS-ng/blob/fa0f2e17fbc1d86f1fd66338a40e665e7182501d/winPEAS/winPEASbat/winPEAS.bat
- https://github.com/gladiatx0r/Powerless/blob/04f553bbc0c65baf4e57344deff84e3f016e6b51/Powerless.bat

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Mangatas Tondang, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-10-13
- **Rule ID:** `c625d754-6a3d-4f65-9c9a-536aea960d37`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_accesschk_check_permissions.yml`
