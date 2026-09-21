---
type: detection_rule
title: "HackTool - Empire PowerShell Launch Parameters"
rule_id: 79f4ede3-402e-41c8-bc3e-ebbf5f162581
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# HackTool - Empire PowerShell Launch Parameters

## Description
Detects suspicious powershell command line parameters used in Empire

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
  - ' -NoP -sta -NonI -W Hidden -Enc '
  - ' -noP -sta -w 1 -enc '
  - ' -NoP -NonI -W Hidden -enc '
  - ' -noP -sta -w 1 -enc'
  - ' -enc  SQB'
  - ' -nop -exec bypass -EncodedCommand '
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Other tools that incidentally use the same command line parameters

## References
- https://github.com/EmpireProject/Empire/blob/c2ba61ca8d2031dad0cfc1d5770ba723e8b710db/lib/common/helpers.py#L165
- https://github.com/EmpireProject/Empire/blob/e37fb2eef8ff8f5a0a689f1589f424906fe13055/lib/modules/powershell/persistence/powerbreach/deaduser.py#L191
- https://github.com/EmpireProject/Empire/blob/e37fb2eef8ff8f5a0a689f1589f424906fe13055/lib/modules/powershell/persistence/powerbreach/resolver.py#L178
- https://github.com/EmpireProject/Empire/blob/e37fb2eef8ff8f5a0a689f1589f424906fe13055/data/module_source/privesc/Invoke-EventVwrBypass.ps1#L64

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-04-20
- **Rule ID:** `79f4ede3-402e-41c8-bc3e-ebbf5f162581`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_empire_powershell_launch.yml`
