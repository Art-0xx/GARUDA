---
Acknowledgement:
- Person: Elliot Kill
Author: Elliot Killick
Commands:
- Category: Download
  Command: cmdl32 /vpn /lan %cd%\config
  Description: Download a file from the web address specified in the configuration
    file. The downloaded file will be in %TMP% under the name VPNXXXX.tmp where "X"
    denotes a random number or letter.
  MitreID: T1105
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download file from Internet
Created: 2021-08-26
Description: Microsoft Connection Manager Auto-Download
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_cmdl32.yml
- IOC: Reports of downloading from suspicious URLs in %TMP%\config.log
- IOC: Useragent Microsoft(R) Connection Manager Vpn File Update
Full_Path:
- Path: C:\Windows\System32\cmdl32.exe
- Path: C:\Windows\SysWOW64\cmdl32.exe
Name: cmdl32.exe
Resources:
- Link: https://github.com/LOLBAS-Project/LOLBAS/pull/151
- Link: https://twitter.com/ElliotKillick/status/1455897435063074824
- Link: https://elliotonsecurity.com/living-off-the-land-reverse-engineering-methodology-plus-tips-and-tricks-cmdl32-case-study/
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# cmdl32.exe

Microsoft Connection Manager Auto-Download

# Path(s)

- `C:\Windows\System32\cmdl32.exe`
- `C:\Windows\SysWOW64\cmdl32.exe`

# Download Commands

Download a file from the web address specified in the configuration file. The downloaded file will be in %TMP% under the name VPNXXXX.tmp where "X" denotes a random number or letter.

```batch
cmdl32 /vpn /lan %cd%\config
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://github.com/LOLBAS-Project/LOLBAS/pull/151
- https://twitter.com/ElliotKillick/status/1455897435063074824
- https://elliotonsecurity.com/living-off-the-land-reverse-engineering-methodology-plus-tips-and-tricks-cmdl32-case-study/
# Acknowledgements

- Elliot Killick (Authored, 2021-08-26)
- Elliot Kill