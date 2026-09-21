---
type: detection_rule
title: "Change PowerShell Policies to an Insecure Level"
rule_id: 87e3c4e8-a6a8-4ad9-bb4f-46e7ff99a180
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Change PowerShell Policies to an Insecure Level

## Description
Detects changing the PowerShell script execution policy to a potentially insecure level using the "-ExecutionPolicy" flag.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_powershell_core:
  CommandLine|contains:
  - -NoProfile -ExecutionPolicy Bypass -File "C:\Program Files\PowerShell\7\
  - -NoProfile -ExecutionPolicy Bypass -File "C:\Program Files (x86)\PowerShell\7\
  ParentImage:
  - C:\Windows\SysWOW64\msiexec.exe
  - C:\Windows\System32\msiexec.exe
filter_optional_avast:
  CommandLine|contains:
  - -ExecutionPolicy ByPass -File "C:\Program Files\Avast Software\Avast
  - -ExecutionPolicy ByPass -File "C:\Program Files (x86)\Avast Software\Avast\
  ParentImage|contains:
  - C:\Program Files\Avast Software\Avast\
  - C:\Program Files (x86)\Avast Software\Avast\
  - \instup.exe
selection_img:
- OriginalFileName:
  - powershell_ise.exe
  - PowerShell.EXE
  - pwsh.dll
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
selection_level:
  CommandLine|contains:
  - Bypass
  - Unrestricted
selection_option:
  CommandLine|contains:
  - '-executionpolicy '
  - ' -ep '
  - ' -exec '
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Administrator scripts

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.4
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4
- https://adsecurity.org/?p=2604
- https://thedfirreport.com/2021/11/01/from-zero-to-domain-admin/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-01
- **Rule ID:** `87e3c4e8-a6a8-4ad9-bb4f-46e7ff99a180`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_set_policies_to_unsecure_level.yml`
