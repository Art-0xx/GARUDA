---
Acknowledgement:
- Handle: '@MalFuzzer'
  Person: Uriel Kosayev
- Handle: '@VakninHai'
  Person: Hai Vaknin
- Handle: '@Tamirye94'
  Person: Tamir Yehuda
- Person: Matan Ba
Author: Matan Bahar
Commands:
- Category: Execute
  Command: msedgewebview2.exe --no-sandbox --browser-subprocess-path="{PATH_ABSOLUTE:.exe}"
  Description: This command launches the Microsoft Edge WebView2 browser control without
    sandboxing and will spawn the specified executable as its subprocess.
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: Low privileges
  Tags:
  - Execute: EXE
  Usecase: Proxy execution of binary
- Category: Execute
  Command: msedgewebview2.exe --utility-cmd-prefix="{CMD}"
  Description: This command launches the Microsoft Edge WebView2 browser control without
    sandboxing and will spawn the specified command as its subprocess.
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of binary
- Category: Execute
  Command: msedgewebview2.exe --disable-gpu-sandbox --gpu-launcher="{CMD}"
  Description: This command launches the Microsoft Edge WebView2 browser control without
    sandboxing and will spawn the specified command as its subprocess.
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of binary
- Category: Execute
  Command: msedgewebview2.exe --no-sandbox --renderer-cmd-prefix="{CMD}"
  Description: This command launches the Microsoft Edge WebView2 browser control without
    sandboxing and will spawn the specified command as its subprocess.
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of binary
Created: 2023-06-15
Description: msedgewebview2.exe is the executable file for Microsoft Edge WebView2,
  which is a web browser control used by applications to display web content.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/e1a713d264ac072bb76b5c4e5f41315a015d3f41/rules/windows/process_creation/proc_creation_win_susp_electron_execution_proxy.yml
- IOC: 'msedgewebview2.exe spawned with any of the following: --gpu-launcher, --utility-cmd-prefix,
    --renderer-cmd-prefix, --browser-subprocess-path'
Full_Path:
- Path: C:\Program Files (x86)\Microsoft\Edge\Application\114.0.1823.43\msedgewebview2.exe
- Path: C:\Program Files (x86)\Microsoft\EdgeWebView\Application\131.0.2903.70\msedgewebview2.exe
Name: msedgewebview2.exe
Resources:
- Link: https://medium.com/@MalFuzzer/one-electron-to-rule-them-all-dc2e9b263daf
mitre_data:
  technique_ids:
  - T1218.015
tags:
- lolbas/osbinaries
---

# msedgewebview2.exe

msedgewebview2.exe is the executable file for Microsoft Edge WebView2, which is a web browser control used by applications to display web content.

# Path(s)

- `C:\Program Files (x86)\Microsoft\Edge\Application\114.0.1823.43\msedgewebview2.exe`
- `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\131.0.2903.70\msedgewebview2.exe`

# Execute Commands

This command launches the Microsoft Edge WebView2 browser control without sandboxing and will spawn the specified executable as its subprocess.

```batch
msedgewebview2.exe --no-sandbox --browser-subprocess-path="{PATH_ABSOLUTE:.exe}"
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** Low privileges
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



This command launches the Microsoft Edge WebView2 browser control without sandboxing and will spawn the specified command as its subprocess.

```batch
msedgewebview2.exe --utility-cmd-prefix="{CMD}"
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



This command launches the Microsoft Edge WebView2 browser control without sandboxing and will spawn the specified command as its subprocess.

```batch
msedgewebview2.exe --disable-gpu-sandbox --gpu-launcher="{CMD}"
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



This command launches the Microsoft Edge WebView2 browser control without sandboxing and will spawn the specified command as its subprocess.

```batch
msedgewebview2.exe --no-sandbox --renderer-cmd-prefix="{CMD}"
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://medium.com/@MalFuzzer/one-electron-to-rule-them-all-dc2e9b263daf
# Acknowledgements

- Matan Bahar (Authored, 2023-06-15)
- Uriel Kosayev (@MalFuzzer)
- Hai Vaknin (@VakninHai)
- Tamir Yehuda (@Tamirye94)
- Matan Ba