---
type: detection_rule
title: "Suspicious WindowsTerminal Child Processes"
rule_id: 8de89e52-f6e1-4b5b-afd1-41ecfa300d48
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious WindowsTerminal Child Processes

## Description
Detects suspicious children spawned via the Windows Terminal application which could be a sign of persistence via WindowsTerminal (see references section)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_builtin_visual_studio_shell:
  CommandLine|contains|all:
  - Import-Module
  - Microsoft.VisualStudio.DevShell.dll
  - Enter-VsDevShell
filter_open_settings:
  CommandLine|contains|all:
  - \AppData\Local\Packages\Microsoft.WindowsTerminal_
  - \LocalState\settings.json
filter_vsdevcmd:
  CommandLine|contains|all:
  - C:\Program Files\Microsoft Visual Studio\
  - \Common7\Tools\VsDevCmd.bat
selection_parent:
  ParentImage|endswith:
  - \WindowsTerminal.exe
  - \wt.exe
selection_susp:
- Image|endswith:
  - \rundll32.exe
  - \regsvr32.exe
  - \certutil.exe
  - \cscript.exe
  - \wscript.exe
  - \csc.exe
- Image|contains:
  - C:\Users\Public\
  - \Downloads\
  - \Desktop\
  - \AppData\Local\Temp\
  - \Windows\TEMP\
- CommandLine|contains:
  - ' iex '
  - ' icm'
  - Invoke-
  - 'Import-Module '
  - 'ipmo '
  - DownloadString(
  - ' /c '
  - ' /k '
  - ' /r '
```

## False Positives
- Other legitimate "Windows Terminal" profiles

## References
- https://persistence-info.github.io/Data/windowsterminalprofile.html
- https://twitter.com/nas_bench/status/1550836225652686848

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-25
- **Rule ID:** `8de89e52-f6e1-4b5b-afd1-41ecfa300d48`
- **Source file:** `windows/process_creation/proc_creation_win_windows_terminal_susp_children.yml`
