---
type: detection_rule
title: "System Disk And Volume Reconnaissance Via Wmic.EXE"
rule_id: c79da740-5030-45ec-a2e0-479e824a562c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1082]
---

# System Disk And Volume Reconnaissance Via Wmic.EXE

## Description
An adversary might use WMI to discover information about the system, such as the volume name, size,
free space, and other disk information. This can be done using the 'wmic' command-line utility and has been
observed being used by threat actors such as Volt Typhoon.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|contains:
  - ' volumename'
  - ' logicaldisk'
- CommandLine|contains|all:
  - path
  - win32_logicaldisk
- CommandLine|contains|all:
  - ' volume'
  - ' list '
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047
- T1082

## False Positives
- Unknown

## References
- https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-144a
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wmic

## Metadata
- **Author:** Stephen Lincoln '@slincoln-aiq' (AttackIQ)
- **Date:** 2024-02-02
- **Rule ID:** `c79da740-5030-45ec-a2e0-479e824a562c`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_volume.yml`
