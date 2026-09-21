---
type: detection_rule
title: "Always Install Elevated Windows Installer"
rule_id: cd951fdc-4b2f-47f5-ba99-a33bf61e3770
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Always Install Elevated Windows Installer

## Description
Detects Windows Installer service (msiexec.exe) trying to install MSI packages with SYSTEM privilege

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_image_* and selection_user and not 1 of filter_*
filter_avast:
  ParentImage|startswith:
  - C:\Program Files\Avast Software\
  - C:\Program Files (x86)\Avast Software\
filter_avira:
  ParentImage|startswith: C:\ProgramData\Avira\
filter_google_update:
  ParentImage|startswith:
  - C:\Program Files\Google\Update\
  - C:\Program Files (x86)\Google\Update\
filter_installer:
  ParentImage: C:\Windows\System32\services.exe
filter_repair:
- CommandLine|endswith: \system32\msiexec.exe /V
- ParentCommandLine|endswith: \system32\msiexec.exe /V
filter_sophos:
  ParentImage|startswith: C:\ProgramData\Sophos\
selection_image_1:
  Image|contains|all:
  - \Windows\Installer\
  - msi
  Image|endswith: tmp
selection_image_2:
  Image|endswith: \msiexec.exe
  IntegrityLevel:
  - System
  - S-1-16-16384
selection_user:
  User|contains:
  - AUTHORI
  - AUTORI
```

## MITRE ATT&CK
- T1548.002

## False Positives
- System administrator usage
- Anti virus products
- WindowsApps located in "C:\Program Files\WindowsApps\"

## References
- https://image.slidesharecdn.com/kheirkhabarovoffzonefinal-181117201458/95/hunting-for-privilege-escalation-in-windows-environment-48-638.jpg

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Mangatas Tondang (rule), oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `cd951fdc-4b2f-47f5-ba99-a33bf61e3770`
- **Source file:** `windows/process_creation/proc_creation_win_susp_always_install_elevated_windows_installer.yml`
