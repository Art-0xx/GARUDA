---
type: detection_rule
title: "Schedule Task Creation From Env Variable Or Potentially Suspicious Path Via Schtasks.EXE"
rule_id: 81325ce1-be01-4250-944f-b4789644556f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Schedule Task Creation From Env Variable Or Potentially Suspicious Path Via Schtasks.EXE

## Description
Detects Schtask creations that point to a suspicious folder or an environment variable often used by malware

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: ( all of selection_1_* or all of selection_2_* ) and not 1 of filter_optional_*
filter_optional_avira_install:
  CommandLine|contains|all:
  - '/Create /Xml '
  - \Temp\.CR.
  - \Avira_Security_Installation.xml
filter_optional_avira_other:
  CommandLine|contains:
  - .tmp\UpdateFallbackTask.xml
  - .tmp\WatchdogServiceControlManagerTimeout.xml
  - .tmp\SystrayAutostart.xml
  - .tmp\MaintenanceTask.xml
  CommandLine|contains|all:
  - /Create /F /TN
  - '/Xml '
  - \Temp\
  - Avira_
filter_optional_klite_codec:
  CommandLine|contains|all:
  - \Temp\
  - '/Create /TN "klcp_update" /XML '
  - \klcp_update_task.xml
filter_optional_other:
- ParentCommandLine|contains: unattended.ini
- CommandLine|contains: update_task.xml
filter_optional_team_viewer:
  CommandLine|contains: /Create /TN TVInstallRestore /TR
selection_1_all_folders:
  CommandLine|contains:
  - :\Perflogs
  - :\Users\All Users\
  - :\Users\Default\
  - :\Users\Public
  - :\Windows\Temp
  - \AppData\Local\
  - \AppData\Roaming\
  - '%AppData%'
  - '%Public%'
selection_1_create:
  CommandLine|contains|windash: ' /create '
  Image|endswith: \schtasks.exe
selection_2_parent:
  ParentCommandLine|endswith: \svchost.exe -k netsvcs -p -s Schedule
selection_2_some_folders:
  CommandLine|contains:
  - :\Perflogs
  - :\Windows\Temp
  - \Users\Public
  - '%Public%'
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Benign scheduled tasks creations or executions that happen often during software installations
- Software that uses the AppData folder and scheduled tasks to update the software in the AppData folders

## References
- https://www.welivesecurity.com/2022/01/18/donot-go-do-not-respawn/
- https://www.joesandbox.com/analysis/514608/0/html#324415FF7D8324231381BAD48A052F85DF04
- https://blog.talosintelligence.com/gophish-powerrat-dcrat/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-21
- **Rule ID:** `81325ce1-be01-4250-944f-b4789644556f`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_env_folder.yml`
