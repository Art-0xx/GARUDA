---
Acknowledgement:
- Person: Kamran Saiful
Author: Kamran Saifullah
Commands:
- Category: Download
  Command: devtunnel.exe host -p 8080
  Description: Enabling a forwarded port for locally hosted service at port 8080 to
    be exposed on the internet.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11, MacOS
  Privileges: User
  Usecase: Download Files, Upload Files, Data Exfiltration
Created: 2023-09-16
Description: Binary to enable forwarded ports on windows operating systems.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/dns_query/dns_query_win_devtunnels_communication.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/network_connection/net_connection_win_domain_devtunnels.yml
- IOC: devtunnel.exe binary spawned
- IOC: '*.devtunnels.ms'
- IOC: '*.*.devtunnels.ms'
- Analysis: https://cydefops.com/vscode-data-exfiltration
Full_Path:
- Path: C:\Users\<username>\AppData\Local\Temp\.net\devtunnel\devtunnel.exe
- Path: C:\Users\<username>\AppData\Local\Temp\DevTunnels\devtunnel.exe
Name: devtunnel.exe
Resources:
- Link: https://code.visualstudio.com/docs/editor/port-forwarding
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# devtunnel.exe

Binary to enable forwarded ports on windows operating systems.

# Path(s)

- `C:\Users\<username>\AppData\Local\Temp\.net\devtunnel\devtunnel.exe`
- `C:\Users\<username>\AppData\Local\Temp\DevTunnels\devtunnel.exe`

# Download Commands

Enabling a forwarded port for locally hosted service at port 8080 to be exposed on the internet.

```batch
devtunnel.exe host -p 8080
```

- **Usecase:** Download Files, Upload Files, Data Exfiltration
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11, MacOS



# Resource(s)

- https://code.visualstudio.com/docs/editor/port-forwarding
# Acknowledgements

- Kamran Saifullah (Authored, 2023-09-16)
- Kamran Saiful