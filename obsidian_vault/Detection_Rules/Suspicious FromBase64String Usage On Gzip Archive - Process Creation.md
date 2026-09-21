---
type: detection_rule
title: "Suspicious FromBase64String Usage On Gzip Archive - Process Creation"
rule_id: d75d6b6b-adb9-48f7-824b-ac2e786efe1f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1132.001]
---

# Suspicious FromBase64String Usage On Gzip Archive - Process Creation

## Description
Detects attempts of decoding a base64 Gzip archive via PowerShell. This technique is often used as a method to load malicious content into memory afterward.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
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
- **Rule ID:** `d75d6b6b-adb9-48f7-824b-ac2e786efe1f`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_frombase64string_archive.yml`
