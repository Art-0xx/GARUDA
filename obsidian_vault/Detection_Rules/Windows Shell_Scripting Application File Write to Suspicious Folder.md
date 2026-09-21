---
type: detection_rule
title: "Windows Shell/Scripting Application File Write to Suspicious Folder"
rule_id: 1277f594-a7d1-4f28-a2d3-73af5cbeab43
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Windows Shell/Scripting Application File Write to Suspicious Folder

## Description
Detects Windows shells and scripting applications that write files to suspicious folders

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  Image|endswith:
  - \bash.exe
  - \cmd.exe
  - \cscript.exe
  - \msbuild.exe
  - \powershell.exe
  - \pwsh.exe
  - \sh.exe
  - \wscript.exe
  TargetFilename|startswith:
  - C:\PerfLogs\
  - C:\Users\Public\
selection_2:
  Image|endswith:
  - \certutil.exe
  - \forfiles.exe
  - \mshta.exe
  - \schtasks.exe
  - \scriptrunner.exe
  - \wmic.exe
  TargetFilename|contains:
  - C:\PerfLogs\
  - C:\Users\Public\
  - C:\Windows\Temp\
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-11-20
- **Rule ID:** `1277f594-a7d1-4f28-a2d3-73af5cbeab43`
- **Source file:** `windows/file/file_event/file_event_win_shell_write_susp_directory.yml`
