---
type: detection_rule
title: "Powershell Token Obfuscation - Process Creation"
rule_id: deb9b646-a508-44ee-b7c9-d8965921c6b6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027.009]
---

# Powershell Token Obfuscation - Process Creation

## Description
Detects TOKEN OBFUSCATION technique from Invoke-Obfuscation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_envpath:
  CommandLine|contains: ${env:path}
selection:
- CommandLine|re: \w+`(?:\w+|-|.)`[\w+|\s]
- CommandLine|re: '"(?:\{\d\})+"\s*-f'
- CommandLine|re: (?i)\$\{`?e`?n`?v`?:`?p`?a`?t`?h`?\}
```

## MITRE ATT&CK
- T1027.009

## False Positives
- Unknown

## References
- https://github.com/danielbohannon/Invoke-Obfuscation

## Metadata
- **Author:** frack113
- **Date:** 2022-12-27
- **Rule ID:** `deb9b646-a508-44ee-b7c9-d8965921c6b6`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_token_obfuscation.yml`
