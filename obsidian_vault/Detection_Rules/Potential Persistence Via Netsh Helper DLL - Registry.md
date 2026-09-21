---
type: detection_rule
title: "Potential Persistence Via Netsh Helper DLL - Registry"
rule_id: c90362e0-2df3-4e61-94fe-b37615814cb1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.007]
---

# Potential Persistence Via Netsh Helper DLL - Registry

## Description
Detects changes to the Netsh registry key to add a new DLL value. This change might be an indication of a potential persistence attempt by adding a malicious Netsh helper

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_poqexec:
  Details:
  - ipmontr.dll
  - iasmontr.dll
  - ippromon.dll
  Image: C:\Windows\System32\poqexec.exe
selection:
  Details|contains: .dll
  TargetObject|contains: \SOFTWARE\Microsoft\NetSh
```

## MITRE ATT&CK
- T1546.007

## False Positives
- Legitimate helper added by different programs and the OS

## References
- https://www.ired.team/offensive-security/persistence/t1128-netsh-helper-dll
- https://pentestlab.blog/2019/10/29/persistence-netsh-helper-dll/

## Metadata
- **Author:** Anish Bogati
- **Date:** 2023-11-28
- **Rule ID:** `c90362e0-2df3-4e61-94fe-b37615814cb1`
- **Source file:** `windows/registry/registry_set/registry_set_netsh_helper_dll_potential_persistence.yml`
