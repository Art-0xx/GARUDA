---
type: detection_rule
title: "Suspicious Program Names"
rule_id: efdd8dd5-cee8-4e59-9390-7d4d5e4dd6f6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Suspicious Program Names

## Description
Detects suspicious patterns in program names or folders that are often found in malicious samples or hacktools

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection_commandline:
  CommandLine|contains:
  - inject.ps1
  - Invoke-CVE
  - pupy.ps1
  - payload.ps1
  - beacon.ps1
  - PowerView.ps1
  - bypass.ps1
  - obfuscated.ps1
  - obfusc.ps1
  - obfus.ps1
  - obfs.ps1
  - evil.ps1
  - MiniDogz.ps1
  - _enc.ps1
  - \shell.ps1
  - \rshell.ps1
  - revshell.ps1
  - \av.ps1
  - \av_test.ps1
  - adrecon.ps1
  - mimikatz.ps1
  - \PowerUp_
  - powerup.ps1
  - \Temp\a.ps1
  - \Temp\p.ps1
  - \Temp\1.ps1
  - Hound.ps1
  - encode.ps1
  - powercat.ps1
selection_image:
- Image|contains:
  - \CVE-202
  - \CVE202
- Image|endswith:
  - \poc.exe
  - \artifact.exe
  - \artifact64.exe
  - \artifact_protected.exe
  - \artifact32.exe
  - \artifact32big.exe
  - obfuscated.exe
  - obfusc.exe
  - \meterpreter
```

## MITRE ATT&CK
- T1059

## False Positives
- Legitimate tools that accidentally match on the searched patterns

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1560.001/T1560.001.md

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-11
- **Rule ID:** `efdd8dd5-cee8-4e59-9390-7d4d5e4dd6f6`
- **Source file:** `windows/process_creation/proc_creation_win_susp_progname.yml`
