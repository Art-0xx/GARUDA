---
Acknowledgement:
- Person: Swachchhanda Shrawan Pou
Author: Swachchhanda Shrawan Poudel
Commands:
- Category: Execute
  Command: sftp -o ProxyCommand="{CMD}" .
  Description: Spawns ssh.exe which in turn spawns the specified command line. See
    also this project's entry for ssh.exe.
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of specified command, can be used as a defensive evasion.
- Category: Execute
  Command: sftp -D "{CMD}"
  Description: Spawns ssh.exe which in turn spawns the specified command line. See
    also this project's entry for ssh.exe.
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of specified command, can be used as a defensive evasion.
Created: 2025-05-13
Description: sftp.exe is a Windows command-line utility that uses the Secure File
  Transfer Protocol (SFTP) to securely transfer files between a local machine and
  a remote server.
Detection:
- IOC: sftp.exe executions with ProxyCommand on the command line
- IOC: sftp.exe spawning ssh.exe with ProxyCommand on the command line
- Sigma: https://github.com/SigmaHQ/sigma/pull/5414/files
Full_Path:
- Path: C:\Windows\System32\OpenSSH\sftp.exe
Name: Sftp.exe
Resources:
- Link: https://news.sophos.com/en-us/2025/05/09/lumma-stealer-coming-and-going/
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/osbinaries
---

# Sftp.exe

sftp.exe is a Windows command-line utility that uses the Secure File Transfer Protocol (SFTP) to securely transfer files between a local machine and a remote server.

# Path(s)

- `C:\Windows\System32\OpenSSH\sftp.exe`

# Execute Commands

Spawns ssh.exe which in turn spawns the specified command line. See also this project's entry for ssh.exe.

```batch
sftp -o ProxyCommand="{CMD}" .
```

- **Usecase:** Proxy execution of specified command, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



Spawns ssh.exe which in turn spawns the specified command line. See also this project's entry for ssh.exe.

```batch
sftp -D "{CMD}"
```

- **Usecase:** Proxy execution of specified command, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://news.sophos.com/en-us/2025/05/09/lumma-stealer-coming-and-going/
# Acknowledgements

- Swachchhanda Shrawan Poudel (Authored, 2025-05-13)
- Swachchhanda Shrawan Pou