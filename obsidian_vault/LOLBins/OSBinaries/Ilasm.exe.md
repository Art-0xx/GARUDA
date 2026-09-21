---
Acknowledgement:
- Handle: '@VakninHai'
  Person: Hai Vaknin(Lux)
- Person: Lior A
Author: Hai vaknin (lux)
Commands:
- Category: Compile
  Command: ilasm.exe {PATH_ABSOLUTE:.txt} /exe
  Description: Binary file used by .NET to compile C#/intermediate (IL) code to .exe
  MitreID: T1127
  OperatingSystem: Windows 7, Windows 10, Windows 11
  Privileges: User
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
- Category: Compile
  Command: ilasm.exe {PATH_ABSOLUTE:.txt} /dll
  Description: Binary file used by .NET to compile C#/intermediate (IL) code to dll
  MitreID: T1127
  OperatingSystem: Windows 7, Windows 10, Windows 11
  Privileges: User
  Usecase: A description of the usecase
Created: 2020-03-17
Description: used for compile c# code into dll or exe.
Detection:
- IOC: Ilasm may not be used often in production environments (such as on endpoints)
- Sigma: https://github.com/SigmaHQ/sigma/blob/bea6f18d350d9c9fdc067f93dde0e9b11cc22dc2/rules/windows/process_creation/proc_creation_win_lolbin_ilasm.yml
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\ilasm.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ilasm.exe
Name: Ilasm.exe
Resources:
- Link: https://github.com/LuxNoBulIshit/BeforeCompileBy-ilasm/blob/master/hello_world.txt
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/osbinaries
---

# Ilasm.exe

used for compile c# code into dll or exe.

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\ilasm.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ilasm.exe`

# Compile Commands

Binary file used by .NET to compile C#/intermediate (IL) code to .exe

```batch
ilasm.exe {PATH_ABSOLUTE:.txt} /exe
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 7, Windows 10, Windows 11



Binary file used by .NET to compile C#/intermediate (IL) code to dll

```batch
ilasm.exe {PATH_ABSOLUTE:.txt} /dll
```

- **Usecase:** A description of the usecase
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 7, Windows 10, Windows 11



# Resource(s)

- https://github.com/LuxNoBulIshit/BeforeCompileBy-ilasm/blob/master/hello_world.txt
# Acknowledgements

- Hai vaknin (lux) (Authored, 2020-03-17)
- Hai Vaknin(Lux) (@VakninHai)
- Lior A