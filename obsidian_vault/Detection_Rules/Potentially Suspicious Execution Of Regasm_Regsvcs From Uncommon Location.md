---
type: detection_rule
title: "Potentially Suspicious Execution Of Regasm/Regsvcs From Uncommon Location"
rule_id: cc368ed0-2411-45dc-a222-510ace303cb2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.009]
---

# Potentially Suspicious Execution Of Regasm/Regsvcs From Uncommon Location

## Description
Detects potentially suspicious execution of the Regasm/Regsvcs utilities from a potentially suspicious location

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_dir:
  CommandLine|contains:
  - \AppData\Local\Temp\
  - \Microsoft\Windows\Start Menu\Programs\Startup\
  - \PerfLogs\
  - \Users\Public\
  - \Windows\Temp\
selection_img:
- Image|endswith:
  - \Regsvcs.exe
  - \Regasm.exe
- OriginalFileName:
  - RegSvcs.exe
  - RegAsm.exe
```

## MITRE ATT&CK
- T1218.009

## False Positives
- Unknown

## References
- https://www.fortiguard.com/threat-signal-report/4718?s=09
- https://lolbas-project.github.io/lolbas/Binaries/Regasm/
- https://lolbas-project.github.io/lolbas/Binaries/Regsvcs/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-25
- **Rule ID:** `cc368ed0-2411-45dc-a222-510ace303cb2`
- **Source file:** `windows/process_creation/proc_creation_win_regasm_regsvcs_uncommon_location_execution.yml`
