---
type: detection_rule
title: "PowerShell Get Clipboard"
rule_id: 4cbd4f12-2e22-43e3-882f-bff3247ffb78
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1115]
---

# PowerShell Get Clipboard

## Description
A General detection for the Get-Clipboard commands in PowerShell logs. This could be an adversary capturing clipboard contents.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Payload|contains: Get-Clipboard
```

## MITRE ATT&CK
- T1115

## False Positives
- Unknown

## References
- https://github.com/OTRF/detection-hackathon-apt29/issues/16
- https://github.com/OTRF/ThreatHunter-Playbook/blob/2d4257f630f4c9770f78d0c1df059f891ffc3fec/docs/evals/apt29/detections/7.A.2_F4609F7E-C4DB-4327-91D4-59A58C962A02.md

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-05-02
- **Rule ID:** `4cbd4f12-2e22-43e3-882f-bff3247ffb78`
- **Source file:** `windows/powershell/powershell_module/posh_pm_get_clipboard.yml`
