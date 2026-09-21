---
type: detection_rule
title: "UAC Bypass Using Windows Media Player - Registry"
rule_id: 5f9db380-ea57-4d1e-beab-8a2d33397e93
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Windows Media Player - Registry

## Description
Detects the pattern of UAC Bypass using Windows Media Player osksupport.dll (UACMe 32)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: Binary Data
  TargetObject|endswith: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Compatibility
    Assistant\Store\C:\Program Files\Windows Media Player\osk.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `5f9db380-ea57-4d1e-beab-8a2d33397e93`
- **Source file:** `windows/registry/registry_set/registry_set_uac_bypass_wmp.yml`
