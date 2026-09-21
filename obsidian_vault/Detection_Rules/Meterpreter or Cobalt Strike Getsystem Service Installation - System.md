---
type: detection_rule
title: "Meterpreter or Cobalt Strike Getsystem Service Installation - System"
rule_id: 843544a7-56e0-4dcc-a44f-5cc266dd97d6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.001, attack.t1134.002]
---

# Meterpreter or Cobalt Strike Getsystem Service Installation - System

## Description
Detects the use of getsystem Meterpreter/Cobalt Strike command by detecting a specific service installation

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection_id and 1 of selection_cli_*
selection_cli_cmd:
  ImagePath|contains:
  - cmd
  - '%COMSPEC%'
  ImagePath|contains|all:
  - /c
  - echo
  - \pipe\
selection_cli_rundll:
  ImagePath|contains|all:
  - rundll32
  - .dll,a
  - '/p:'
selection_cli_share:
  ImagePath|startswith: \\\\127.0.0.1\\ADMIN$\
selection_id:
  EventID: 7045
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1134.001
- T1134.002

## False Positives
- Unlikely

## References
- https://speakerdeck.com/heirhabarov/hunting-for-privilege-escalation-in-windows-environment
- https://blog.cobaltstrike.com/2014/04/02/what-happens-when-i-type-getsystem/

## Metadata
- **Author:** Teymur Kheirkhabarov, Ecco, Florian Roth (Nextron Systems)
- **Date:** 2019-10-26
- **Rule ID:** `843544a7-56e0-4dcc-a44f-5cc266dd97d6`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_meterpreter_or_cobaltstrike_getsystem_service_installation.yml`
