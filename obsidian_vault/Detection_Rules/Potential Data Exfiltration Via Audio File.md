---
type: detection_rule
title: "Potential Data Exfiltration Via Audio File"
rule_id: e4f93c99-396f-47c8-bb0f-201b1fa69034
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Data Exfiltration Via Audio File

## Description
Detects potential exfiltration attempt via audio file using PowerShell

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_main and 1 of selection_header_*
selection_header_wav:
  ScriptBlockText|contains|all:
  - '0x52'
  - '0x49'
  - '0x46'
  - '0x57'
  - '0x41'
  - '0x56'
  - '0x45'
  - '0xAC'
selection_main:
  ScriptBlockText|contains|all:
  - '[System.Math]::'
  - '[IO.FileMode]::'
  - BinaryWriter
```

## False Positives
- Unknown

## References
- https://github.com/gtworek/PSBits/blob/e97cbbb173b31cbc4d37244d3412de0a114dacfb/NoDLP/bin2wav.ps1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-16
- **Rule ID:** `e4f93c99-396f-47c8-bb0f-201b1fa69034`
- **Source file:** `windows/powershell/powershell_script/posh_ps_audio_exfiltration.yml`
