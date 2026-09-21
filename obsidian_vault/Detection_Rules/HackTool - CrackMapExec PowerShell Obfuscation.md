---
type: detection_rule
title: "HackTool - CrackMapExec PowerShell Obfuscation"
rule_id: 6f8b3439-a203-45dc-a88b-abf57ea15ccf
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1027.005]
---

# HackTool - CrackMapExec PowerShell Obfuscation

## Description
The CrachMapExec pentesting framework implements a PowerShell obfuscation with some static strings detected by this rule.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - join*split
  - ( $ShellId[1]+$ShellId[13]+'x')
  - ( $PSHome[*]+$PSHOME[*]+
  - ( $env:Public[13]+$env:Public[5]+'x')
  - ( $env:ComSpec[4,*,25]-Join'')
  - '[1,3]+''x''-Join'''')'
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001
- T1027.005

## False Positives
- Unknown

## References
- https://github.com/byt3bl33d3r/CrackMapExec
- https://github.com/byt3bl33d3r/CrackMapExec/blob/0a49f75347b625e81ee6aa8c33d3970b5515ea9e/cme/helpers/powershell.py#L242

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2020-05-22
- **Rule ID:** `6f8b3439-a203-45dc-a88b-abf57ea15ccf`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_crackmapexec_powershell_obfuscation.yml`
