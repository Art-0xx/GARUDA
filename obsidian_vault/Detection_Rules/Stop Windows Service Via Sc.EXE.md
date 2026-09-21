---
type: detection_rule
title: "Stop Windows Service Via Sc.EXE"
rule_id: 81bcb81b-5b1f-474b-b373-52c871aaa7b1
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1489]
---

# Stop Windows Service Via Sc.EXE

## Description
Detects the stopping of a Windows service via the "sc.exe" utility

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ' stop '
selection_img:
- OriginalFileName: sc.exe
- Image|endswith: \sc.exe
```

## MITRE ATT&CK
- T1489

## False Positives
- There are many legitimate reasons to stop a service. This rule isn't looking for any suspicious behavior in particular. Filter legitimate activity accordingly

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc742107(v=ws.11)

## Metadata
- **Author:** Jakob Weinzettl, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-05
- **Rule ID:** `81bcb81b-5b1f-474b-b373-52c871aaa7b1`
- **Source file:** `windows/process_creation/proc_creation_win_sc_stop_service.yml`
