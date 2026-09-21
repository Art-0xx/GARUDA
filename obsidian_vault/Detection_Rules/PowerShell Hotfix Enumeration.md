---
type: detection_rule
title: "PowerShell Hotfix Enumeration"
rule_id: f5d1def8-1de0-4a0e-9794-1f6f27dd605c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# PowerShell Hotfix Enumeration

## Description
Detects call to "Win32_QuickFixEngineering" in order to enumerate installed hotfixes often used in "enum" scripts by attackers

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - Win32_QuickFixEngineering
  - HotFixID
```

## False Positives
- Legitimate administration scripts

## References
- https://github.com/411Hall/JAWS/blob/233f142fcb1488172aa74228a666f6b3c5c48f1d/jaws-enum.ps1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-21
- **Rule ID:** `f5d1def8-1de0-4a0e-9794-1f6f27dd605c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_hotfix_enum.yml`
