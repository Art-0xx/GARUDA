---
type: detection_rule
title: "Potential Credential Dumping Via WER"
rule_id: 9a4ccd1a-3526-4d99-b980-9f9c5d3a6ff3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Potential Credential Dumping Via WER

## Description
Detects potential credential dumping via Windows Error Reporting LSASS Shtinkering technique which uses the Windows Error Reporting to dump lsass

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_lsass:
  ParentImage: C:\Windows\System32\lsass.exe
selection_cli:
  CommandLine|contains|all:
  - ' -u -p '
  - ' -ip '
  - ' -s '
  ParentUser|contains:
  - AUTHORI
  - AUTORI
  User|contains:
  - AUTHORI
  - AUTORI
selection_img:
- Image|endswith: \Werfault.exe
- OriginalFileName: WerFault.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Windows Error Reporting might produce similar behavior. In that case, check the PID associated with the "-p" parameter in the CommandLine.

## References
- https://github.com/deepinstinct/Lsass-Shtinkering
- https://media.defcon.org/DEF%20CON%2030/DEF%20CON%2030%20presentations/Asaf%20Gilboa%20-%20LSASS%20Shtinkering%20Abusing%20Windows%20Error%20Reporting%20to%20Dump%20LSASS.pdf

## Metadata
- **Author:** @pbssubhash , Nasreddine Bencherchali
- **Date:** 2022-12-08
- **Rule ID:** `9a4ccd1a-3526-4d99-b980-9f9c5d3a6ff3`
- **Source file:** `windows/process_creation/proc_creation_win_werfault_lsass_shtinkering.yml`
