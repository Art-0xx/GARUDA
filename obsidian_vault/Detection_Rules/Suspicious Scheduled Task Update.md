---
type: detection_rule
title: "Suspicious Scheduled Task Update"
rule_id: 614cf376-6651-47c4-9dcc-6b9527f749f4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Scheduled Task Update

## Description
Detects update to a scheduled task event that contain suspicious keywords.

## Log Source
```yaml
definition: The Advanced Audit Policy setting Object Access > Audit Other Object Access
  Events has to be configured to allow this detection. We also recommend extracting
  the Command field from the embedded XML in the event data.
product: windows
service: security
```

## Detection Logic
```yaml
condition: all of selection_*
selection_commands:
  TaskContentNew|contains:
  - regsvr32
  - rundll32
  - cmd.exe</Command>
  - cmd</Command>
  - '<Arguments>/c '
  - '<Arguments>/k '
  - '<Arguments>/r '
  - powershell
  - pwsh
  - mshta
  - wscript
  - cscript
  - certutil
  - bitsadmin
  - bash.exe
  - 'bash '
  - scrcons
  - 'wmic '
  - wmic.exe
  - forfiles
  - scriptrunner
  - hh.exe
selection_eid:
  EventID: 4702
selection_paths:
  TaskContentNew|contains:
  - \AppData\Local\Temp\
  - \AppData\Roaming\
  - \Users\Public\
  - \WINDOWS\Temp\
  - C:\Temp\
  - \Desktop\
  - \Downloads\
  - \Temporary Internet
  - C:\ProgramData\
  - C:\Perflogs\
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4698

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-05
- **Rule ID:** `614cf376-6651-47c4-9dcc-6b9527f749f4`
- **Source file:** `windows/builtin/security/win_security_susp_scheduled_task_update.yml`
