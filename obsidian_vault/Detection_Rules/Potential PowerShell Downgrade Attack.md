---
type: detection_rule
title: "Potential PowerShell Downgrade Attack"
rule_id: b3512211-c67e-4707-bedc-66efc7848863
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Potential PowerShell Downgrade Attack

## Description
Detects PowerShell downgrade attack by comparing the host versions with the actually used engine version 2.0

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
  - ' -version 2 '
  - ' -versio 2 '
  - ' -versi 2 '
  - ' -vers 2 '
  - ' -ver 2 '
  - ' -ve 2 '
  - ' -v 2 '
  Image|endswith: \powershell.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- http://www.leeholmes.com/blog/2017/03/17/detecting-and-preventing-powershell-downgrade-attacks/
- https://github.com/r00t-3xp10it/hacking-material-books/blob/43cb1e1932c16ff1f58b755bc9ab6b096046853f/obfuscation/simple_obfuscation.md#bypass-or-avoid-amsi-by-version-downgrade-

## Metadata
- **Author:** Harish Segar (rule)
- **Date:** 2020-03-20
- **Rule ID:** `b3512211-c67e-4707-bedc-66efc7848863`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_downgrade_attack.yml`
