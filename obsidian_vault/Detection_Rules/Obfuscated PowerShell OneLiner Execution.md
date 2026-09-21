---
type: detection_rule
title: "Obfuscated PowerShell OneLiner Execution"
rule_id: 44e24481-6202-4c62-9127-5a0ae8e3fe3d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1685]
---

# Obfuscated PowerShell OneLiner Execution

## Description
Detects the execution of a specific OneLiner to download and execute powershell modules in memory.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - http://127.0.0.1
  - '%{(IRM $_)}'
  - Invoke
  Image|endswith: \powershell.exe
```

## MITRE ATT&CK
- T1059.001
- T1685

## False Positives
- Unknown

## References
- https://thedfirreport.com/2022/05/09/seo-poisoning-a-gootloader-story/
- https://gist.github.com/mgeeky/3b11169ab77a7de354f4111aa2f0df38

## Metadata
- **Author:** @Kostastsale, TheDFIRReport
- **Date:** 2022-05-09
- **Rule ID:** `44e24481-6202-4c62-9127-5a0ae8e3fe3d`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_download_cradle_obfuscated.yml`
