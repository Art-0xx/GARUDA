---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: reg export HKLM\SOFTWARE\Microsoft\Evilreg {PATH_ABSOLUTE}:evilreg.reg
  Description: Export the target Registry key and save it to the specified .REG file
    within an Alternate data stream.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Hide/plant registry information in Alternate data stream for later use
- Category: Credentials
  Command: reg save HKLM\SECURITY {PATH_ABSOLUTE:.1.bak} && reg save HKLM\SYSTEM {PATH_ABSOLUTE:.2.bak}
    && reg save HKLM\SAM {PATH_ABSOLUTE:.3.bak}
  Description: Dump registry hives (SAM, SYSTEM, SECURITY) to retrieve password hashes
    and key material
  MitreID: T1003.002
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Administrator
  Usecase: Dump credentials from the Security Account Manager (SAM)
Created: 2018-05-25
Description: Used to manipulate the registry
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_regedit_import_keys_ads.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_regedit_import_keys.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_reg_dumping_sensitive_hives.yml
- Splunk: https://github.com/splunk/security_content/blob/bee2a4cefa533f286c546cbe6798a0b5dec3e5ef/detections/endpoint/attempted_credential_dump_from_registry_via_reg_exe.yml
- Elastic: https://github.com/elastic/detection-rules/blob/f6421d8c534f295518a2c945f530e8afc4c8ad1b/rules/windows/credential_access_dump_registry_hives.toml
- IOC: reg.exe writing to an ADS
Full_Path:
- Path: C:\Windows\System32\reg.exe
- Path: C:\Windows\SysWOW64\reg.exe
Name: Reg.exe
Resources:
- Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- Link: https://pure.security/dumping-windows-credentials/
mitre_data:
  technique_ids:
  - T1564.004
  - T1003.002
tags:
- lolbas/osbinaries
---

# Reg.exe

Used to manipulate the registry

# Path(s)

- `C:\Windows\System32\reg.exe`
- `C:\Windows\SysWOW64\reg.exe`

# Credentials Commands

Dump registry hives (SAM, SYSTEM, SECURITY) to retrieve password hashes and key material

```batch
reg save HKLM\SECURITY {PATH_ABSOLUTE:.1.bak} && reg save HKLM\SYSTEM {PATH_ABSOLUTE:.2.bak} && reg save HKLM\SAM {PATH_ABSOLUTE:.3.bak}
```

- **Usecase:** Dump credentials from the Security Account Manager (SAM)
- **Privileges Required:** Administrator
- **MitreID:** `T1003.002`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# ADS Commands

Export the target Registry key and save it to the specified .REG file within an Alternate data stream.

```batch
reg export HKLM\SOFTWARE\Microsoft\Evilreg {PATH_ABSOLUTE}:evilreg.reg
```

- **Usecase:** Hide/plant registry information in Alternate data stream for later use
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- https://pure.security/dumping-windows-credentials/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar