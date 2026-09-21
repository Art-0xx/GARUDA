---
type: detection_rule
title: "UAC Bypass Abusing Winsat Path Parsing - Registry"
rule_id: 6597be7b-ac61-4ac8-bef4-d3ec88174853
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Abusing Winsat Path Parsing - Registry

## Description
Detects the pattern of UAC Bypass using a path parsing issue in winsat.exe (UACMe 52)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|endswith: \appdata\local\temp\system32\winsat.exe
  Details|startswith: c:\users\
  TargetObject|contains: \Root\InventoryApplicationFile\winsat.exe|
  TargetObject|endswith: \LowerCaseLongPath
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-30
- **Rule ID:** `6597be7b-ac61-4ac8-bef4-d3ec88174853`
- **Source file:** `windows/registry/registry_set/registry_set_uac_bypass_winsat.yml`
