---
type: detection_rule
title: "Suspicious Command Patterns In Scheduled Task Creation"
rule_id: f2c64357-b1d2-41b7-849f-34d2682c0fad
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Command Patterns In Scheduled Task Creation

## Description
Detects scheduled task creation using "schtasks" that contain potentially suspicious or uncommon commands

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_schtasks and ( all of selection_pattern_* or selection_uncommon
  or all of selection_anomaly_* )
selection_anomaly_1:
  CommandLine|contains:
  - :\ProgramData\
  - :\Temp\
  - :\Tmp\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\
  - '%AppData%'
  - '%Temp%'
  - '%tmp%'
selection_anomaly_2:
  CommandLine|contains:
  - cscript
  - curl
  - wscript
selection_pattern_1:
  CommandLine|contains:
  - '/sc minute '
  - '/ru system '
selection_pattern_2:
  CommandLine|contains:
  - cmd /c
  - cmd /k
  - cmd /r
  - 'cmd.exe /c '
  - 'cmd.exe /k '
  - 'cmd.exe /r '
selection_schtasks:
  CommandLine|contains: '/Create '
  Image|endswith: \schtasks.exe
selection_uncommon:
  CommandLine|contains:
  - ' -decode '
  - ' -enc '
  - ' -w hidden '
  - ' bypass '
  - ' IEX'
  - .DownloadData
  - .DownloadFile
  - .DownloadString
  - '/c start /min '
  - FromBase64String
  - mshta http
  - mshta.exe http
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Software installers that run from temporary folders and also install scheduled tasks are expected to generate some false positives

## References
- https://app.any.run/tasks/512c1352-6380-4436-b27d-bb62f0c020d6/
- https://twitter.com/RedDrip7/status/1506480588827467785
- https://www.ncsc.gov.uk/static-assets/documents/malware-analysis-reports/devil-bait/NCSC-MAR-Devil-Bait.pdf

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-23
- **Rule ID:** `f2c64357-b1d2-41b7-849f-34d2682c0fad`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_susp_pattern.yml`
