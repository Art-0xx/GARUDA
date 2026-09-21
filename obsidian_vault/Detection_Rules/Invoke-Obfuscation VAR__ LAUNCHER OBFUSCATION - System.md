---
type: detection_rule
title: "Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - System"
rule_id: 14bcba49-a428-42d9-b943-e2ce0f0f7ae6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - System

## Description
Detects Obfuscated Powershell via VAR++ LAUNCHER

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
  ImagePath|contains:
  - '{0}'
  - '{1}'
  - '{2}'
  - '{3}'
  - '{4}'
  - '{5}'
  ImagePath|contains|all:
  - '&&set'
  - cmd
  - /c
  - -f
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `14bcba49-a428-42d9-b943-e2ce0f0f7ae6`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_var_services.yml`
