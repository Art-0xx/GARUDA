---
type: detection_rule
title: "Potential Persistence Via AppCompat RegisterAppRestart Layer"
rule_id: b86852fb-4c77-48f9-8519-eb1b2c308b59
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.011]
---

# Potential Persistence Via AppCompat RegisterAppRestart Layer

## Description
Detects the setting of the REGISTERAPPRESTART compatibility layer on an application.
This compatibility layer allows an application to register for restart using the "RegisterApplicationRestart" API.
This can be potentially abused as a persistence mechanism.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains: REGISTERAPPRESTART
  TargetObject|contains: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers\
```

## MITRE ATT&CK
- T1546.011

## False Positives
- Legitimate applications making use of this feature for compatibility reasons

## References
- https://github.com/nasbench/Misc-Research/blob/d114d6a5e0a437d3818e492ef9864367152543e7/Other/Persistence-Via-RegisterAppRestart-Shim.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-01-01
- **Rule ID:** `b86852fb-4c77-48f9-8519-eb1b2c308b59`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_app_cpmpat_layer_registerapprestart.yml`
