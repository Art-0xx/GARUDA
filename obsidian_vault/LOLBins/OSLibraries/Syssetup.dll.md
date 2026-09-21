---
Acknowledgement:
- Handle: '@pabraeken'
  Person: Pierre-Alexandre Braeken (Execute)
- Handle: '@harr0ey'
  Person: Matt harr0ey (Execute)
- Person: Jimmy (Scriptl
Author: LOLBAS Team
Code_Sample:
- Code: https://raw.githubusercontent.com/huntresslabs/evading-autoruns/master/shady.inf
- Code: https://gist.github.com/enigma0x3/469d82d1b7ecaf84f4fb9e6c392d25ba#file-backdoor-minimalist-sct
- Code: https://gist.github.com/homjxi0e/87b29da0d4f504cb675bb1140a931415
Commands:
- Category: AWL Bypass
  Command: rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 {PATH_ABSOLUTE:.inf}
  Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll
    in the .inf file by calling an information file directive (section name specified).
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: INF
  Usecase: Run local or remote script(let) code through INF file specification (Note
    May pop an error window).
- Category: Execute
  Command: rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 {PATH_ABSOLUTE:.inf}
  Description: Launch an executable file via the SetupInfObjectInstallAction function
    and .inf file section directive.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: INF
  Usecase: Load an executable payload.
Created: 2018-05-25
Description: Windows NT System Setup
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
- Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/detect_rundll32_application_control_bypass___syssetup.yml
Full_Path:
- Path: c:\windows\system32\syssetup.dll
- Path: c:\windows\syswow64\syssetup.dll
Name: Syssetup.dll
Resources:
- Link: https://twitter.com/pabraeken/status/994392481927258113
- Link: https://twitter.com/harr0ey/status/975350238184697857
- Link: https://twitter.com/bohops/status/975549525938135040
- Link: https://windows10dll.nirsoft.net/syssetup_dll.html
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Syssetup.dll

Windows NT System Setup

# Path(s)

- `c:\windows\system32\syssetup.dll`
- `c:\windows\syswow64\syssetup.dll`

# AWL Bypass Commands

Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).

```batch
rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 {PATH_ABSOLUTE:.inf}
```

- **Usecase:** Run local or remote script(let) code through INF file specification (Note May pop an error window).
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Execute Commands

Launch an executable file via the SetupInfObjectInstallAction function and .inf file section directive.

```batch
rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 {PATH_ABSOLUTE:.inf}
```

- **Usecase:** Load an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/pabraeken/status/994392481927258113
- https://twitter.com/harr0ey/status/975350238184697857
- https://twitter.com/bohops/status/975549525938135040
- https://windows10dll.nirsoft.net/syssetup_dll.html
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Pierre-Alexandre Braeken (Execute) (@pabraeken)
- Matt harr0ey (Execute) (@harr0ey)
- Jimmy (Scriptl