---
Acknowledgement:
- Person: Elliot Kill
Author: Elliot Killick
Commands:
- Category: Download
  Command: OneDriveStandaloneUpdater
  Description: Download a file from the web address specified in `HKCU\Software\Microsoft\OneDrive\UpdateOfficeConfig\UpdateRingSettingURLFromOC`.
    `ODSUUpdateXMLUrlFromOC` and `UpdateXMLUrlFromOC` must be equal to non-empty string
    values in that same registry key. `UpdateOfficeConfigTimestamp` is a UNIX epoch
    time which must be set to a large QWORD such as 99999999999 (in decimal) to indicate
    the URL cache is good. The downloaded file will be in `%localappdata%\OneDrive\StandaloneUpdater\PreSignInSettingsConfig.json`.
  MitreID: T1105
  OperatingSystem: Windows 10
  Privileges: User
  Usecase: Download a file from the Internet without executing any anomalous executables
    with suspicious arguments
Created: 2021-08-22
Description: OneDrive Standalone Updater
Detection:
- IOC: HKCU\Software\Microsoft\OneDrive\UpdateOfficeConfig\UpdateRingSettingURLFromOC
    being set to a suspicious non-Microsoft controlled URL
- IOC: Reports of downloading from suspicious URLs in %localappdata%\OneDrive\setup\logs\StandaloneUpdate_*.log
    files
- Sigma: https://github.com/SigmaHQ/sigma/blob/ff5102832031425f6eed011dd3a2e62653008c94/rules/windows/registry/registry_set/registry_set_lolbin_onedrivestandaloneupdater.yml
Full_Path:
- Path: C:\Users\<username>\AppData\Local\Microsoft\OneDrive\OneDriveStandaloneUpdater.exe
- Path: C:\Program Files\Microsoft OneDrive\OneDriveStandaloneUpdater.exe
- Path: C:\Program Files (x86)\Microsoft OneDrive\OneDriveStandaloneUpdater.exe
Name: OneDriveStandaloneUpdater.exe
Resources:
- Link: https://github.com/LOLBAS-Project/LOLBAS/pull/153
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# OneDriveStandaloneUpdater.exe

OneDrive Standalone Updater

# Path(s)

- `C:\Users\<username>\AppData\Local\Microsoft\OneDrive\OneDriveStandaloneUpdater.exe`
- `C:\Program Files\Microsoft OneDrive\OneDriveStandaloneUpdater.exe`
- `C:\Program Files (x86)\Microsoft OneDrive\OneDriveStandaloneUpdater.exe`

# Download Commands

Download a file from the web address specified in `HKCU\Software\Microsoft\OneDrive\UpdateOfficeConfig\UpdateRingSettingURLFromOC`. `ODSUUpdateXMLUrlFromOC` and `UpdateXMLUrlFromOC` must be equal to non-empty string values in that same registry key. `UpdateOfficeConfigTimestamp` is a UNIX epoch time which must be set to a large QWORD such as 99999999999 (in decimal) to indicate the URL cache is good. The downloaded file will be in `%localappdata%\OneDrive\StandaloneUpdater\PreSignInSettingsConfig.json`.

```batch
OneDriveStandaloneUpdater
```

- **Usecase:** Download a file from the Internet without executing any anomalous executables with suspicious arguments
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10



# Resource(s)

- https://github.com/LOLBAS-Project/LOLBAS/pull/153
# Acknowledgements

- Elliot Killick (Authored, 2021-08-22)
- Elliot Kill