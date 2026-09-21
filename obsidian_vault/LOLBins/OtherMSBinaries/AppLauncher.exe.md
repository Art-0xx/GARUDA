---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: AppLauncher.exe {PATH_ABSOLUTE:.exe}
  Description: Launches an executable via User Experience Virtualization tool.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes an executable under a trusted, Microsoft signed binary.
Created: 2025-09-21
Description: User Experience Virtualization tool that launches applications under
  monitoring to capture and synchronize user settings.
Full_Path:
- Path: C:\Program Files\Windows Kits\10\Microsoft User Experience Virtualization\Management\AppLauncher.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Microsoft User Experience Virtualization\Management\AppLauncher.exe
Name: AppLauncher.exe
Resources:
- Link: https://learn.microsoft.com/en-us/microsoft-desktop-optimization-pack/ue-v/uev-getting-started
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# AppLauncher.exe

User Experience Virtualization tool that launches applications under monitoring to capture and synchronize user settings.

# Path(s)

- `C:\Program Files\Windows Kits\10\Microsoft User Experience Virtualization\Management\AppLauncher.exe`
- `C:\Program Files (x86)\Windows Kits\10\Microsoft User Experience Virtualization\Management\AppLauncher.exe`

# Execute Commands

Launches an executable via User Experience Virtualization tool.

```batch
AppLauncher.exe {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Executes an executable under a trusted, Microsoft signed binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/microsoft-desktop-optimization-pack/ue-v/uev-getting-started
# Acknowledgements

- Avihay Eldad (Authored, 2025-09-21)
- Avihay El