---
type: detection_rule
title: "Potentially Suspicious Image Load of Offreg.dll"
rule_id: c9e5f013-4a6f-4d8c-9b0e-f7a4c3d26e95
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potentially Suspicious Image Load of Offreg.dll

## Description
Detects potentially suspicious loading of the Offline Registry Library (offreg.dll).
Offreg.dll enables direct read/write access to offline registry hives without invoking the Windows Registry API,
bypassing its associated audit logging and telemetry. Attackers may abuse this to stealthily modify registry hives
while evading detection mechanisms that rely on standard registry event logs.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_appdata_local_programs:
  Image|contains: \AppData\Local\Programs\
  Image|startswith: C:\Users\
filter_main_defender:
  Image|endswith: \MsMpEng.exe
  Image|startswith: C:\ProgramData\Microsoft\Windows Defender\Platform\
filter_main_program_files:
  Image|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
filter_main_system32:
  Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\WinSxS\
selection:
  ImageLoaded|endswith: \offreg.dll
```

## MITRE ATT&CK
- T1112

## False Positives
- Third-party backup or forensic software that performs offline registry parsing
- Windows deployment tools (DISM, ADK) run from non-standard paths

## References
- https://learn.microsoft.com/en-us/windows/win32/devnotes/about-the-offline-registry-library
- https://github.com/MSNightmare/LegacyHive

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-07-23
- **Rule ID:** `c9e5f013-4a6f-4d8c-9b0e-f7a4c3d26e95`
- **Source file:** `windows/image_load/image_load_susp_offreg_dll_load.yml`
