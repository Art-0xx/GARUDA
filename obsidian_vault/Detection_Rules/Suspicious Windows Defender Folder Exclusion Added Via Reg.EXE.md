---
type: detection_rule
title: "Suspicious Windows Defender Folder Exclusion Added Via Reg.EXE"
rule_id: 48917adc-a28e-4f5d-b729-11e75da8941f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Suspicious Windows Defender Folder Exclusion Added Via Reg.EXE

## Description
Detects the usage of "reg.exe" to add Defender folder exclusions. Qbot has been seen using this technique to add exclusions for folders within AppData and ProgramData.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - SOFTWARE\Microsoft\Windows Defender\Exclusions\Paths
  - SOFTWARE\Microsoft\Microsoft Antimalware\Exclusions\Paths
  CommandLine|contains|all:
  - 'ADD '
  - '/t '
  - 'REG_DWORD '
  - '/v '
  - '/d '
  - '0'
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate use

## References
- https://thedfirreport.com/2022/02/07/qbot-likes-to-move-it-move-it/
- https://redcanary.com/threat-detection-report/threats/qbot/

## Metadata
- **Author:** frack113
- **Date:** 2022-02-13
- **Rule ID:** `48917adc-a28e-4f5d-b729-11e75da8941f`
- **Source file:** `windows/process_creation/proc_creation_win_reg_defender_exclusion.yml`
