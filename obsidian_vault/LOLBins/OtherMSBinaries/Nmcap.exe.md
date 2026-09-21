---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Reconnaissance
  Command: nmcap.exe /network * /capture /file {PATH_ABSOLUTE:.cap}
  Description: 'Start capture on all network adapters and save to specified .cap (circular)
    file.

    Optionally, one can add:

    - `/TerminateWhen /TimeAfter 30 seconds` to auto-terminate after a relative times
    (e.g. 30 seconds);

    - `/TerminateWhen /Time 04:52:00 AM 9/17/2025` to auto-terminate after a specific
    date/time;

    - `/TerminateWhen /KeyPress x` to terminate when a specific key is pressed.

    '
  MitreID: T1040
  OperatingSystem: Windows
  Privileges: Administrator
  Usecase: Capture network traffic on windows to collect sensitive data.
Created: 2025-09-16
Description: Command-line packet capture utility from Microsoft Network Monitor 3.x.
Full_Path:
- Path: C:\Program Files\Microsoft Network Monitor 3\nmcap.exe
- Path: C:\Program Files (x86)\Microsoft Network Monitor 3\nmcap.exe
Name: Nmcap.exe
Resources:
- Link: https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/network-monitor-3
mitre_data:
  technique_ids:
  - T1040
tags:
- lolbas/othermsbinaries
---

# Nmcap.exe

Command-line packet capture utility from Microsoft Network Monitor 3.x.

# Path(s)

- `C:\Program Files\Microsoft Network Monitor 3\nmcap.exe`
- `C:\Program Files (x86)\Microsoft Network Monitor 3\nmcap.exe`

# Reconnaissance Commands

Start capture on all network adapters and save to specified .cap (circular) file.
Optionally, one can add:
- `/TerminateWhen /TimeAfter 30 seconds` to auto-terminate after a relative times (e.g. 30 seconds);
- `/TerminateWhen /Time 04:52:00 AM 9/17/2025` to auto-terminate after a specific date/time;
- `/TerminateWhen /KeyPress x` to terminate when a specific key is pressed.


```batch
nmcap.exe /network * /capture /file {PATH_ABSOLUTE:.cap}
```

- **Usecase:** Capture network traffic on windows to collect sensitive data.
- **Privileges Required:** Administrator
- **MitreID:** `T1040`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/network-monitor-3
# Acknowledgements

- Avihay Eldad (Authored, 2025-09-16)
- Avihay El