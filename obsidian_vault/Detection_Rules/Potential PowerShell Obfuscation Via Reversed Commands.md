---
type: detection_rule
title: "Potential PowerShell Obfuscation Via Reversed Commands"
rule_id: b6b49cd1-34d6-4ead-b1bf-176e9edba9a4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Potential PowerShell Obfuscation Via Reversed Commands

## Description
Detects the presence of reversed PowerShell commands in the CommandLine. This is often used as a method of obfuscation by attackers

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_encoded_keyword:
  CommandLine|contains:
  - ' -EncodedCommand '
  - ' -enc '
selection_cli:
  CommandLine|contains:
  - hctac
  - kaerb
  - dnammoc
  - ekovn
  - eliFd
  - rahc
  - etirw
  - golon
  - tninon
  - eddih
  - tpircS
  - ssecorp
  - llehsrewop
  - esnopser
  - daolnwod
  - tneilCbeW
  - tneilc
  - ptth
  - elifotevas
  - 46esab
  - htaPpmeTteG
  - tcejbO
  - maerts
  - hcaerof
  - retupmoc
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unlikely

## References
- https://2019.offzone.moscow/ru/report/hunting-for-powershell-abuses/
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=66

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Vasiliy Burov (rule), oscd.community, Tim Shelton
- **Date:** 2020-10-11
- **Rule ID:** `b6b49cd1-34d6-4ead-b1bf-176e9edba9a4`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_cmdline_reversed_strings.yml`
