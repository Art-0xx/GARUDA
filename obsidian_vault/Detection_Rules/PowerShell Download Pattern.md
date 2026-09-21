---
type: detection_rule
title: "PowerShell Download Pattern"
rule_id: 3b6ab547-8ec2-4991-b9d2-2b06702a48d7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Download Pattern

## Description
Detects a Powershell process that contains download commands in its command line string

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
  - string(
  - file(
  CommandLine|contains|all:
  - new-object
  - net.webclient).
  - download
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell_ISE.EXE
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://blog.redteam.pl/2020/06/black-kingdom-ransomware.html
- https://lab52.io/blog/winter-vivern-all-summer/
- https://hatching.io/blog/powershell-analysis/

## Metadata
- **Author:** Florian Roth (Nextron Systems), oscd.community, Jonhnathan Ribeiro
- **Date:** 2019-01-16
- **Rule ID:** `3b6ab547-8ec2-4991-b9d2-2b06702a48d7`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_download_patterns.yml`
