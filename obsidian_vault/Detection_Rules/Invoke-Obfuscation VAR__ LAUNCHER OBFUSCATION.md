---
type: detection_rule
title: "Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION"
rule_id: e9f55347-2928-4c06-88e5-1a7f8169942e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION

## Description
Detects Obfuscated Powershell via VAR++ LAUNCHER

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - '{0}'
  - '{1}'
  - '{2}'
  - '{3}'
  - '{4}'
  - '{5}'
  CommandLine|contains|all:
  - '&&set'
  - cmd
  - /c
  - -f
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
- **Rule ID:** `e9f55347-2928-4c06-88e5-1a7f8169942e`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_via_var.yml`
