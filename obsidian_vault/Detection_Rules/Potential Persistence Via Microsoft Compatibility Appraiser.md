---
type: detection_rule
title: "Potential Persistence Via Microsoft Compatibility Appraiser"
rule_id: f548a603-c9f2-4c89-b511-b089f7e94549
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Potential Persistence Via Microsoft Compatibility Appraiser

## Description
Detects manual execution of the "Microsoft Compatibility Appraiser" task via schtasks.
In order to trigger persistence stored in the "\AppCompatFlags\TelemetryController" registry key.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - 'run '
  - \Application Experience\Microsoft Compatibility Appraiser
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://www.trustedsec.com/blog/abusing-windows-telemetry-for-persistence/

## Metadata
- **Author:** Sreeman
- **Date:** 2020-09-29
- **Rule ID:** `f548a603-c9f2-4c89-b511-b089f7e94549`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_persistence_windows_telemetry.yml`
