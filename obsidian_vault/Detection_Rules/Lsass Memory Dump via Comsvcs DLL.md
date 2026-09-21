---
type: detection_rule
title: "Lsass Memory Dump via Comsvcs DLL"
rule_id: a49fa4d5-11db-418c-8473-1e014a8dd462
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Lsass Memory Dump via Comsvcs DLL

## Description
Detects adversaries leveraging the MiniDump export function from comsvcs.dll via rundll32 to perform a memory dump from lsass.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains: comsvcs.dll
  SourceImage|endswith: \rundll32.exe
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/shantanukhande/status/1229348874298388484
- https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-10-20
- **Rule ID:** `a49fa4d5-11db-418c-8473-1e014a8dd462`
- **Source file:** `windows/process_access/proc_access_win_lsass_dump_comsvcs_dll.yml`
