---
type: detection_rule
title: "Installation of WSL Kali-Linux"
rule_id: eca8ae39-5c3c-4321-b538-9e64fe25822e
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Installation of WSL Kali-Linux

## Description
Detects installation of Kali Linux distribution through Windows Subsystem for Linux (WSL).
Attackers may use Kali Linux WSL to leverage its penetration testing tools and capabilities for malicious purposes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_wsl_*
selection_wsl_img:
- Image|endswith: \wsl.exe
- OriginalFileName: wsl
selection_wsl_install:
  CommandLine|contains:
  - ' --install '
  - ' -i '
selection_wsl_kali:
  CommandLine|contains: kali
```

## MITRE ATT&CK
- T1059

## False Positives
- Legitimate installation or usage of Kali Linux WSL by administrators or security teams

## References
- https://medium.com/@redfanatic7/running-kali-linux-on-windows-51ad95166e6e
- https://learn.microsoft.com/en-us/windows/wsl/install

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-10
- **Rule ID:** `eca8ae39-5c3c-4321-b538-9e64fe25822e`
- **Source file:** `windows/process_creation/proc_creation_win_wsl_kali_linux_installation.yml`
