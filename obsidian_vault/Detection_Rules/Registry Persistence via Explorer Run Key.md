---
type: detection_rule
title: "Registry Persistence via Explorer Run Key"
rule_id: b7916c2a-fa2f-4795-9477-32b731f70f11
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Registry Persistence via Explorer Run Key

## Description
Detects a possible persistence mechanism using RUN key for Windows Explorer and pointing to a suspicious folder

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains:
  - :\$Recycle.bin\
  - :\ProgramData\
  - :\Temp\
  - :\Users\Default\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  TargetObject|endswith: \Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Unknown

## References
- https://researchcenter.paloaltonetworks.com/2018/07/unit42-upatre-continues-evolve-new-anti-analysis-techniques/

## Metadata
- **Author:** Florian Roth (Nextron Systems), oscd.community
- **Date:** 2018-07-18
- **Rule ID:** `b7916c2a-fa2f-4795-9477-32b731f70f11`
- **Source file:** `windows/registry/registry_set/registry_set_susp_reg_persist_explorer_run.yml`
