---
type: detection_rule
title: "System Language Discovery via Reg.Exe"
rule_id: c43a5405-e8e1-4221-9ac9-dbe3fa14e886
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1614.001]
---

# System Language Discovery via Reg.Exe

## Description
Detects the usage of Reg.Exe to query system language settings.
Attackers may discover the system language to determine the geographic location of victims, customize payloads for specific regions,
or avoid targeting certain locales to evade detection.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - query
  - Control\Nls\Language
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1614.001

## False Positives
- Unknown

## References
- https://scythe.io/threat-thursday/threatthursday-darkside-ransomware

## Metadata
- **Author:** Marco Pedrinazzi (@pedrinazziM) (InTheCyber)
- **Date:** 2026-01-09
- **Rule ID:** `c43a5405-e8e1-4221-9ac9-dbe3fa14e886`
- **Source file:** `windows/process_creation/proc_creation_win_reg_system_language_discovery.yml`
