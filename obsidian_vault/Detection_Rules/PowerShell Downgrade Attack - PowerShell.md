---
type: detection_rule
title: "PowerShell Downgrade Attack - PowerShell"
rule_id: 6331d09b-4785-4c13-980f-f96661356249
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Downgrade Attack - PowerShell

## Description
Detects PowerShell downgrade attack by comparing the host versions with the actually used engine version 2.0

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter_main
filter_main:
  Data|contains: HostVersion=2.
selection:
  Data|contains: EngineVersion=2.
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- http://www.leeholmes.com/blog/2017/03/17/detecting-and-preventing-powershell-downgrade-attacks/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Lee Holmes (idea), Harish Segar (improvements)
- **Date:** 2017-03-22
- **Rule ID:** `6331d09b-4785-4c13-980f-f96661356249`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_downgrade_attack.yml`
