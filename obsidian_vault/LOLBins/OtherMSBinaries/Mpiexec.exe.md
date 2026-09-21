---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: mpiexec.exe {CMD}
  Description: Executes a command via MPI command-line tool.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes commands under a trusted, Microsoft signed binary.
Created: 2025-09-25
Description: Command-line tool for running Message Passing Interface (MPI) applications.
Full_Path:
- Path: C:\Program Files\Microsoft MPI\Bin\mpiexec.exe
- Path: C:\Program Files (x86)\Microsoft MPI\Bin\mpiexec.exe
Name: Mpiexec.exe
Resources:
- Link: https://learn.microsoft.com/en-us/powershell/high-performance-computing/mpiexec
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Mpiexec.exe

Command-line tool for running Message Passing Interface (MPI) applications.

# Path(s)

- `C:\Program Files\Microsoft MPI\Bin\mpiexec.exe`
- `C:\Program Files (x86)\Microsoft MPI\Bin\mpiexec.exe`

# Execute Commands

Executes a command via MPI command-line tool.

```batch
mpiexec.exe {CMD}
```

- **Usecase:** Executes commands under a trusted, Microsoft signed binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/powershell/high-performance-computing/mpiexec
# Acknowledgements

- Avihay Eldad (Authored, 2025-09-25)
- Avihay El