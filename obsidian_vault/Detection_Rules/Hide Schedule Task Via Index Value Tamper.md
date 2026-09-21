---
type: detection_rule
title: "Hide Schedule Task Via Index Value Tamper"
rule_id: 5b16df71-8615-4f7f-ac9b-6c43c0509e61
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Hide Schedule Task Via Index Value Tamper

## Description
Detects when the "index" value of a scheduled task is modified from the registry
Which effectively hides it from any tooling such as "schtasks /query" (Read the referenced link for more information about the effects of this technique)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000000)
  TargetObject|contains|all:
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree\
  - Index
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://blog.qualys.com/vulnerabilities-threat-research/2022/06/20/defending-against-scheduled-task-attacks-in-windows-environments

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-26
- **Rule ID:** `5b16df71-8615-4f7f-ac9b-6c43c0509e61`
- **Source file:** `windows/registry/registry_set/registry_set_hide_scheduled_task_via_index_tamper.yml`
