---
type: detection_rule
title: "Potential DLL Injection Or Execution Using Tracker.exe"
rule_id: 148431ce-4b70-403d-8525-fcc2993f29ea
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.001]
---

# Potential DLL Injection Or Execution Using Tracker.exe

## Description
Detects potential DLL injection and execution using "Tracker.exe"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_msbuild1:
  CommandLine|contains: ' /ERRORREPORT:PROMPT '
filter_msbuild2:
  ParentImage|endswith:
  - \Msbuild\Current\Bin\MSBuild.exe
  - \Msbuild\Current\Bin\amd64\MSBuild.exe
selection_cli:
  CommandLine|contains:
  - ' /d '
  - ' /c '
selection_img:
- Image|endswith: \tracker.exe
- Description: Tracker
```

## MITRE ATT&CK
- T1055.001

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Tracker/

## Metadata
- **Author:** Avneet Singh @v3t0_, oscd.community
- **Date:** 2020-10-18
- **Rule ID:** `148431ce-4b70-403d-8525-fcc2993f29ea`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_tracker.yml`
