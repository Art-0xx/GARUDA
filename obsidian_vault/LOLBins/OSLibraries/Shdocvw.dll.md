---
Acknowledgement:
- Handle: '@hexacorn'
  Person: Adam
- Person: Ji
Author: LOLBAS Team
Code_Sample:
- Code: https://gist.githubusercontent.com/bohops/89d7b11fa32062cfe31be9fdb18f050e/raw/1206a613a6621da21e7fd164b80a7ff01c5b64ab/calc.url
Commands:
- Category: Execute
  Command: rundll32.exe shdocvw.dll,OpenURL {PATH_ABSOLUTE:.url}
  Description: Launch an executable payload via proxy through a URL (information)
    file by calling OpenURL.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: URL
  Usecase: Load an executable payload by calling a .url file with or without quotes.
    The .url file extension can be renamed.
Created: 2018-05-25
Description: Shell Doc Object and Control Library.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Full_Path:
- Path: c:\windows\system32\shdocvw.dll
- Path: c:\windows\syswow64\shdocvw.dll
Name: Shdocvw.dll
Resources:
- Link: http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
- Link: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
- Link: https://twitter.com/bohops/status/997690405092290561
- Link: https://windows10dll.nirsoft.net/shdocvw_dll.html
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Shdocvw.dll

Shell Doc Object and Control Library.

# Path(s)

- `c:\windows\system32\shdocvw.dll`
- `c:\windows\syswow64\shdocvw.dll`

# Execute Commands

Launch an executable payload via proxy through a URL (information) file by calling OpenURL.

```batch
rundll32.exe shdocvw.dll,OpenURL {PATH_ABSOLUTE:.url}
```

- **Usecase:** Load an executable payload by calling a .url file with or without quotes. The .url file extension can be renamed.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
- https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
- https://twitter.com/bohops/status/997690405092290561
- https://windows10dll.nirsoft.net/shdocvw_dll.html
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Adam (@hexacorn)
- Ji