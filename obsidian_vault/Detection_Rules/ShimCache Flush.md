---
type: detection_rule
title: "ShimCache Flush"
rule_id: b0524451-19af-4efa-a46f-562a977f792e
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# ShimCache Flush

## Description
Detects actions that clear the local ShimCache and remove forensic evidence

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: ( selection1a and selection1b ) or ( selection2a and selection2b )
selection1a:
  CommandLine|contains|all:
  - rundll32
  - apphelp.dll
selection1b:
  CommandLine|contains:
  - ShimFlushCache
  - '#250'
selection2a:
  CommandLine|contains|all:
  - rundll32
  - kernel32.dll
selection2b:
  CommandLine|contains:
  - BaseFlushAppcompatCache
  - '#46'
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://medium.com/@blueteamops/shimcache-flush-89daff28d15e

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-02-01
- **Rule ID:** `b0524451-19af-4efa-a46f-562a977f792e`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_susp_shimcache_flush.yml`
