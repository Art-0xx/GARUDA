---
Acknowledgement:
- Handle: '@hexacorn'
  Person: Adam
- Person: Wie
Author: Wietze Beukema
Commands:
- Category: Execute
  Command: conhost.exe {CMD}
  Description: Execute a command line with conhost.exe as parent process
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Use conhost.exe as a proxy binary to evade defensive counter-measures
- Category: Execute
  Command: conhost.exe --headless {CMD}
  Description: Execute a command line with conhost.exe as parent process
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Specify --headless parameter to hide child process window (if applicable)
Created: 2022-04-05
Description: Console Window host
Detection:
- IOC: conhost.exe spawning unexpected processes
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_conhost_susp_child_process.yml
Full_Path:
- Path: c:\windows\system32\conhost.exe
Name: Conhost.exe
Resources:
- Link: https://www.hexacorn.com/blog/2020/05/25/how-to-con-your-host/
- Link: https://twitter.com/Wietze/status/1511397781159751680
- Link: https://twitter.com/embee_research/status/1559410767564181504
- Link: https://twitter.com/ankit_anubhav/status/1561683123816972288
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/osbinaries
---

# Conhost.exe

Console Window host

# Path(s)

- `c:\windows\system32\conhost.exe`

# Execute Commands

Execute a command line with conhost.exe as parent process

```batch
conhost.exe {CMD}
```

- **Usecase:** Use conhost.exe as a proxy binary to evade defensive counter-measures
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



Execute a command line with conhost.exe as parent process

```batch
conhost.exe --headless {CMD}
```

- **Usecase:** Specify --headless parameter to hide child process window (if applicable)
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://www.hexacorn.com/blog/2020/05/25/how-to-con-your-host/
- https://twitter.com/Wietze/status/1511397781159751680
- https://twitter.com/embee_research/status/1559410767564181504
- https://twitter.com/ankit_anubhav/status/1561683123816972288
# Acknowledgements

- Wietze Beukema (Authored, 2022-04-05)
- Adam (@hexacorn)
- Wie