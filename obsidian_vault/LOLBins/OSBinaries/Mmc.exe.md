---
Acknowledgement:
- Handle: '@bohops'
  Person: Jimmy
- Handle: '@clavoillotte'
  Person: clem
- Person: Fredrik H. Brat
Author: '@bohops'
Commands:
- Category: Execute
  Command: mmc.exe -Embedding {PATH_ABSOLUTE:.msc}
  Description: Launch a 'backgrounded' MMC process and invoke a COM payload
  MitreID: T1218.014
  OperatingSystem: Windows 10 (and possibly earlier versions), Windows 11
  Privileges: User
  Tags:
  - Execute: COM
  Usecase: Configure a snap-in to load a COM custom class (CLSID) that has been added
    to the registry
- Category: UAC Bypass
  Command: mmc.exe gpedit.msc
  Description: Load an arbitrary payload DLL by configuring COR Profiler registry
    settings and launching MMC to bypass UAC.
  MitreID: T1218.014
  OperatingSystem: Windows 10 (and possibly earlier versions), Windows 11
  Privileges: Administrator
  Tags:
  - Execute: DLL
  Usecase: Modify HKCU\Environment key in Registry with COR profiler values then launch
    MMC to load the payload DLL.
- Category: Download
  Command: mmc.exe -Embedding {PATH_ABSOLUTE:.msc}
  Description: Download and save an executable to disk
  MitreID: T1218.014
  OperatingSystem: Windows 10 (and possibly earlier versions), Windows 11
  Privileges: User
  Tags:
  - Application: GUI
  Usecase: Download file from Internet
Created: 2018-12-04
Description: Load snap-ins to locally and remotely manage Windows systems
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_mmc_susp_child_process.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/file/file_event/file_event_win_uac_bypass_dotnet_profiler.yml
Full_Path:
- Path: C:\Windows\System32\mmc.exe
- Path: C:\Windows\SysWOW64\mmc.exe
Name: Mmc.exe
Resources:
- Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
- Link: https://offsec.almond.consulting/UAC-bypass-dotnet.html
- Link: https://www.youtube.com/watch?v=LFgZOTmhzeA
mitre_data:
  technique_ids:
  - T1218.014
tags:
- lolbas/osbinaries
---

# Mmc.exe

Load snap-ins to locally and remotely manage Windows systems

# Path(s)

- `C:\Windows\System32\mmc.exe`
- `C:\Windows\SysWOW64\mmc.exe`

# Download Commands

Download and save an executable to disk

```batch
mmc.exe -Embedding {PATH_ABSOLUTE:.msc}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1218.014`
- **Operating System(s):** Windows 10 (and possibly earlier versions), Windows 11



# UAC Bypass Commands

Load an arbitrary payload DLL by configuring COR Profiler registry settings and launching MMC to bypass UAC.

```batch
mmc.exe gpedit.msc
```

- **Usecase:** Modify HKCU\Environment key in Registry with COR profiler values then launch MMC to load the payload DLL.
- **Privileges Required:** Administrator
- **MitreID:** `T1218.014`
- **Operating System(s):** Windows 10 (and possibly earlier versions), Windows 11



# Execute Commands

Launch a 'backgrounded' MMC process and invoke a COM payload

```batch
mmc.exe -Embedding {PATH_ABSOLUTE:.msc}
```

- **Usecase:** Configure a snap-in to load a COM custom class (CLSID) that has been added to the registry
- **Privileges Required:** User
- **MitreID:** `T1218.014`
- **Operating System(s):** Windows 10 (and possibly earlier versions), Windows 11



# Resource(s)

- https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
- https://offsec.almond.consulting/UAC-bypass-dotnet.html
- https://www.youtube.com/watch?v=LFgZOTmhzeA
# Acknowledgements

- @bohops (Authored, 2018-12-04)
- Jimmy (@bohops)
- clem (@clavoillotte)
- Fredrik H. Brat