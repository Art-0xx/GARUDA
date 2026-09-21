---
Acknowledgement:
- Person: Malwrolog
Author: Oddvar Moe
Commands:
- Category: Compile
  Command: jsc.exe {PATH:.js}
  Description: Use jsc.exe to compile JavaScript code stored in the provided .JS file
    and generate a .EXE file with the same name.
  MitreID: T1127
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: JScript
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
- Category: Compile
  Command: jsc.exe /t:library {PATH:.js}
  Description: Use jsc.exe to compile JavaScript code stored in the .JS file and generate
    a DLL file with the same name.
  MitreID: T1127
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: JScript
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
Created: 2019-05-31
Description: Binary file used by .NET to compile JavaScript code to .exe or .dll format
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/35a7244c62820fbc5a832e50b1e224ac3a1935da/rules/windows/process_creation/proc_creation_win_lolbin_jsc.yml
- IOC: Jsc.exe should normally not run a system unless it is used for development.
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Jsc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Jsc.exe
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Jsc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Jsc.exe
Name: Jsc.exe
Resources:
- Link: https://twitter.com/DissectMalware/status/998797808907046913
- Link: https://www.phpied.com/make-your-javascript-a-windows-exe/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/osbinaries
---

# Jsc.exe

Binary file used by .NET to compile JavaScript code to .exe or .dll format

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\Jsc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Jsc.exe`
- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\Jsc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Jsc.exe`

# Compile Commands

Use jsc.exe to compile JavaScript code stored in the provided .JS file and generate a .EXE file with the same name.

```batch
jsc.exe {PATH:.js}
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Use jsc.exe to compile JavaScript code stored in the .JS file and generate a DLL file with the same name.

```batch
jsc.exe /t:library {PATH:.js}
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/DissectMalware/status/998797808907046913
- https://www.phpied.com/make-your-javascript-a-windows-exe/
# Acknowledgements

- Oddvar Moe (Authored, 2019-05-31)
- Malwrolog