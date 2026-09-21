---
type: detection_rule
title: "PowerShell Called from an Executable Version Mismatch"
rule_id: c70e019b-1479-4b65-b0cc-cd0c6093a599
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Called from an Executable Version Mismatch

## Description
Detects PowerShell called from an executable by the version mismatch method

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_engine:
  Data|contains:
  - EngineVersion=2.
  - EngineVersion=4.
  - EngineVersion=5.
selection_host:
  Data|contains: HostVersion=3.
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://adsecurity.org/?p=2921

## Metadata
- **Author:** Sean Metcalf (source), Florian Roth (Nextron Systems)
- **Date:** 2017-03-05
- **Rule ID:** `c70e019b-1479-4b65-b0cc-cd0c6093a599`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_exe_calling_ps.yml`
