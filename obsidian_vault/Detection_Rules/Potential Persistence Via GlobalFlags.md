---
type: detection_rule
title: "Potential Persistence Via GlobalFlags"
rule_id: 36803969-5421-41ec-b92f-8500f79c23b0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.012]
---

# Potential Persistence Via GlobalFlags

## Description
Detects registry persistence technique using the GlobalFlags and SilentProcessExit keys

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_global_flag:
  TargetObject|contains|all:
  - \Microsoft\Windows NT\CurrentVersion\
  - \Image File Execution Options\
  - \GlobalFlag
selection_silent_process:
  TargetObject|contains:
  - \ReportingMode
  - \MonitorProcess
  TargetObject|contains|all:
  - \Microsoft\Windows NT\CurrentVersion\
  - \SilentProcessExit\
```

## MITRE ATT&CK
- T1546.012

## False Positives
- Unknown

## References
- https://oddvar.moe/2018/04/10/persistence-using-globalflags-in-image-file-execution-options-hidden-from-autoruns-exe/
- https://www.deepinstinct.com/2021/02/16/lsass-memory-dumps-are-stealthier-than-ever-before-part-2/

## Metadata
- **Author:** Karneades, Jonhnathan Ribeiro, Florian Roth
- **Date:** 2018-04-11
- **Rule ID:** `36803969-5421-41ec-b92f-8500f79c23b0`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_globalflags.yml`
