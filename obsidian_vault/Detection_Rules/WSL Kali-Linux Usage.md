---
type: detection_rule
title: "WSL Kali-Linux Usage"
rule_id: 6f1a11aa-4b8a-4b7f-9e13-4d3e4ff0e0d4
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# WSL Kali-Linux Usage

## Description
Detects the use of Kali Linux through Windows Subsystem for Linux

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_img_* or all of selection_kali_* and not 1 of filter_main_*
filter_main_install_uninstall:
  CommandLine|contains:
  - ' -i '
  - ' --install '
  - ' --unregister '
selection_img_appdata:
- Image|contains|all:
  - :\Users\
  - \AppData\Local\packages\KaliLinux
- Image|contains|all:
  - :\Users\
  - \AppData\Local\Microsoft\WindowsApps\kali.exe
selection_img_windowsapps:
  Image|contains: :\Program Files\WindowsApps\KaliLinux.
  Image|endswith: \kali.exe
selection_kali_wsl_child:
- Image|contains:
  - \kali.exe
  - \KaliLinux
- CommandLine|contains:
  - Kali.exe
  - Kali-linux
  - kalilinux
selection_kali_wsl_parent:
  ParentImage|endswith:
  - \wsl.exe
  - \wslhost.exe
```

## MITRE ATT&CK
- T1202

## False Positives
- Legitimate installation or usage of Kali Linux WSL by administrators or security teams

## References
- https://medium.com/@redfanatic7/running-kali-linux-on-windows-51ad95166e6e
- https://learn.microsoft.com/en-us/windows/wsl/install

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-10
- **Rule ID:** `6f1a11aa-4b8a-4b7f-9e13-4d3e4ff0e0d4`
- **Source file:** `windows/process_creation/proc_creation_win_wsl_kali_linux_usage.yml`
