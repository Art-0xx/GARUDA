---
type: detection_rule
title: "Invoke-Obfuscation Via Stdin"
rule_id: 9c14c9fa-1a63-4a64-8e57-d19280559490
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Stdin

## Description
Detects Obfuscated Powershell via Stdin in Scripts

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|re: (?i)(?:set).*&&\s?set.*(?:environment|invoke|\$\{?input).*&&.*"
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
- **Rule ID:** `9c14c9fa-1a63-4a64-8e57-d19280559490`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_via_stdin.yml`
