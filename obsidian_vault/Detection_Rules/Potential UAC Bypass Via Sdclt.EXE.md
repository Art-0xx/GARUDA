---
type: detection_rule
title: "Potential UAC Bypass Via Sdclt.EXE"
rule_id: 40f9af16-589d-4984-b78d-8c2aec023197
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Potential UAC Bypass Via Sdclt.EXE

## Description
A General detection for sdclt being spawned as an elevated process. This could be an indicator of sdclt being used for bypass UAC techniques.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: sdclt.exe
  IntegrityLevel:
  - High
  - S-1-16-12288
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/OTRF/detection-hackathon-apt29/issues/6
- https://github.com/OTRF/ThreatHunter-Playbook/blob/2d4257f630f4c9770f78d0c1df059f891ffc3fec/docs/evals/apt29/detections/3.B.2_C36B49B5-DF58-4A34-9FE9-56189B9DEFEA.md

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-05-02
- **Rule ID:** `40f9af16-589d-4984-b78d-8c2aec023197`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_sdclt.yml`
