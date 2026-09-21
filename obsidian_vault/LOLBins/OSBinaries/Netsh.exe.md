---
Author: Freddie Barr-Smith
Commands:
- Category: Execute
  Command: netsh.exe add helper {PATH_ABSOLUTE:.dll}
  Description: Use Netsh in order to execute a .dll file and also gain persistence,
    every time the netsh command is called
  MitreID: T1546.007
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Admin
  Tags:
  - Execute: DLL
  Usecase: Proxy execution of .dll
Created: 2019-12-24
Description: Netsh is a Windows tool used to manipulate network interface settings.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_netsh_helper_dll_persistence.yml
- Splunk: https://github.com/splunk/security_content/blob/2b87b26bdc2a84b65b1355ffbd5174bdbdb1879c/detections/endpoint/processes_launching_netsh.yml
- Splunk: https://github.com/splunk/security_content/blob/08ed88bd88259c03c771c30170d2934ed0a8f878/detections/deprecated/processes_created_by_netsh.yml
- IOC: Netsh initiating a network connection
Full_Path:
- Path: C:\WINDOWS\System32\Netsh.exe
- Path: C:\WINDOWS\SysWOW64\Netsh.exe
Name: Netsh.exe
Resources:
- Link: https://freddiebarrsmith.com/trix/trix.html
- Link: https://htmlpreview.github.io/?https://github.com/MatthewDemaske/blogbackup/blob/master/netshell.html
- Link: https://liberty-shell.com/sec/2018/07/28/netshl
mitre_data:
  technique_ids:
  - T1546.007
tags:
- lolbas/osbinaries
---

# Netsh.exe

Netsh is a Windows tool used to manipulate network interface settings.

# Path(s)

- `C:\WINDOWS\System32\Netsh.exe`
- `C:\WINDOWS\SysWOW64\Netsh.exe`

# Execute Commands

Use Netsh in order to execute a .dll file and also gain persistence, every time the netsh command is called

```batch
netsh.exe add helper {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Proxy execution of .dll
- **Privileges Required:** Admin
- **MitreID:** `T1546.007`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://freddiebarrsmith.com/trix/trix.html
- https://htmlpreview.github.io/?https://github.com/MatthewDemaske/blogbackup/blob/master/netshell.html
- https://liberty-shell.com/sec/2018/07/28/netshl
# Acknowledgements

- Freddie Barr-Smith (Authored, 2019-12-24)