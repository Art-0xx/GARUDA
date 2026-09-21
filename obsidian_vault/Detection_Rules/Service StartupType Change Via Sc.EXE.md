---
type: detection_rule
title: "Service StartupType Change Via Sc.EXE"
rule_id: 85c312b7-f44d-4a51-a024-d671c40b49fc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Service StartupType Change Via Sc.EXE

## Description
Detect the use of "sc.exe" to change the startup type of a service to "disabled" or "demand"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - disabled
  - demand
  CommandLine|contains|all:
  - ' config '
  - start
selection_img:
- Image|endswith: \sc.exe
- OriginalFileName: sc.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- False positives may occur with troubleshooting scripts

## References
- https://www.virustotal.com/gui/file/38283b775552da8981452941ea74191aa0d203edd3f61fb2dee7b0aea3514955

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-01
- **Rule ID:** `85c312b7-f44d-4a51-a024-d671c40b49fc`
- **Source file:** `windows/process_creation/proc_creation_win_sc_disable_service.yml`
