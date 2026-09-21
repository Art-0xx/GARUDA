---
type: detection_rule
title: "Security Event Logging Disabled via MiniNt Registry Key - Registry Set"
rule_id: 8839e550-52d7-4958-9f2f-e13c1e736838
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.001, attack.t1112]
---

# Security Event Logging Disabled via MiniNt Registry Key - Registry Set

## Description
Detects the addition of the 'MiniNt' key to the registry. Upon a reboot, Windows Event Log service will stop writing events.
Windows Event Log is a service that collects and stores event logs from the operating system and applications. It is an important component of Windows security and auditing.
Adversary may want to disable this service to disable logging of security events which could be used to detect their activities.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject: HKLM\System\CurrentControlSet\Control\MiniNt\(Default)
```

## MITRE ATT&CK
- T1685.001
- T1112

## False Positives
- Highly Unlikely

## References
- https://www.hackingarticles.in/defense-evasion-windows-event-logging-t1562-002/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-04-09
- **Rule ID:** `8839e550-52d7-4958-9f2f-e13c1e736838`
- **Source file:** `windows/registry/registry_set/registry_set_create_minint_key.yml`
