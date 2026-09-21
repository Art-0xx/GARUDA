---
type: detection_rule
title: "Windows Defender Service Disabled - Registry"
rule_id: e1aa95de-610a-427d-b9e7-9b46cfafbe6a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Service Disabled - Registry

## Description
Detects when an attacker or tool disables the  Windows Defender service (WinDefend) via the registry

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000004)
  TargetObject|endswith: \Services\WinDefend\Start
```

## MITRE ATT&CK
- T1685

## False Positives
- Administrator actions

## References
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://gist.github.com/anadr/7465a9fde63d41341136949f14c21105

## Metadata
- **Author:** Ján Trenčanský, frack113, AlertIQ, Nasreddine Bencherchali
- **Date:** 2022-08-01
- **Rule ID:** `e1aa95de-610a-427d-b9e7-9b46cfafbe6a`
- **Source file:** `windows/registry/registry_set/registry_set_disable_windows_defender_service.yml`
