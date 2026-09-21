---
type: detection_rule
title: "Detected Windows Software Discovery - PowerShell"
rule_id: 2650dd1a-eb2a-412d-ac36-83f06c4f2282
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1518]
---

# Detected Windows Software Discovery - PowerShell

## Description
Adversaries may attempt to enumerate software for a variety of reasons, such as figuring out what security measures are present or if the compromised system has a version of software that is vulnerable.

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
  - get-itemProperty
  - \software\
  - select-object
  - format-table
```

## MITRE ATT&CK
- T1518

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1518/T1518.md
- https://github.com/harleyQu1nn/AggressorScripts

## Metadata
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-16
- **Rule ID:** `2650dd1a-eb2a-412d-ac36-83f06c4f2282`
- **Source file:** `windows/powershell/powershell_script/posh_ps_software_discovery.yml`
