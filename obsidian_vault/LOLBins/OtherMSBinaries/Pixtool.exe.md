---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: pixtool.exe launch {PATH_ABSOLUTE:.exe}
  Description: Launches an executable via PIX command-line utility.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes an executable under a trusted, Microsoft signed binary.
Created: 2025-09-21
Description: Command line utility for taking and analyzing PIX GPU captures.
Full_Path:
- Path: C:\Program Files\Microsoft PIX\pixtool.exe
- Path: C:\Program Files (x86)\Microsoft PIX\pixtool.exe
Name: Pixtool.exe
Resources:
- Link: https://devblogs.microsoft.com/pix/pixtool/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Pixtool.exe

Command line utility for taking and analyzing PIX GPU captures.

# Path(s)

- `C:\Program Files\Microsoft PIX\pixtool.exe`
- `C:\Program Files (x86)\Microsoft PIX\pixtool.exe`

# Execute Commands

Launches an executable via PIX command-line utility.

```batch
pixtool.exe launch {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Executes an executable under a trusted, Microsoft signed binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://devblogs.microsoft.com/pix/pixtool/
# Acknowledgements

- Avihay Eldad (Authored, 2025-09-21)
- Avihay El