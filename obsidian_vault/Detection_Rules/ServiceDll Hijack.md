---
type: detection_rule
title: "ServiceDll Hijack"
rule_id: 612e47e9-8a59-43a6-b404-f48683f45bd6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# ServiceDll Hijack

## Description
Detects changes to the "ServiceDLL" value related to a service in the registry.
This is often used as a method of persistence.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_domain_controller:
  Details: '%%systemroot%%\system32\ntdsa.dll'
  Image: C:\Windows\system32\lsass.exe
  TargetObject|endswith: \Services\NTDS\Parameters\ServiceDll
filter_main_poqexec:
  Image: C:\Windows\System32\poqexec.exe
filter_main_printextensionmanger_1:
  Details: C:\Windows\system32\spool\drivers\x64\3\PrintConfig.dll
filter_main_printextensionmanger_2:
  Details|endswith: \arm64\PrintConfig.dll
  Details|startswith: C:\WINDOWS\System32\DriverStore\FileRepository\
  Image|endswith: \regsvr32.exe
  TargetObject|endswith: \Services\PrintNotify\Parameters\ServiceDll
filter_optional_safetica:
  Details: C:\Windows\System32\STAgent.dll
  Image|endswith: \regsvr32.exe
selection:
  TargetObject|contains|all:
  - \System\
  - ControlSet
  - \Services\
  TargetObject|endswith: \Parameters\ServiceDll
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Administrative scripts
- Installation of a service

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1543.003/T1543.003.md#atomic-test-4---tinyturla-backdoor-service-w64time
- https://www.hexacorn.com/blog/2013/09/19/beyond-good-ol-run-key-part-4/

## Metadata
- **Author:** frack113
- **Date:** 2022-02-04
- **Rule ID:** `612e47e9-8a59-43a6-b404-f48683f45bd6`
- **Source file:** `windows/registry/registry_set/registry_set_servicedll_hijack.yml`
