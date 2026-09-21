---
type: detection_rule
title: "Non-privileged Usage of Reg or Powershell"
rule_id: 8f02c935-effe-45b3-8fc9-ef8696a9e41d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Non-privileged Usage of Reg or Powershell

## Description
Search for usage of reg or Powershell by non-privileged users to modify service configuration in registry

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|contains|all:
  - 'reg '
  - add
- CommandLine|contains:
  - powershell
  - set-itemproperty
  - ' sp '
  - new-itemproperty
selection_data:
  CommandLine|contains:
  - ImagePath
  - FailureCommand
  - ServiceDLL
  CommandLine|contains|all:
  - ControlSet
  - Services
  IntegrityLevel:
  - Medium
  - S-1-16-8192
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://image.slidesharecdn.com/kheirkhabarovoffzonefinal-181117201458/95/hunting-for-privilege-escalation-in-windows-environment-20-638.jpg

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Ryan Plas (rule), oscd.community
- **Date:** 2020-10-05
- **Rule ID:** `8f02c935-effe-45b3-8fc9-ef8696a9e41d`
- **Source file:** `windows/process_creation/proc_creation_win_susp_non_priv_reg_or_ps.yml`
