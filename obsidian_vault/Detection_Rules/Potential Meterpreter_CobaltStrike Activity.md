---
type: detection_rule
title: "Potential Meterpreter/CobaltStrike Activity"
rule_id: 15619216-e993-4721-b590-4c520615a67d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.001, attack.t1134.002]
---

# Potential Meterpreter/CobaltStrike Activity

## Description
Detects the use of getsystem Meterpreter/Cobalt Strike command by detecting a specific service starting

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_technique_* and not 1 of filter_*
filter_defender:
  CommandLine|contains: MpCmdRun
selection_img:
  ParentImage|endswith: \services.exe
selection_technique_1:
  CommandLine|contains:
  - cmd
  - '%COMSPEC%'
  CommandLine|contains|all:
  - /c
  - echo
  - \pipe\
selection_technique_2:
  CommandLine|contains|all:
  - rundll32
  - .dll,a
  - '/p:'
```

## MITRE ATT&CK
- T1134.001
- T1134.002

## False Positives
- Commandlines containing components like cmd accidentally
- Jobs and services started with cmd

## References
- https://speakerdeck.com/heirhabarov/hunting-for-privilege-escalation-in-windows-environment
- https://blog.cobaltstrike.com/2014/04/02/what-happens-when-i-type-getsystem/

## Metadata
- **Author:** Teymur Kheirkhabarov, Ecco, Florian Roth
- **Date:** 2019-10-26
- **Rule ID:** `15619216-e993-4721-b590-4c520615a67d`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_meterpreter_getsystem.yml`
