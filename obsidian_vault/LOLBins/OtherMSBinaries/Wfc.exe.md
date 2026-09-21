---
Acknowledgement:
- Handle: '@mattifestation'
  Person: Matt Graeber
- Person: Ji
Author: Jimmy (@bohops)
Code_Sample:
- Code: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
Commands:
- Category: AWL Bypass
  Command: wfc.exe {PATH_ABSOLUTE:.xoml}
  Description: Execute arbitrary C# code embedded in a XOML file.
  MitreID: T1127
  OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
  Privileges: User
  Tags:
  - Execute: XOML
  Usecase: Execute proxied payload with Microsoft signed binary to bypass WDAC policies
Created: 2021-09-26
Description: The Workflow Command-line Compiler tool is included with the Windows
  Software Development Kit (SDK).
Detection:
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- Sigma: https://github.com/SigmaHQ/sigma/blob/6b34764215b0e97e32cbc4c6325fc933d2695c3a/rules/windows/process_creation/proc_creation_win_lolbin_wfc.yml
- IOC: As a Windows SDK binary, execution on a system may be suspicious
Full_Path:
- Path: C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\wfc.exe
Name: Wfc.exe
Resources:
- Link: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Wfc.exe

The Workflow Command-line Compiler tool is included with the Windows Software Development Kit (SDK).

# Path(s)

- `C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\wfc.exe`

# AWL Bypass Commands

Execute arbitrary C# code embedded in a XOML file.

```batch
wfc.exe {PATH_ABSOLUTE:.xoml}
```

- **Usecase:** Execute proxied payload with Microsoft signed binary to bypass WDAC policies
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10 2004 (likely previous and newer versions as well)



# Resource(s)

- https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
# Acknowledgements

- Jimmy (@bohops) (Authored, 2021-09-26)
- Matt Graeber (@mattifestation)
- Ji