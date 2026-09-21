---
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: schtasks /create /sc minute /mo 1 /tn "Reverse shell" /tr "{CMD}"
  Description: Create a recurring task to execute every minute.
  MitreID: T1053.005
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Create a recurring task to keep reverse shell session(s) alive
- Category: Execute
  Command: schtasks /create /s targetmachine /tn "MyTask" /tr "{CMD}" /sc daily
  Description: Create a scheduled task on a remote computer for persistence/lateral
    movement
  MitreID: T1053.005
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  Privileges: Administrator
  Tags:
  - Execute: CMD
  Usecase: Create a remote task to run daily relative to the the time of creation
Created: 2018-05-25
Description: Schedule periodic tasks
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_schtasks_creation.yml
- Elastic: https://github.com/elastic/detection-rules/blob/ef7548f04c4341e0d1a172810330d59453f46a21/rules/windows/persistence_local_scheduled_task_creation.toml
- Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/schtasks_scheduling_job_on_remote_system.yml
- IOC: Suspicious task creation events
Full_Path:
- Path: c:\windows\system32\schtasks.exe
- Path: c:\windows\syswow64\schtasks.exe
Name: Schtasks.exe
Resources:
- Link: https://isc.sans.edu/forums/diary/Adding+Persistence+Via+Scheduled+Tasks/236
mitre_data:
  technique_ids:
  - T1053.005
tags:
- lolbas/osbinaries
---

# Schtasks.exe

Schedule periodic tasks

# Path(s)

- `c:\windows\system32\schtasks.exe`
- `c:\windows\syswow64\schtasks.exe`

# Execute Commands

Create a recurring task to execute every minute.

```batch
schtasks /create /sc minute /mo 1 /tn "Reverse shell" /tr "{CMD}"
```

- **Usecase:** Create a recurring task to keep reverse shell session(s) alive
- **Privileges Required:** User
- **MitreID:** `T1053.005`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Create a scheduled task on a remote computer for persistence/lateral movement

```batch
schtasks /create /s targetmachine /tn "MyTask" /tr "{CMD}" /sc daily
```

- **Usecase:** Create a remote task to run daily relative to the the time of creation
- **Privileges Required:** Administrator
- **MitreID:** `T1053.005`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://isc.sans.edu/forums/diary/Adding+Persistence+Via+Scheduled+Tasks/236
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)