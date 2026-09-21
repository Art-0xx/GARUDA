---
type: detection_rule
title: "Rundll32 Execution Without Parameters"
rule_id: 5bb68627-3198-40ca-b458-49f973db8752
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002, attack.t1570, attack.t1569.002]
---

# Rundll32 Execution Without Parameters

## Description
Detects rundll32 execution without parameters as observed when running Metasploit windows/smb/psexec exploit module

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine:
  - rundll32.exe
  - rundll32
```

## MITRE ATT&CK
- T1021.002
- T1570
- T1569.002

## False Positives
- False positives may occur if a user called rundll32 from CLI with no options

## References
- https://bczyz1.github.io/2021/01/30/psexec.html

## Metadata
- **Author:** Bartlomiej Czyz, Relativity
- **Date:** 2021-01-31
- **Rule ID:** `5bb68627-3198-40ca-b458-49f973db8752`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_without_parameters.yml`
