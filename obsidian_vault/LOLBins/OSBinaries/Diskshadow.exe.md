---
Acknowledgement:
- Person: Ji
Author: Oddvar Moe
Commands:
- Category: Dump
  Command: diskshadow.exe /s {PATH:.txt}
  Description: Execute commands using diskshadow.exe from a prepared diskshadow script.
  MitreID: T1003.003
  OperatingSystem: Windows server
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Use diskshadow to exfiltrate data from VSS such as NTDS.dit
- Category: Execute
  Command: diskshadow> exec {PATH:.exe}
  Description: Execute commands using diskshadow.exe to spawn child process
  MitreID: T1202
  OperatingSystem: Windows server
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Use diskshadow to bypass defensive counter measures
Created: 2018-05-25
Description: Diskshadow.exe is a tool that exposes the functionality offered by the
  volume shadow copy Service (VSS).
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_diskshadow.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_susp_shadow_copies_deletion.yml
- Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
- IOC: Child process from diskshadow.exe
Full_Path:
- Path: C:\Windows\System32\diskshadow.exe
- Path: C:\Windows\SysWOW64\diskshadow.exe
Name: Diskshadow.exe
Resources:
- Link: https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
mitre_data:
  technique_ids:
  - T1003.003
  - T1202
tags:
- lolbas/osbinaries
---

# Diskshadow.exe

Diskshadow.exe is a tool that exposes the functionality offered by the volume shadow copy Service (VSS).

# Path(s)

- `C:\Windows\System32\diskshadow.exe`
- `C:\Windows\SysWOW64\diskshadow.exe`

# Execute Commands

Execute commands using diskshadow.exe to spawn child process

```batch
diskshadow> exec {PATH:.exe}
```

- **Usecase:** Use diskshadow to bypass defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows server



# Dump Commands

Execute commands using diskshadow.exe from a prepared diskshadow script.

```batch
diskshadow.exe /s {PATH:.txt}
```

- **Usecase:** Use diskshadow to exfiltrate data from VSS such as NTDS.dit
- **Privileges Required:** User
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows server



# Resource(s)

- https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Ji