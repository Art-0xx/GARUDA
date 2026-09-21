---
type: detection_rule
title: "Potential Defense Evasion Via Raw Disk Access By Uncommon Tools"
rule_id: db809f10-56ce-4420-8c86-d6a7d793c79c
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1006]
---

# Potential Defense Evasion Via Raw Disk Access By Uncommon Tools

## Description
Detects raw disk access using uncommon tools or tools that are located in suspicious locations (heavy filtering is required), which could indicate possible defense evasion attempts

## Log Source
```yaml
category: raw_access_thread
product: windows
```

## Detection Logic
```yaml
condition: not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_floppy:
  Device|contains: floppy
filter_main_generic:
  Image|startswith:
  - C:\$WINDOWS.~BT\
  - C:\Program Files (x86)\
  - C:\Program Files\
  - C:\Windows\CCM\
  - C:\Windows\explorer.exe
  - C:\Windows\servicing\
  - C:\Windows\SoftwareDistribution\
  - C:\Windows\System32\
  - C:\Windows\SystemApps\
  - C:\Windows\SysWOW64\
  - C:\Windows\uus\
  - C:\Windows\WinSxS\
filter_main_microsoft_appdata:
  Image|contains|all:
  - \AppData\
  - \Microsoft\
  Image|startswith: C:\Users\
filter_main_null:
  Image: null
filter_main_ssd_nvme:
  Image|endswith:
  - \Executables\SSDUpdate.exe
  - \HostMetadata\NVMEHostmetadata.exe
  Image|startswith: C:\Windows\Temp\
filter_main_system_images:
  Image:
  - Registry
  - System
filter_main_systemsettings:
  Image: C:\Windows\ImmersiveControlPanel\SystemSettings.exe
filter_main_update:
  Image|startswith: C:\$WinREAgent\Scratch\
filter_main_windefender:
  Image|endswith:
  - \MsMpEng.exe
  - \MpDefenderCoreService.exe
  Image|startswith: C:\ProgramData\Microsoft\Windows Defender\Platform\
filter_optional_Keybase:
  Image|contains: \AppData\Local\Keybase\upd.exe
  Image|startswith: C:\Users\
filter_optional_github_desktop:
  Image|contains: \AppData\Local\GitHubDesktop\app-
  Image|endswith: \resources\app\git\mingw64\bin\git.exe
  Image|startswith: C:\Users\
filter_optional_nextron:
  Image|endswith: \thor.exe
  Image|startswith: C:\Windows\Temp\asgard2-agent\
```

## MITRE ATT&CK
- T1006

## False Positives
- Likely

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment

## Metadata
- **Author:** Teymur Kheirkhabarov, oscd.community
- **Date:** 2019-10-22
- **Rule ID:** `db809f10-56ce-4420-8c86-d6a7d793c79c`
- **Source file:** `windows/raw_access_thread/raw_access_thread_susp_disk_access_using_uncommon_tools.yml`
