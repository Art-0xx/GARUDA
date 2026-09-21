---
type: detection_rule
title: "Potential Encoded PowerShell Patterns In CommandLine"
rule_id: cdf05894-89e7-4ead-b2b0-0a5f97a90f2f
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Potential Encoded PowerShell Patterns In CommandLine

## Description
Detects specific combinations of encoding methods in PowerShell via the commandline

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and (all of selection_to_* or 1 of selection_gen_*)
selection_gen_1:
  CommandLine|contains|all:
  - char
  - join
selection_gen_2:
  CommandLine|contains|all:
  - split
  - join
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_to_1:
  CommandLine|contains:
  - ToInt
  - ToDecimal
  - ToByte
  - ToUint
  - ToSingle
  - ToSByte
selection_to_2:
  CommandLine|contains:
  - ToChar
  - ToString
  - String
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=65

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Vasiliy Burov (rule), oscd.community, Tim Shelton
- **Date:** 2020-10-11
- **Rule ID:** `cdf05894-89e7-4ead-b2b0-0a5f97a90f2f`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_encoding_patterns.yml`
