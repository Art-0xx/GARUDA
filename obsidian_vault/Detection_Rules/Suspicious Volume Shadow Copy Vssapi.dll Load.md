---
type: detection_rule
title: "Suspicious Volume Shadow Copy Vssapi.dll Load"
rule_id: 37774c23-25a1-4adb-bb6d-8bb9fd59c0f8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Suspicious Volume Shadow Copy Vssapi.dll Load

## Description
Detects the image load of VSS DLL by uncommon executables

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_null_image:
  Image: null
filter_main_program_files:
  Image|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
filter_main_windows:
- Image:
  - C:\Windows\explorer.exe
  - C:\Windows\ImmersiveControlPanel\SystemSettings.exe
  - C:\Windows\servicing\TrustedInstaller.exe
- Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\Temp\{
  - C:\Windows\WinSxS\
  - C:\$WinREAgent\Scratch\
filter_optional_avira:
  Image|contains|all:
  - \temp\is-
  - \avira_system_speedup.tmp
filter_optional_programdata_packagecache:
  Image|startswith: C:\ProgramData\Package Cache\
selection:
  ImageLoaded|endswith: \vssapi.dll
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://github.com/ORCx41/DeleteShadowCopies

## Metadata
- **Author:** frack113
- **Date:** 2022-10-31
- **Rule ID:** `37774c23-25a1-4adb-bb6d-8bb9fd59c0f8`
- **Source file:** `windows/image_load/image_load_dll_vssapi_susp_load.yml`
