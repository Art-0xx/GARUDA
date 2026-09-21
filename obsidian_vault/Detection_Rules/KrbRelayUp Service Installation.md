---
type: detection_rule
title: "KrbRelayUp Service Installation"
rule_id: e97d9903-53b2-41fc-8cb9-889ed4093e80
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543]
---

# KrbRelayUp Service Installation

## Description
Detects service creation from KrbRelayUp tool used for privilege escalation in Windows domain environments where LDAP signing is not enforced (the default settings)

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 7045
  ServiceName: KrbSCM
```

## MITRE ATT&CK
- T1543

## False Positives
- Unknown

## References
- https://github.com/Dec0ne/KrbRelayUp

## Metadata
- **Author:** Sittikorn S, Tim Shelton
- **Date:** 2022-05-11
- **Rule ID:** `e97d9903-53b2-41fc-8cb9-889ed4093e80`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_krbrelayup_service_installation.yml`
