---
type: detection_rule
title: "PowerShell Decompress Commands"
rule_id: 1ddc1472-8e52-4f7d-9f11-eab14fc171f5
platform: windows
level: informational
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1140]
---

# PowerShell Decompress Commands

## Description
A General detection for specific decompress commands in PowerShell logs. This could be an adversary decompressing files.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_4103
selection_4103:
  Payload|contains: Expand-Archive
```

## MITRE ATT&CK
- T1140

## False Positives
- Unknown

## References
- https://github.com/OTRF/detection-hackathon-apt29/issues/8
- https://github.com/OTRF/ThreatHunter-Playbook/blob/2d4257f630f4c9770f78d0c1df059f891ffc3fec/docs/evals/apt29/detections/4.A.3_09F29912-8E93-461E-9E89-3F06F6763383.md

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-05-02
- **Rule ID:** `1ddc1472-8e52-4f7d-9f11-eab14fc171f5`
- **Source file:** `windows/powershell/powershell_module/posh_pm_decompress_commands.yml`
