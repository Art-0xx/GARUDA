---
type: detection_rule
title: "Uncommon System Information Discovery Via Wmic.EXE"
rule_id: 9d5a1274-922a-49d0-87f3-8c653483b909
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082]
---

# Uncommon System Information Discovery Via Wmic.EXE

## Description
Detects the use of the WMI command-line (WMIC) utility to identify and display various system information,
including OS, CPU, GPU, and disk drive names; memory capacity; display resolution; and baseboard, BIOS,
and GPU driver products/versions.
Some of these commands were used by Aurora Stealer in late 2022/early 2023.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_commands:
  CommandLine|contains:
  - LOGICALDISK get Name,Size,FreeSpace
  - os get Caption,OSArchitecture,Version
selection_wmic:
- Description: WMI Commandline Utility
- OriginalFileName: wmic.exe
- Image|endswith: \WMIC.exe
```

## MITRE ATT&CK
- T1082

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/a2ccd19c37d0278b4ffa8583add3cf52060a5418/atomics/T1082/T1082.md#atomic-test-25---system-information-discovery-with-wmic
- https://nwgat.ninja/getting-system-information-with-wmic-on-windows/
- https://blog.sekoia.io/aurora-a-rising-stealer-flying-under-the-radar
- https://blog.cyble.com/2023/01/18/aurora-a-stealer-using-shapeshifting-tactics/
- https://app.any.run/tasks/a6aa0057-82ec-451f-8f99-55650ca537da/

## Metadata
- **Author:** TropChaud
- **Date:** 2023-01-26
- **Rule ID:** `9d5a1274-922a-49d0-87f3-8c653483b909`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_system_info_uncommon.yml`
