---
Acknowledgement:
- Handle: '@i_am_tutu'
  Person: Ade Ogunsowo
- Person: Alexander Sennhau
Author: Adetutu Ogunsowo
Commands:
- Category: Tamper
  Command: cipher /w:{PATH_ABSOLUTE:folder}
  Description: Zero out a file
  MitreID: T1485
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  Privileges: User
  Usecase: Can be used to forensically erase a file.
- Category: Tamper
  Command: cipher.exe /e {PATH_ABSOLUTE}
  Description: Encrypt a file
  MitreID: T1562
  OperatingSystem: Windows 10
  Privileges: Admin
  Usecase: Can be used to impair defences by e.g. encrypting a critical EDR solution
    file.
Created: 2024-11-22
Description: File Encryption Utility
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/process_creation/proc_creation_win_cipher_overwrite_deleted_data.yml
- IOC: cipher.exe process with /w on the command line
Full_Path:
- Path: c:\windows\system32\cipher.exe
- Path: c:\windows\syswow64\cipher.exe
Name: Cipher.exe
Resources:
- Link: https://www.volexity.com/blog/2024/11/22/the-nearest-neighbor-attack-how-a-russian-apt-weaponized-nearby-wi-fi-networks-for-covert-access/
mitre_data:
  technique_ids:
  - T1485
  - T1562
tags:
- lolbas/osbinaries
---

# Cipher.exe

File Encryption Utility

# Path(s)

- `c:\windows\system32\cipher.exe`
- `c:\windows\syswow64\cipher.exe`

# Tamper Commands

Zero out a file

```batch
cipher /w:{PATH_ABSOLUTE:folder}
```

- **Usecase:** Can be used to forensically erase a file.
- **Privileges Required:** User
- **MitreID:** `T1485`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Encrypt a file

```batch
cipher.exe /e {PATH_ABSOLUTE}
```

- **Usecase:** Can be used to impair defences by e.g. encrypting a critical EDR solution file.
- **Privileges Required:** Admin
- **MitreID:** `T1562`
- **Operating System(s):** Windows 10



# Resource(s)

- https://www.volexity.com/blog/2024/11/22/the-nearest-neighbor-attack-how-a-russian-apt-weaponized-nearby-wi-fi-networks-for-covert-access/
# Acknowledgements

- Adetutu Ogunsowo (Authored, 2024-11-22)
- Ade Ogunsowo (@i_am_tutu)
- Alexander Sennhau