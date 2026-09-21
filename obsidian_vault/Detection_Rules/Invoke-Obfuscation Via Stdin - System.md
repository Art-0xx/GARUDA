---
type: detection_rule
title: "Invoke-Obfuscation Via Stdin - System"
rule_id: 487c7524-f892-4054-b263-8a0ace63fc25
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Stdin - System

## Description
Detects Obfuscated Powershell via Stdin in Scripts

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
  - environment
  - invoke
  - input
  ImagePath|contains|all:
  - set
  - '&&'
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
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-12
- **Rule ID:** `487c7524-f892-4054-b263-8a0ace63fc25`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_stdin_services.yml`
