---
type: detection_rule
title: "PowerShell SAM Copy"
rule_id: 1af57a4b-460a-4738-9034-db68b880c665
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002]
---

# PowerShell SAM Copy

## Description
Detects suspicious PowerShell scripts accessing SAM hives

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_1:
  CommandLine|contains|all:
  - \HarddiskVolumeShadowCopy
  - System32\config\sam
selection_2:
  CommandLine|contains:
  - Copy-Item
  - cp $_.
  - cpi $_.
  - copy $_.
  - .File]::Copy(
```

## MITRE ATT&CK
- T1003.002

## False Positives
- Some rare backup scenarios
- PowerShell scripts fixing HiveNightmare / SeriousSAM ACLs

## References
- https://twitter.com/splinter_code/status/1420546784250769408

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-07-29
- **Rule ID:** `1af57a4b-460a-4738-9034-db68b880c665`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_sam_access.yml`
