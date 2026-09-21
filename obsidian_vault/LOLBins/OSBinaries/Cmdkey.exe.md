---
Author: Oddvar Moe
Commands:
- Category: Credentials
  Command: cmdkey /list
  Description: List cached credentials
  MitreID: T1078
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Get credential information from host
Created: 2018-05-25
Description: creates, lists, and deletes stored user names and passwords or credentials.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_cmdkey_recon.yml
Full_Path:
- Path: C:\Windows\System32\cmdkey.exe
- Path: C:\Windows\SysWOW64\cmdkey.exe
Name: Cmdkey.exe
Resources:
- Link: https://web.archive.org/web/20230202122017/https://www.peew.pw/blog/2017/11/26/exploring-cmdkey-an-edge-case-for-privilege-escalation
- Link: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmd
mitre_data:
  technique_ids:
  - T1078
tags:
- lolbas/osbinaries
---

# Cmdkey.exe

creates, lists, and deletes stored user names and passwords or credentials.

# Path(s)

- `C:\Windows\System32\cmdkey.exe`
- `C:\Windows\SysWOW64\cmdkey.exe`

# Credentials Commands

List cached credentials

```batch
cmdkey /list
```

- **Usecase:** Get credential information from host
- **Privileges Required:** User
- **MitreID:** `T1078`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://web.archive.org/web/20230202122017/https://www.peew.pw/blog/2017/11/26/exploring-cmdkey-an-edge-case-for-privilege-escalation
- https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmd
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)