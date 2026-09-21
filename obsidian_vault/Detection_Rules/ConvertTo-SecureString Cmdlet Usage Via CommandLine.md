---
type: detection_rule
title: "ConvertTo-SecureString Cmdlet Usage Via CommandLine"
rule_id: 74403157-20f5-415d-89a7-c505779585cf
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# ConvertTo-SecureString Cmdlet Usage Via CommandLine

## Description
Detects usage of the "ConvertTo-SecureString" cmdlet via the commandline. Which is fairly uncommon and could indicate potential suspicious activity

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ConvertTo-SecureString
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
- Legitimate use to pass password to different powershell commands

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=65
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/convertto-securestring?view=powershell-7.3#examples

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Vasiliy Burov (rule), oscd.community, Tim Shelton
- **Date:** 2020-10-11
- **Rule ID:** `74403157-20f5-415d-89a7-c505779585cf`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_cmdline_convertto_securestring.yml`
