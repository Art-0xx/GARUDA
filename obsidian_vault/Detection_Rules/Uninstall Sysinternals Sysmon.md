---
type: detection_rule
title: "Uninstall Sysinternals Sysmon"
rule_id: 6a5f68d1-c4b5-46b9-94ee-5324892ea939
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Uninstall Sysinternals Sysmon

## Description
Detects the removal of Sysmon, which could be a potential attempt at defense evasion

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: -u
selection_pe:
- Image|endswith:
  - \Sysmon64.exe
  - \Sysmon64a.exe
  - \Sysmon.exe
- Description: System activity monitor
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate administrators might use this command to remove Sysmon for debugging purposes

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md#atomic-test-11---uninstall-sysmon

## Metadata
- **Author:** frack113
- **Date:** 2022-01-12
- **Rule ID:** `6a5f68d1-c4b5-46b9-94ee-5324892ea939`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_sysmon_uninstall.yml`
