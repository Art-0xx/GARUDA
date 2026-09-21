---
Acknowledgement:
- Handle: '@tifkin'
  Person: Lee Christensen
- Person: Ji
Author: Jimmy (@bohops)
Commands:
- Category: AWL Bypass
  Command: VisualUiaVerifyNative.exe
  Description: Generate Serialized gadget and save to - `C:\Users\%USERNAME%\AppData\Roaminguiverify.config`
    before executing.
  MitreID: T1218
  OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
  Privileges: User
  Tags:
  - Execute: .NetObjects
  Usecase: Execute proxied payload with Microsoft signed binary to bypass WDAC policies
Created: 2021-09-26
Description: A Windows SDK binary for manual and automated testing of Microsoft UI
  Automation implementation and controls.
Detection:
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- Sigma: https://github.com/SigmaHQ/sigma/blob/6b34764215b0e97e32cbc4c6325fc933d2695c3a/rules/windows/process_creation/proc_creation_win_lolbin_visualuiaverifynative.yml
- IOC: As a Windows SDK binary, execution on a system may be suspicious
Full_Path:
- Path: c:\Program Files (x86)\Windows Kits\10\bin\<version>\arm64\UIAVerify\VisualUiaVerifyNative.exe
- Path: c:\Program Files (x86)\Windows Kits\10\bin\<version>\x64\UIAVerify\VisualUiaVerifyNative.exe
- Path: c:\Program Files (x86)\Windows Kits\10\bin\<version>\UIAVerify\VisualUiaVerifyNative.exe
Name: VisualUiaVerifyNative.exe
Resources:
- Link: https://bohops.com/2020/10/15/exploring-the-wdac-microsoft-recommended-block-rules-visualuiaverifynative/
- Link: https://github.com/MicrosoftDocs/windows-itpro-docs/commit/937db704b9148e9cee7c7010cad4d00ce9c4fdad
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# VisualUiaVerifyNative.exe

A Windows SDK binary for manual and automated testing of Microsoft UI Automation implementation and controls.

# Path(s)

- `c:\Program Files (x86)\Windows Kits\10\bin\<version>\arm64\UIAVerify\VisualUiaVerifyNative.exe`
- `c:\Program Files (x86)\Windows Kits\10\bin\<version>\x64\UIAVerify\VisualUiaVerifyNative.exe`
- `c:\Program Files (x86)\Windows Kits\10\bin\<version>\UIAVerify\VisualUiaVerifyNative.exe`

# AWL Bypass Commands

Generate Serialized gadget and save to - `C:\Users\%USERNAME%\AppData\Roaminguiverify.config` before executing.

```batch
VisualUiaVerifyNative.exe
```

- **Usecase:** Execute proxied payload with Microsoft signed binary to bypass WDAC policies
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10 2004 (likely previous and newer versions as well)



# Resource(s)

- https://bohops.com/2020/10/15/exploring-the-wdac-microsoft-recommended-block-rules-visualuiaverifynative/
- https://github.com/MicrosoftDocs/windows-itpro-docs/commit/937db704b9148e9cee7c7010cad4d00ce9c4fdad
# Acknowledgements

- Jimmy (@bohops) (Authored, 2021-09-26)
- Lee Christensen (@tifkin)
- Ji