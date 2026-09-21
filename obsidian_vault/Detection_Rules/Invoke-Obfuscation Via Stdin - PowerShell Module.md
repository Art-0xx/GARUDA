---
type: detection_rule
title: "Invoke-Obfuscation Via Stdin - PowerShell Module"
rule_id: c72aca44-8d52-45ad-8f81-f96c4d3c755e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Stdin - PowerShell Module

## Description
Detects Obfuscated Powershell via Stdin in Scripts

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_4103
selection_4103:
  Payload|re: (?i)(set).*&&\s?set.*(environment|invoke|\$?\{?input).*&&.*"
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
- **Rule ID:** `c72aca44-8d52-45ad-8f81-f96c4d3c755e`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_stdin.yml`
