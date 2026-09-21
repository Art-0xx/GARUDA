---
Acknowledgement:
- Handle: '@hexacorn'
  Person: Adam (OpenURL)
- Handle: '@bohops'
  Person: Jimmy (OpenURL)
- Handle: '@DissectMalware'
  Person: Malwrologist (FileProtocolHandler - HTA)
- Person: r0lan (Obfuscati
Author: LOLBAS Team
Commands:
- Category: Execute
  Command: rundll32.exe url.dll,OpenURL {PATH_ABSOLUTE:.hta}
  Description: Launch a HTML application payload by calling OpenURL.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: HTA
  Usecase: Invoke an HTML Application via mshta.exe (Default Handler).
- Category: Execute
  Command: rundll32.exe url.dll,OpenURL {PATH_ABSOLUTE:.url}
  Description: Launch an executable payload via proxy through a .url (information)
    file by calling OpenURL.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: URL
  Usecase: Load an executable payload by calling a .url file.
- Category: Execute
  Command: rundll32.exe url.dll,OpenURL file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
  Description: Launch an executable by calling OpenURL.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Load an executable payload by specifying the file protocol handler (obfuscated).
- Category: Execute
  Command: rundll32.exe url.dll,FileProtocolHandler {PATH_ABSOLUTE:.exe}
  Description: Launch an executable by calling FileProtocolHandler.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Launch an executable.
- Category: Execute
  Command: rundll32.exe url.dll,FileProtocolHandler file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
  Description: Launch an executable by calling FileProtocolHandler.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Load an executable payload by specifying the file protocol handler (obfuscated).
- Category: Execute
  Command: rundll32.exe url.dll,FileProtocolHandler file:///C:/test/test.hta
  Description: Launch a HTML application payload by calling FileProtocolHandler.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: HTA
  Usecase: Invoke an HTML Application via mshta.exe (Default Handler).
Created: 2018-05-25
Description: Internet Shortcut Shell Extension DLL.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Full_Path:
- Path: c:\windows\system32\url.dll
- Path: c:\windows\syswow64\url.dll
Name: Url.dll
Resources:
- Link: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
- Link: https://twitter.com/DissectMalware/status/995348436353470465
- Link: https://twitter.com/bohops/status/974043815655956481
- Link: https://twitter.com/yeyint_mth/status/997355558070927360
- Link: https://twitter.com/Hexacorn/status/974063407321223168
- Link: https://windows10dll.nirsoft.net/url_dll.html
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Url.dll

Internet Shortcut Shell Extension DLL.

# Path(s)

- `c:\windows\system32\url.dll`
- `c:\windows\syswow64\url.dll`

# Execute Commands

Launch a HTML application payload by calling OpenURL.

```batch
rundll32.exe url.dll,OpenURL {PATH_ABSOLUTE:.hta}
```

- **Usecase:** Invoke an HTML Application via mshta.exe (Default Handler).
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable payload via proxy through a .url (information) file by calling OpenURL.

```batch
rundll32.exe url.dll,OpenURL {PATH_ABSOLUTE:.url}
```

- **Usecase:** Load an executable payload by calling a .url file.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable by calling OpenURL.

```batch
rundll32.exe url.dll,OpenURL file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
```

- **Usecase:** Load an executable payload by specifying the file protocol handler (obfuscated).
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable by calling FileProtocolHandler.

```batch
rundll32.exe url.dll,FileProtocolHandler {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Launch an executable.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable by calling FileProtocolHandler.

```batch
rundll32.exe url.dll,FileProtocolHandler file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
```

- **Usecase:** Load an executable payload by specifying the file protocol handler (obfuscated).
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch a HTML application payload by calling FileProtocolHandler.

```batch
rundll32.exe url.dll,FileProtocolHandler file:///C:/test/test.hta
```

- **Usecase:** Invoke an HTML Application via mshta.exe (Default Handler).
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
- https://twitter.com/DissectMalware/status/995348436353470465
- https://twitter.com/bohops/status/974043815655956481
- https://twitter.com/yeyint_mth/status/997355558070927360
- https://twitter.com/Hexacorn/status/974063407321223168
- https://windows10dll.nirsoft.net/url_dll.html
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Adam (OpenURL) (@hexacorn)
- Jimmy (OpenURL) (@bohops)
- Malwrologist (FileProtocolHandler - HTA) (@DissectMalware)
- r0lan (Obfuscati