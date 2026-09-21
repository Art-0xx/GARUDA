---
Acknowledgement:
- Person: Eleftherios Pa
Author: Eleftherios Panos
Commands:
- Category: Execute
  Command: AgentExecutor.exe -powershell "{PATH_ABSOLUTE:.ps1}" "{PATH_ABSOLUTE:.1.log}"
    "{PATH_ABSOLUTE:.2.log}" "{PATH_ABSOLUTE:.3.log}" 60000 "C:\Windows\SysWOW64\WindowsPowerShell\v1.0"
    0 1
  Description: Spawns powershell.exe and executes a provided powershell script with
    ExecutionPolicy Bypass argument
  MitreID: T1218
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: PowerShell
  Usecase: Execute unsigned powershell scripts
- Category: Execute
  Command: AgentExecutor.exe -powershell "{PATH_ABSOLUTE:.ps1}" "{PATH_ABSOLUTE:.1.log}"
    "{PATH_ABSOLUTE:.2.log}" "{PATH_ABSOLUTE:.3.log}" 60000 "{PATH_ABSOLUTE:folder}"
    0 1
  Description: If we place a binary named powershell.exe in the specified folder path,
    agentexecutor.exe will execute it successfully
  MitreID: T1218
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute a provided EXE
Created: 2020-07-23
Description: Intune Management Extension included on Intune Managed Devices
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_agentexecutor.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_agentexecutor_susp_usage.yml
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Intune Management Extension\AgentExecutor.exe
Name: AgentExecutor.exe
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# AgentExecutor.exe

Intune Management Extension included on Intune Managed Devices

# Path(s)

- `C:\Program Files (x86)\Microsoft Intune Management Extension\AgentExecutor.exe`

# Execute Commands

Spawns powershell.exe and executes a provided powershell script with ExecutionPolicy Bypass argument

```batch
AgentExecutor.exe -powershell "{PATH_ABSOLUTE:.ps1}" "{PATH_ABSOLUTE:.1.log}" "{PATH_ABSOLUTE:.2.log}" "{PATH_ABSOLUTE:.3.log}" 60000 "C:\Windows\SysWOW64\WindowsPowerShell\v1.0" 0 1
```

- **Usecase:** Execute unsigned powershell scripts
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10



If we place a binary named powershell.exe in the specified folder path, agentexecutor.exe will execute it successfully

```batch
AgentExecutor.exe -powershell "{PATH_ABSOLUTE:.ps1}" "{PATH_ABSOLUTE:.1.log}" "{PATH_ABSOLUTE:.2.log}" "{PATH_ABSOLUTE:.3.log}" 60000 "{PATH_ABSOLUTE:folder}" 0 1
```

- **Usecase:** Execute a provided EXE
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10


# Acknowledgements

- Eleftherios Panos (Authored, 2020-07-23)
- Eleftherios Pa