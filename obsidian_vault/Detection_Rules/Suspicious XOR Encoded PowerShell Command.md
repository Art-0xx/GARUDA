---
type: detection_rule
title: "Suspicious XOR Encoded PowerShell Command"
rule_id: bb780e0c-16cf-4383-8383-1e5471db6cf9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1140, attack.t1027]
---

# Suspicious XOR Encoded PowerShell Command

## Description
Detects presence of a potentially xor encoded powershell command

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_other:
  CommandLine|contains:
  - ForEach
  - for(
  - 'for '
  - '-join '
  - -join'
  - -join"
  - -join`
  - ::Join
  - '[char]'
selection_cli_xor:
  CommandLine|contains: bxor
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
- Description: Windows PowerShell
- Product: PowerShell Core 6
```

## MITRE ATT&CK
- T1059.001
- T1140
- T1027

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=65
- https://redcanary.com/blog/yellow-cockatoo/
- https://zero2auto.com/2020/05/19/netwalker-re/
- https://mez0.cc/posts/cobaltstrike-powershell-exec/

## Metadata
- **Author:** Sami Ruohonen, Harish Segar, Tim Shelton, Teymur Kheirkhabarov, Vasiliy Burov, oscd.community, Nasreddine Bencherchali
- **Date:** 2018-09-05
- **Rule ID:** `bb780e0c-16cf-4383-8383-1e5471db6cf9`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_xor_commandline.yml`
