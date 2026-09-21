---
type: detection_rule
title: "New Kernel Driver Via SC.EXE"
rule_id: 431a1fdb-4799-4f3b-91c3-a683b003fc49
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# New Kernel Driver Via SC.EXE

## Description
Detects creation of a new service (kernel driver) with the type "kernel"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_avira_driver:
- CommandLine|contains|all:
  - create netprotection_network_filter
  - 'type= kernel start= '
  - binPath= System32\drivers\netprotection_network_filter
  - DisplayName= netprotection_network_filter
  - group= PNP_TDI tag= yes
- CommandLine|contains|all:
  - create avelam binpath=C:\Windows\system32\drivers\avelam.sys
  - type=kernel start=boot error=critical group=Early-Launch
selection:
  CommandLine|contains:
  - create
  - config
  CommandLine|contains|all:
  - binPath
  - type
  - kernel
  Image|endswith: \sc.exe
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Rare legitimate installation of kernel drivers via sc.exe

## References
- https://www.aon.com/cyber-solutions/aon_cyber_labs/yours-truly-signed-av-driver-weaponizing-an-antivirus-driver/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-14
- **Rule ID:** `431a1fdb-4799-4f3b-91c3-a683b003fc49`
- **Source file:** `windows/process_creation/proc_creation_win_sc_new_kernel_driver.yml`
