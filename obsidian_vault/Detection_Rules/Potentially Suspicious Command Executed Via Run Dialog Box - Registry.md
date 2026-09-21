---
type: detection_rule
title: "Potentially Suspicious Command Executed Via Run Dialog Box - Registry"
rule_id: a7df0e9e-91a5-459a-a003-4cde67c2ff5d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Potentially Suspicious Command Executed Via Run Dialog Box - Registry

## Description
Detects execution of commands via the run dialog box on Windows by checking values of the "RunMRU" registry key.
This technique was seen being abused by threat actors to deceive users into pasting and executing malicious commands, often disguised as CAPTCHA verification steps.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_key and (all of selection_powershell_* or all of selection_wmic_*)
selection_key:
  TargetObject|contains: \Microsoft\Windows\CurrentVersion\Explorer\RunMRU
selection_powershell_command:
  Details|contains:
  - powershell
  - pwsh
selection_powershell_susp_keywords:
  Details|contains:
  - ' -e '
  - ' -ec '
  - ' -en '
  - ' -enc '
  - ' -enco'
  - ftp
  - Hidden
  - http
  - iex
  - Invoke-
selection_wmic_command:
  Details|contains: wmic
selection_wmic_susp_keywords:
  Details|contains:
  - shadowcopy
  - process call create
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://medium.com/@ahmed.moh.farou2/fake-captcha-campaign-on-arabic-pirated-movie-sites-delivers-lumma-stealer-4f203f7adabf
- https://medium.com/@shaherzakaria8/downloading-trojan-lumma-infostealer-through-capatcha-1f25255a0e71
- https://www.forensafe.com/blogs/runmrukey.html
- https://redcanary.com/blog/threat-intelligence/intelligence-insights-october-2024/

## Metadata
- **Author:** Ahmed Farouk, Nasreddine Bencherchali
- **Date:** 2024-11-01
- **Rule ID:** `a7df0e9e-91a5-459a-a003-4cde67c2ff5d`
- **Source file:** `windows/registry/registry_set/registry_set_runmru_susp_command_execution.yml`
