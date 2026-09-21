---
type: detection_rule
title: "New Netsh Helper DLL Registered From A Suspicious Location"
rule_id: e7b18879-676e-4a0e-ae18-27039185a8e7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.007]
---

# New Netsh Helper DLL Registered From A Suspicious Location

## Description
Detects changes to the Netsh registry key to add a new DLL value that is located on a suspicious location. This change might be an indication of a potential persistence attempt by adding a malicious Netsh helper

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_target and 1 of selection_folders_*
selection_folders_1:
  Details|contains:
  - :\Perflogs\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \Temporary Internet
selection_folders_2:
- Details|contains|all:
  - :\Users\
  - \Favorites\
- Details|contains|all:
  - :\Users\
  - \Favourites\
- Details|contains|all:
  - :\Users\
  - \Contacts\
- Details|contains|all:
  - :\Users\
  - \Pictures\
selection_target:
  TargetObject|contains: \SOFTWARE\Microsoft\NetSh
```

## MITRE ATT&CK
- T1546.007

## False Positives
- Unknown

## References
- https://www.ired.team/offensive-security/persistence/t1128-netsh-helper-dll
- https://pentestlab.blog/2019/10/29/persistence-netsh-helper-dll/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-11-28
- **Rule ID:** `e7b18879-676e-4a0e-ae18-27039185a8e7`
- **Source file:** `windows/registry/registry_set/registry_set_netsh_help_dll_persistence_susp_location.yml`
