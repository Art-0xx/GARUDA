---
type: detection_rule
title: "Removal Of Index Value to Hide Schedule Task - Registry"
rule_id: 526cc8bc-1cdc-48ad-8b26-f19bff969cec
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Removal Of Index Value to Hide Schedule Task - Registry

## Description
Detects when the "index" value of a scheduled task is removed or deleted from the registry. Which effectively hides it from any tooling such as "schtasks /query"

## Log Source
```yaml
category: registry_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains|all:
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree\
  - Index
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://blog.qualys.com/vulnerabilities-threat-research/2022/06/20/defending-against-scheduled-task-attacks-in-windows-environments

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-26
- **Rule ID:** `526cc8bc-1cdc-48ad-8b26-f19bff969cec`
- **Source file:** `windows/registry/registry_delete/registry_delete_schtasks_hide_task_via_index_value_removal.yml`
