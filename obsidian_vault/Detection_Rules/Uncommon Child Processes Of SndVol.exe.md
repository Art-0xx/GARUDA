---
type: detection_rule
title: "Uncommon Child Processes Of SndVol.exe"
rule_id: ba42babc-0666-4393-a4f7-ceaf5a69191e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Uncommon Child Processes Of SndVol.exe

## Description
Detects potentially uncommon child processes of SndVol.exe (the Windows volume mixer)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_rundll32:
  CommandLine|contains: ' shell32.dll,Control_RunDLL '
  Image|endswith: \rundll32.exe
selection:
  ParentImage|endswith: \SndVol.exe
```

## False Positives
- Unknown

## References
- https://twitter.com/Max_Mal_/status/1661322732456353792

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-06-09
- **Rule ID:** `ba42babc-0666-4393-a4f7-ceaf5a69191e`
- **Source file:** `windows/process_creation/proc_creation_win_sndvol_susp_child_processes.yml`
