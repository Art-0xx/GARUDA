---
type: detection_rule
title: "Winlogon AllowMultipleTSSessions Enable"
rule_id: f7997770-92c3-4ec9-b112-774c4ef96f96
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Winlogon AllowMultipleTSSessions Enable

## Description
Detects when the 'AllowMultipleTSSessions' value is enabled.
Which allows for multiple Remote Desktop connection sessions to be opened at once.
This is often used by attacker as a way to connect to an RDP session without disconnecting the other users

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|endswith: DWORD (0x00000001)
  TargetObject|endswith: \Microsoft\Windows NT\CurrentVersion\Winlogon\AllowMultipleTSSessions
```

## MITRE ATT&CK
- T1112

## False Positives
- Legitimate use of the multi session functionality

## References
- http://blog.talosintelligence.com/2022/09/lazarus-three-rats.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `f7997770-92c3-4ec9-b112-774c4ef96f96`
- **Source file:** `windows/registry/registry_set/registry_set_winlogon_allow_multiple_tssessions.yml`
