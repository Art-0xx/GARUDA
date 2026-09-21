---
type: detection_rule
title: "DLL Load via LSASS"
rule_id: b3503044-60ce-4bf4-bbcb-e3db98788823
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.008]
---

# DLL Load via LSASS

## Description
Detects a method to load DLL via LSASS process using an undocumented Registry key

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_domain_controller:
  Details:
  - '%%systemroot%%\system32\ntdsa.dll'
  - '%%systemroot%%\system32\lsadb.dll'
  Image: C:\Windows\system32\lsass.exe
selection:
  TargetObject|contains:
  - \CurrentControlSet\Services\NTDS\DirectoryServiceExtPt
  - \CurrentControlSet\Services\NTDS\LsaDbExtPt
```

## MITRE ATT&CK
- T1547.008

## False Positives
- Unknown

## References
- https://blog.xpnsec.com/exploring-mimikatz-part-1/
- https://twitter.com/SBousseaden/status/1183745981189427200

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-10-16
- **Rule ID:** `b3503044-60ce-4bf4-bbcb-e3db98788823`
- **Source file:** `windows/registry/registry_event/registry_event_susp_lsass_dll_load.yml`
