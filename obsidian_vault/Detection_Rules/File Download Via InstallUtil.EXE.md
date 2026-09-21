---
type: detection_rule
title: "File Download Via InstallUtil.EXE"
rule_id: 75edd216-1939-4c73-8d61-7f3a0d85b5cc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# File Download Via InstallUtil.EXE

## Description
Detects use of .NET InstallUtil.exe in order to download arbitrary files. The files will be written to "%LOCALAPPDATA%\Microsoft\Windows\INetCache\IE\"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ftp://
  - http://
  - https://
selection_img:
- Image|endswith: \InstallUtil.exe
- OriginalFileName: InstallUtil.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/LOLBAS-Project/LOLBAS/pull/239

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-19
- **Rule ID:** `75edd216-1939-4c73-8d61-7f3a0d85b5cc`
- **Source file:** `windows/process_creation/proc_creation_win_installutil_download.yml`
