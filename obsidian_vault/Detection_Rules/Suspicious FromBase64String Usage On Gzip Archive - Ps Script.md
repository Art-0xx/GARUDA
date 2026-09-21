---
type: detection_rule
title: "Suspicious FromBase64String Usage On Gzip Archive - Ps Script"
rule_id: df69cb1d-b891-4cd9-90c7-d617d90100ce
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1132.001]
---

# Suspicious FromBase64String Usage On Gzip Archive - Ps Script

## Description
Detects attempts of decoding a base64 Gzip archive in a PowerShell script. This technique is often used as a method to load malicious content into memory afterward.

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
  - FromBase64String
  - MemoryStream
  - H4sI
```

## MITRE ATT&CK
- T1132.001

## False Positives
- Legitimate administrative script

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=43

## Metadata
- **Author:** frack113
- **Date:** 2022-12-23
- **Rule ID:** `df69cb1d-b891-4cd9-90c7-d617d90100ce`
- **Source file:** `windows/powershell/powershell_script/posh_ps_frombase64string_archive.yml`
