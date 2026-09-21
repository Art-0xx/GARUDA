---
type: detection_rule
title: "Invoke-Obfuscation STDIN+ Launcher - Security"
rule_id: 0c718a5e-4284-4fb9-b4d9-b9a50b3a1974
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation STDIN+ Launcher - Security

## Description
Detects Obfuscated use of stdin to execute PowerShell

## Log Source
```yaml
definition: The 'System Security Extension' audit subcategory need to be enabled to
  log the EID 4697
product: windows
service: security
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  EventID: 4697
  ServiceFileName|contains|all:
  - cmd
  - powershell
selection2:
  ServiceFileName|contains:
  - ${input}
  - noexit
selection3:
  ServiceFileName|contains:
  - ' /c '
  - ' /r '
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-15
- **Rule ID:** `0c718a5e-4284-4fb9-b4d9-b9a50b3a1974`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_stdin_services_security.yml`
