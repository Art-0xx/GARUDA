---
Acknowledgement:
- Person: Elliot Kill
Author: Elliot Killick
Commands:
- Category: Conceal
  Command: DeviceCredentialDeployment
  Description: Grab the console window handle and set it to hidden
  MitreID: T1564
  OperatingSystem: Windows 10
  Privileges: User
  Usecase: Can be used to stealthily run a console application (e.g. cmd.exe) in the
    background
Created: 2021-08-16
Description: Device Credential Deployment
Detection:
- IOC: DeviceCredentialDeployment.exe should not be run on a normal workstation
- Sigma: https://github.com/SigmaHQ/sigma/blob/ff5102832031425f6eed011dd3a2e62653008c94/rules/windows/process_creation/proc_creation_win_lolbin_device_credential_deployment.yml
Full_Path:
- Path: C:\Windows\System32\DeviceCredentialDeployment.exe
Name: DeviceCredentialDeployment.exe
mitre_data:
  technique_ids:
  - T1564
tags:
- lolbas/osbinaries
---

# DeviceCredentialDeployment.exe

Device Credential Deployment

# Path(s)

- `C:\Windows\System32\DeviceCredentialDeployment.exe`

# Conceal Commands

Grab the console window handle and set it to hidden

```batch
DeviceCredentialDeployment
```

- **Usecase:** Can be used to stealthily run a console application (e.g. cmd.exe) in the background
- **Privileges Required:** User
- **MitreID:** `T1564`
- **Operating System(s):** Windows 10


# Acknowledgements

- Elliot Killick (Authored, 2021-08-16)
- Elliot Kill