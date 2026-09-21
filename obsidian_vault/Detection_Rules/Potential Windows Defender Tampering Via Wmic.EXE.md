---
type: detection_rule
title: "Potential Windows Defender Tampering Via Wmic.EXE"
rule_id: 51cbac1e-eee3-4a90-b1b7-358efb81fa0a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1685]
---

# Potential Windows Defender Tampering Via Wmic.EXE

## Description
Detects potential tampering with Windows Defender settings such as adding exclusion using wmic

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: /Namespace:\\\\root\\Microsoft\\Windows\\Defender
selection_img:
- OriginalFileName: wmic.exe
- Image|endswith: \WMIC.exe
```

## MITRE ATT&CK
- T1047
- T1685

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/5c1e6f1b4fafd01c8d1ece85f510160fc1275fbf/atomics/T1562.001/T1562.001.md
- https://www.bleepingcomputer.com/news/security/gootkit-malware-bypasses-windows-defender-by-setting-path-exclusions/
- https://www.bleepingcomputer.com/news/security/iobit-forums-hacked-to-spread-ransomware-to-its-members/

## Metadata
- **Author:** frack113
- **Date:** 2022-12-11
- **Rule ID:** `51cbac1e-eee3-4a90-b1b7-358efb81fa0a`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_namespace_defender.yml`
