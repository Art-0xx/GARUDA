---
type: detection_rule
title: "Renamed ProcDump Execution"
rule_id: 4a0b2c7e-7cb2-495d-8b63-5f268e7bfd67
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# Renamed ProcDump Execution

## Description
Detects the execution of a renamed ProcDump executable.
This often done by attackers or malware in order to evade defensive mechanisms.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (selection_ofn or all of selection_cli_*) and not 1 of filter_main_*
filter_main_known_names:
  Image|endswith:
  - \procdump.exe
  - \procdump64.exe
  - \procdump64a.exe
selection_cli_dump_flag:
  CommandLine|contains|windash:
  - ' -ma '
  - ' -mp '
selection_cli_eula_flag:
  CommandLine|contains|windash: ' /accepteula'
selection_ofn:
  OriginalFileName: procdump
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Procdump illegally bundled with legitimate software.
- Administrators who rename binaries (should be investigated).

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/procdump

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-11-18
- **Rule ID:** `4a0b2c7e-7cb2-495d-8b63-5f268e7bfd67`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_sysinternals_procdump.yml`
