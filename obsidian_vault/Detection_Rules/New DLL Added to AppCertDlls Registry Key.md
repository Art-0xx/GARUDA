---
type: detection_rule
title: "New DLL Added to AppCertDlls Registry Key"
rule_id: 6aa1d992-5925-4e9f-a49b-845e51d1de01
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.009]
---

# New DLL Added to AppCertDlls Registry Key

## Description
Dynamic-link libraries (DLLs) that are specified in the AppCertDLLs value in the Registry key can be abused to obtain persistence and privilege escalation
by causing a malicious DLL to be loaded and run in the context of separate processes on the computer.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- TargetObject: HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCertDlls
- NewName: HKLM\SYSTEM\CurentControlSet\Control\Session Manager\AppCertDlls
```

## MITRE ATT&CK
- T1546.009

## False Positives
- Unknown

## References
- http://www.hexacorn.com/blog/2013/01/19/beyond-good-ol-run-key-part-3/
- https://eqllib.readthedocs.io/en/latest/analytics/14f90406-10a0-4d36-a672-31cabe149f2f.html

## Metadata
- **Author:** Ilyas Ochkov, oscd.community
- **Date:** 2019-10-25
- **Rule ID:** `6aa1d992-5925-4e9f-a49b-845e51d1de01`
- **Source file:** `windows/registry/registry_event/registry_event_new_dll_added_to_appcertdlls_registry_key.yml`
