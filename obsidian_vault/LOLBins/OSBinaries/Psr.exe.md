---
Acknowledgement:
- Person: Leon Rode
Author: Leon Rodenko
Commands:
- Category: Reconnaissance
  Command: psr.exe /start /output {PATH_ABSOLUTE:.zip} /sc 1 /gui 0
  Description: Record a user screen without creating a GUI. You should use "psr.exe
    /stop" to stop recording and create output file.
  MitreID: T1113
  OperatingSystem: since Windows 7 (client) / Windows 2008 R2
  Privileges: User
  Usecase: Can be used to take screenshots of the user environment
Created: 2020-06-27
Description: Windows Problem Steps Recorder, used to record screen and clicks.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_psr_capture_screenshots.yml
- IOC: psr.exe spawned
- IOC: suspicious activity when running with "/gui 0" flag
Full_Path:
- Path: c:\windows\system32\psr.exe
- Path: c:\windows\syswow64\psr.exe
Name: Psr.exe
Resources:
- Link: https://social.technet.microsoft.com/wiki/contents/articles/51722.windows-problem-steps-recorder-psr-quick-and-easy-documenting-of-your-steps-and-procedures.aspx
mitre_data:
  technique_ids:
  - T1113
tags:
- lolbas/osbinaries
---

# Psr.exe

Windows Problem Steps Recorder, used to record screen and clicks.

# Path(s)

- `c:\windows\system32\psr.exe`
- `c:\windows\syswow64\psr.exe`

# Reconnaissance Commands

Record a user screen without creating a GUI. You should use "psr.exe /stop" to stop recording and create output file.

```batch
psr.exe /start /output {PATH_ABSOLUTE:.zip} /sc 1 /gui 0
```

- **Usecase:** Can be used to take screenshots of the user environment
- **Privileges Required:** User
- **MitreID:** `T1113`
- **Operating System(s):** since Windows 7 (client) / Windows 2008 R2



# Resource(s)

- https://social.technet.microsoft.com/wiki/contents/articles/51722.windows-problem-steps-recorder-psr-quick-and-easy-documenting-of-your-steps-and-procedures.aspx
# Acknowledgements

- Leon Rodenko (Authored, 2020-06-27)
- Leon Rode