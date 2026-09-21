---
type: detection_rule
title: "Non Interactive PowerShell Process Spawned"
rule_id: f4bbd493-b796-416e-bbf2-121235348529
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Non Interactive PowerShell Process Spawned

## Description
Detects non-interactive PowerShell activity by looking at the "powershell" process with a non-user GUI process such as "explorer.exe" as a parent.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  ParentImage|endswith:
  - :\Windows\explorer.exe
  - :\Windows\System32\CompatTelRunner.exe
  - :\Windows\SysWOW64\explorer.exe
filter_main_windows_update:
  ParentImage: :\$WINDOWS.~BT\Sources\SetupHost.exe
filter_optional_defender:
  ParentImage|endswith: :\Program Files\Windows Defender Advanced Threat Protection\SenseIR.exe
filter_optional_terminal:
  ParentImage|contains: :\Program Files\WindowsApps\Microsoft.WindowsTerminal_
  ParentImage|endswith: \WindowsTerminal.exe
filter_optional_vscode:
  ParentCommandLine|contains: ' --ms-enable-electron-run-as-node '
  ParentImage|endswith: \AppData\Local\Programs\Microsoft VS Code\Code.exe
selection:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Likely. Many admin scripts and tools leverage PowerShell in their BAT or VB scripts which may trigger this rule often. It is best to add additional filters or use this to hunt for anomalies

## References
- https://web.archive.org/web/20200925032237/https://threathunterplaybook.com/notebooks/windows/02_execution/WIN-190410151110.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g (rule), oscd.community (improvements)
- **Date:** 2019-09-12
- **Rule ID:** `f4bbd493-b796-416e-bbf2-121235348529`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_non_interactive_execution.yml`
