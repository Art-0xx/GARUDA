---
Acknowledgement:
- Person: hacker.house
- Person: Eki
Author: Ekitji
Commands:
- Category: UAC Bypass
  Command: c:\windows\syswow64\iscsicpl.exe
  Description: c:\windows\syswow64\iscsicpl.exe has a DLL injection through `C:\Users\<username>\AppData\Local\Microsoft\WindowsApps\ISCSIEXE.dll`,
    resulting in UAC bypass.
  MitreID: T1548.002
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute a custom DLL via a trusted high-integrity process without a UAC
    prompt.
- Category: UAC Bypass
  Command: iscsicpl.exe
  Description: Both `c:\windows\system32\iscsicpl.exe` and `c:\windows\system64\iscsicpl.exe`
    have UAC bypass through launching iscicpl.exe, then navigating into the Configuration
    tab, clicking Report, then launching your custom command.
  MitreID: T1548.002
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  - Application: GUI
  Usecase: Execute a binary or script as a high-integrity process without a UAC prompt.
Created: 2025-08-17
Description: Microsoft iSCSI Initiator Control Panel tool
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/image_load/image_load_uac_bypass_iscsicpl.yml
- IOC: C:\Users\<username>\AppData\Local\Microsoft\WindowsApps\ISCSIEXE.dll
- IOC: Suspicious child process to iscsicpl.exe like cmd, powershell etc.
Full_Path:
- Path: c:\windows\system32\iscsicpl.exe
- Path: c:\windows\syswow64\iscsicpl.exe
Name: iscsicpl.exe
Resources:
- Link: https://learn.microsoft.com/en-us/windows-server/storage/iscsi/iscsi-initiator-portal
- Link: https://github.com/hackerhouse-opensource/iscsicpl_bypassUAC
mitre_data:
  technique_ids:
  - T1548.002
tags:
- lolbas/osbinaries
---

# iscsicpl.exe

Microsoft iSCSI Initiator Control Panel tool

# Path(s)

- `c:\windows\system32\iscsicpl.exe`
- `c:\windows\syswow64\iscsicpl.exe`

# UAC Bypass Commands

c:\windows\syswow64\iscsicpl.exe has a DLL injection through `C:\Users\<username>\AppData\Local\Microsoft\WindowsApps\ISCSIEXE.dll`, resulting in UAC bypass.

```batch
c:\windows\syswow64\iscsicpl.exe
```

- **Usecase:** Execute a custom DLL via a trusted high-integrity process without a UAC prompt.
- **Privileges Required:** User
- **MitreID:** `T1548.002`
- **Operating System(s):** Windows 10, Windows 11



Both `c:\windows\system32\iscsicpl.exe` and `c:\windows\system64\iscsicpl.exe` have UAC bypass through launching iscicpl.exe, then navigating into the Configuration tab, clicking Report, then launching your custom command.

```batch
iscsicpl.exe
```

- **Usecase:** Execute a binary or script as a high-integrity process without a UAC prompt.
- **Privileges Required:** User
- **MitreID:** `T1548.002`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://learn.microsoft.com/en-us/windows-server/storage/iscsi/iscsi-initiator-portal
- https://github.com/hackerhouse-opensource/iscsicpl_bypassUAC
# Acknowledgements

- Ekitji (Authored, 2025-08-17)
- hacker.house
- Eki