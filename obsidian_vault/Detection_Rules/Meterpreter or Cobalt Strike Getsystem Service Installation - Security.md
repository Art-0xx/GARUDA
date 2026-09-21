---
type: detection_rule
title: "Meterpreter or Cobalt Strike Getsystem Service Installation - Security"
rule_id: ecbc5e16-58e0-4521-9c60-eb9a7ea4ad34
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.001, attack.t1134.002]
---

# Meterpreter or Cobalt Strike Getsystem Service Installation - Security

## Description
Detects the use of getsystem Meterpreter/Cobalt Strike command by detecting a specific service installation

## Log Source
```yaml
definition: The 'System Security Extension' audit subcategory need to be enabled to
  log the EID 4697
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection_eid and 1 of selection_cli_*
selection_cli_cmd:
  ServiceFileName|contains:
  - cmd
  - '%COMSPEC%'
  ServiceFileName|contains|all:
  - /c
  - echo
  - \pipe\
selection_cli_rundll:
  ServiceFileName|contains|all:
  - rundll32
  - .dll,a
  - '/p:'
selection_cli_share:
  ServiceFileName|startswith: \\\\127.0.0.1\\ADMIN$\
selection_eid:
  EventID: 4697
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
- **Rule ID:** `ecbc5e16-58e0-4521-9c60-eb9a7ea4ad34`
- **Source file:** `windows/builtin/security/win_security_meterpreter_or_cobaltstrike_getsystem_service_install.yml`
