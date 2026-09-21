---
type: detection_rule
title: "Indirect Command Execution By Program Compatibility Wizard"
rule_id: b97cd4b1-30b8-4a9d-bd72-6293928d52bc
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Indirect Command Execution By Program Compatibility Wizard

## Description
Detect indirect command execution via Program Compatibility Assistant pcwrun.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentImage|endswith: \pcwrun.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Need to use extra processing with 'unique_count' / 'filter' to focus on outliers as opposed to commonly seen artifacts
- Legit usage of scripts

## References
- https://twitter.com/pabraeken/status/991335019833708544
- https://lolbas-project.github.io/lolbas/Binaries/Pcwrun/

## Metadata
- **Author:** A. Sungurov , oscd.community
- **Date:** 2020-10-12
- **Rule ID:** `b97cd4b1-30b8-4a9d-bd72-6293928d52bc`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_pcwrun.yml`
