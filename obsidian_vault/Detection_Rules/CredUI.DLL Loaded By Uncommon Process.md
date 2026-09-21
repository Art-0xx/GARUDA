---
type: detection_rule
title: "CredUI.DLL Loaded By Uncommon Process"
rule_id: 9ae01559-cf7e-4f8e-8e14-4c290a1b4784
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1056.002]
---

# CredUI.DLL Loaded By Uncommon Process

## Description
Detects loading of "credui.dll" and related DLLs by an uncommon process. Attackers might leverage this DLL for potential use of "CredUIPromptForCredentials" or "CredUnPackAuthenticationBufferW".

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_full:
  Image:
  - C:\Windows\explorer.exe
  - C:\Windows\ImmersiveControlPanel\SystemSettings.exe
  - C:\Windows\regedit.exe
filter_main_generic:
  Image|startswith:
  - C:\Program Files (x86)\
  - C:\Program Files\
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\SystemApps\
filter_optional_onedrive:
  Image|contains: \AppData\Local\Microsoft\OneDrive\
  Image|startswith: C:\Users\
filter_optional_opera:
  Image|endswith: \opera_autoupdate.exe
filter_optional_process_explorer:
  Image|endswith:
  - \procexp64.exe
  - \procexp64a.exe
  - \procexp.exe
filter_optional_teams:
  Image|contains: \AppData\Local\Microsoft\Teams\
  Image|endswith: \Teams.exe
  Image|startswith: C:\Users\
selection:
- ImageLoaded|endswith:
  - \credui.dll
  - \wincredui.dll
- OriginalFileName:
  - credui.dll
  - wincredui.dll
```

## MITRE ATT&CK
- T1056.002

## False Positives
- Other legitimate processes loading those DLLs in your environment.

## References
- https://securitydatasets.com/notebooks/atomic/windows/credential_access/SDWIN-201020013208.html
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1056.002/T1056.002.md#atomic-test-2---powershell---prompt-user-for-password
- https://learn.microsoft.com/en-us/windows/win32/api/wincred/nf-wincred-creduipromptforcredentialsa
- https://github.com/S12cybersecurity/RDPCredentialStealer

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-10-20
- **Rule ID:** `9ae01559-cf7e-4f8e-8e14-4c290a1b4784`
- **Source file:** `windows/image_load/image_load_dll_credui_uncommon_process_load.yml`
