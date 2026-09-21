---
Acknowledgement:
- Person: Derek John
Author: Derek Johnson
Commands:
- Category: Reconnaissance
  Command: pktmon.exe start --etw
  Description: Will start a packet capture and store log file as PktMon.etl. Use pktmon.exe
    stop
  MitreID: T1040
  OperatingSystem: Windows 10 1809 and later, Windows 11
  Privileges: Administrator
  Usecase: use this a built in network sniffer on windows 10 to capture senstive traffic
- Category: Reconnaissance
  Command: pktmon.exe filter add -p 445
  Description: Select Desired ports for packet capture
  MitreID: T1040
  OperatingSystem: Windows 10 1809 and later, Windows 11
  Privileges: Administrator
  Usecase: Look for interesting traffic such as telent or FTP
Created: 2020-08-12
Description: Capture Network Packets on the windows 10 with October 2018 Update or
  later.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_pktmon.yml
- IOC: .etl files found on system
Full_Path:
- Path: c:\windows\system32\pktmon.exe
- Path: c:\windows\syswow64\pktmon.exe
Name: Pktmon.exe
Resources:
- Link: https://binar-x79.com/windows-10-secret-sniffer/
mitre_data:
  technique_ids:
  - T1040
tags:
- lolbas/osbinaries
---

# Pktmon.exe

Capture Network Packets on the windows 10 with October 2018 Update or later.

# Path(s)

- `c:\windows\system32\pktmon.exe`
- `c:\windows\syswow64\pktmon.exe`

# Reconnaissance Commands

Will start a packet capture and store log file as PktMon.etl. Use pktmon.exe stop

```batch
pktmon.exe start --etw
```

- **Usecase:** use this a built in network sniffer on windows 10 to capture senstive traffic
- **Privileges Required:** Administrator
- **MitreID:** `T1040`
- **Operating System(s):** Windows 10 1809 and later, Windows 11



Select Desired ports for packet capture

```batch
pktmon.exe filter add -p 445
```

- **Usecase:** Look for interesting traffic such as telent or FTP
- **Privileges Required:** Administrator
- **MitreID:** `T1040`
- **Operating System(s):** Windows 10 1809 and later, Windows 11



# Resource(s)

- https://binar-x79.com/windows-10-secret-sniffer/
# Acknowledgements

- Derek Johnson (Authored, 2020-08-12)
- Derek John