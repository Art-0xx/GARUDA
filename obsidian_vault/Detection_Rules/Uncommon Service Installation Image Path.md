---
type: detection_rule
title: "Uncommon Service Installation Image Path"
rule_id: 26481afe-db26-4228-b264-25a29fe6efc7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Uncommon Service Installation Image Path

## Description
Detects uncommon service installation commands by looking at suspicious or uncommon image path values containing references to encoded powershell commands, temporary paths, etc.

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection and ( suspicious_paths or all of suspicious_encoded_* ) and not
  1 of filter_main_* and not 1 of filter_optional_*
filter_main_defender_def_updates:
  ImagePath|startswith: C:\ProgramData\Microsoft\Windows Defender\Definition Updates\
filter_optional_thor_remote:
  ImagePath|startswith: C:\WINDOWS\TEMP\thor10-remote\thor64.exe
selection:
  EventID: 7045
  Provider_Name: Service Control Manager
suspicious_encoded_flag:
  ImagePath|contains: ' -e'
suspicious_encoded_keywords:
  ImagePath|contains:
  - ' aQBlAHgA'
  - ' aWV4I'
  - ' IAB'
  - ' JAB'
  - ' PAA'
  - ' SQBFAFgA'
  - ' SUVYI'
suspicious_paths:
  ImagePath|contains:
  - \\\\.\\pipe
  - \Users\Public\
  - \Windows\Temp\
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-18
- **Rule ID:** `26481afe-db26-4228-b264-25a29fe6efc7`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_service_install_uncommon.yml`
