---
type: detection_rule
title: "MMC20 Lateral Movement"
rule_id: f1f3bf22-deb2-418d-8cce-e1a45e46a5bd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.003]
---

# MMC20 Lateral Movement

## Description
Detects MMC20.Application Lateral Movement; specifically looks for the spawning of the parent MMC.exe with a command line of "-Embedding" as a child of svchost.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: -Embedding
  Image|endswith: \mmc.exe
  ParentImage|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1021.003

## False Positives
- Unlikely

## References
- https://enigma0x3.net/2017/01/05/lateral-movement-using-the-mmc20-application-com-object/
- https://drive.google.com/file/d/1lKya3_mLnR3UQuCoiYruO3qgu052_iS_/view?usp=sharing

## Metadata
- **Author:** @2xxeformyshirt (Security Risk Advisors) - rule; Teymur Kheirkhabarov (idea)
- **Date:** 2020-03-04
- **Rule ID:** `f1f3bf22-deb2-418d-8cce-e1a45e46a5bd`
- **Source file:** `windows/process_creation/proc_creation_win_mmc_mmc20_lateral_movement.yml`
