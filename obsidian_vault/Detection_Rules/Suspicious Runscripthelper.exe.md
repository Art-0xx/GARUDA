---
type: detection_rule
title: "Suspicious Runscripthelper.exe"
rule_id: eca49c87-8a75-4f13-9c73-a5a29e845f03
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1202]
---

# Suspicious Runscripthelper.exe

## Description
Detects execution of powershell scripts via Runscripthelper.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: surfacecheck
  Image|endswith: \Runscripthelper.exe
```

## MITRE ATT&CK
- T1059
- T1202

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Runscripthelper/

## Metadata
- **Author:** Victor Sergeev, oscd.community
- **Date:** 2020-10-09
- **Rule ID:** `eca49c87-8a75-4f13-9c73-a5a29e845f03`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_runscripthelper.yml`
