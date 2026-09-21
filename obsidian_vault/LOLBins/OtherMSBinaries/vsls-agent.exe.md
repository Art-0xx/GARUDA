---
Acknowledgement:
- Person: Ji
Author: Jimmy (@bohops)
Commands:
- Category: Execute
  Command: vsls-agent.exe --agentExtensionPath {PATH_ABSOLUTE:.dll}
  Description: Load a library payload using the --agentExtensionPath parameter (32-bit)
  MitreID: T1218
  OperatingSystem: Windows 10 21H2 (likely previous and newer versions with modern
    versions of Visual Studio installed)
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute proxied payload with Microsoft signed binary
Created: 2022-11-01
Description: Agent for Visual Studio Live Share (Code Collaboration)
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_vslsagent_agentextensionpath_load.yml
Full_Path:
- Path: c:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\Extensions\Microsoft\LiveShare\Agent\vsls-agent.exe
Name: vsls-agent.exe
Resources:
- Link: https://twitter.com/bohops/status/1583916360404729857
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# vsls-agent.exe

Agent for Visual Studio Live Share (Code Collaboration)

# Path(s)

- `c:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\Extensions\Microsoft\LiveShare\Agent\vsls-agent.exe`

# Execute Commands

Load a library payload using the --agentExtensionPath parameter (32-bit)

```batch
vsls-agent.exe --agentExtensionPath {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Execute proxied payload with Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10 21H2 (likely previous and newer versions with modern versions of Visual Studio installed)



# Resource(s)

- https://twitter.com/bohops/status/1583916360404729857
# Acknowledgements

- Jimmy (@bohops) (Authored, 2022-11-01)
- Ji