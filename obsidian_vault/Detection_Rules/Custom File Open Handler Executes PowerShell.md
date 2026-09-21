---
type: detection_rule
title: "Custom File Open Handler Executes PowerShell"
rule_id: 7530b96f-ad8e-431d-a04d-ac85cc461fdc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Custom File Open Handler Executes PowerShell

## Description
Detects the abuse of custom file open handler, executing powershell

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains|all:
  - powershell
  - -command
  TargetObject|contains: shell\open\command\
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- https://news.sophos.com/en-us/2022/02/01/solarmarker-campaign-used-novel-registry-changes-to-establish-persistence/?cmp=30728

## Metadata
- **Author:** CD_R0M_
- **Date:** 2022-06-11
- **Rule ID:** `7530b96f-ad8e-431d-a04d-ac85cc461fdc`
- **Source file:** `windows/registry/registry_set/registry_set_custom_file_open_handler_powershell_execution.yml`
