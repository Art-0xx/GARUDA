---
type: detection_rule
title: "Potentially Suspicious Powershell Script Execution From Temp Folder"
rule_id: a6a39bdb-935c-4f0a-ab77-35f4bbf44d33
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Potentially Suspicious Powershell Script Execution From Temp Folder

## Description
Detects a potentially suspicious powershell script executions from temporary folder

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_amazon_ec2:
  CommandLine|contains: \Windows\system32\config\systemprofile\AppData\Local\Temp\Amazon\EC2-Windows\
filter_optional_chocolatey_installer:
  CommandLine|contains|all:
  - -NoProfile -ExecutionPolicy Bypass -Command
  - AppData\Local\Temp\
  - Install-Chocolatey.ps1
  Image|endswith: \powershell.exe
  ParentImage:
  - C:\Windows\System32\Msiexec.exe
  - C:\Windows\SysWOW64\Msiexec.exe
filter_optional_generic:
  CommandLine|contains:
  - ' >'
  - Out-File
  - ConvertTo-Json
filter_optional_vscode:
  CommandLine|contains: -WindowStyle hidden -Verb runAs
selection:
  CommandLine|contains:
  - \Windows\Temp
  - \Temporary Internet
  - \AppData\Local\Temp
  - \AppData\Roaming\Temp
  - '%TEMP%'
  - '%TMP%'
  - '%LocalAppData%\Temp'
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Administrative scripts

## References
- https://www.microsoft.com/security/blog/2021/07/13/microsoft-discovers-threat-actor-targeting-solarwinds-serv-u-software-with-0-day-exploit/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Max Altgelt (Nextron Systems), Tim Shelton
- **Date:** 2021-07-14
- **Rule ID:** `a6a39bdb-935c-4f0a-ab77-35f4bbf44d33`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_script_exec_from_temp_folder.yml`
