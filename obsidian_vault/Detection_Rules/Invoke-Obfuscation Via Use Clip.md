---
type: detection_rule
title: "Invoke-Obfuscation Via Use Clip"
rule_id: e1561947-b4e3-4a74-9bdd-83baed21bdb5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Clip

## Description
Detects Obfuscated Powershell via use Clip.exe in Scripts

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|re: (?i)echo.*clip.*&&.*(?:Clipboard|i`?n`?v`?o`?k`?e`?)
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
- **Date:** 2020-10-09
- **Rule ID:** `e1561947-b4e3-4a74-9bdd-83baed21bdb5`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_via_use_clip.yml`
