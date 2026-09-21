---
type: detection_rule
title: "Invoke-Obfuscation CLIP+ Launcher - PowerShell Module"
rule_id: a136cde0-61ad-4a61-9b82-8dc490e60dd2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation CLIP+ Launcher - PowerShell Module

## Description
Detects Obfuscated use of Clip.exe to execute PowerShell

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_4103
selection_4103:
  Payload|re: cmd.{0,5}(?:/c|/r).+clip(?:\.exe)?.{0,4}&&.+clipboard]::\(\s\\"\{\d\}.+-f.+"
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `a136cde0-61ad-4a61-9b82-8dc490e60dd2`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_clip.yml`
