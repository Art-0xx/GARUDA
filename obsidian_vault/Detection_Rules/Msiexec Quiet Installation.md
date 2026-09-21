---
type: detection_rule
title: "Msiexec Quiet Installation"
rule_id: 79a87aa6-e4bd-42fc-a5bb-5e6fbdcd62f5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007]
---

# Msiexec Quiet Installation

## Description
Adversaries may abuse msiexec.exe to proxy execution of malicious payloads.
Msiexec.exe is the command-line utility for the Windows Installer and is thus commonly associated with executing installation packages (.msi)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_ccm:
  IntegrityLevel:
  - System
  - S-1-16-16384
  ParentImage: C:\Windows\CCM\Ccm32BitLauncher.exe
filter_main_system_temp:
  ParentImage|startswith: C:\Windows\Temp\
filter_optional_user_temp:
  ParentImage|contains: \AppData\Local\Temp\
  ParentImage|startswith: C:\Users\
filter_optional_wsl:
  Image|endswith: C:\Windows\System32\msiexec.exe
  ParentImage|endswith: C:\Windows\System32\wsl.exe
selection_cli:
  CommandLine|contains|windash:
  - -i
  - -package
  - -a
  - -j
selection_img:
- Image|endswith: \msiexec.exe
- OriginalFileName: msiexec.exe
selection_quiet:
  CommandLine|contains|windash: -q
```

## MITRE ATT&CK
- T1218.007

## False Positives
- WindowsApps installing updates via the quiet flag

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/msiexec
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218.007/T1218.007.md
- https://twitter.com/_st0pp3r_/status/1583914244344799235

## Metadata
- **Author:** frack113
- **Date:** 2022-01-16
- **Rule ID:** `79a87aa6-e4bd-42fc-a5bb-5e6fbdcd62f5`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_install_quiet.yml`
