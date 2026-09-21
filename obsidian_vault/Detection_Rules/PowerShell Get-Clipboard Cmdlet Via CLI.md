---
type: detection_rule
title: "PowerShell Get-Clipboard Cmdlet Via CLI"
rule_id: b9aeac14-2ffd-4ad3-b967-1354a4e628c3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1115]
---

# PowerShell Get-Clipboard Cmdlet Via CLI

## Description
Detects usage of the 'Get-Clipboard' cmdlet via CLI

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: Get-Clipboard
```

## MITRE ATT&CK
- T1115

## False Positives
- Unknown

## References
- https://github.com/OTRF/detection-hackathon-apt29/issues/16
- https://github.com/OTRF/ThreatHunter-Playbook/blob/2d4257f630f4c9770f78d0c1df059f891ffc3fec/docs/evals/apt29/detections/3.B.2_C36B49B5-DF58-4A34-9FE9-56189B9DEFEA.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-05-02
- **Rule ID:** `b9aeac14-2ffd-4ad3-b967-1354a4e628c3`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_get_clipboard.yml`
