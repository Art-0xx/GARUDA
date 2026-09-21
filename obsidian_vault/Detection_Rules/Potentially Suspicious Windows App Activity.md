---
type: detection_rule
title: "Potentially Suspicious Windows App Activity"
rule_id: f91ed517-a6ba-471d-9910-b3b4a398c0f3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious Windows App Activity

## Description
Detects potentially suspicious child process of applications launched from inside the WindowsApps directory. This could be a sign of a rogue ".appx" package installation/execution

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_susp_* and not 1 of filter_optional_*
filter_optional_sysinternals:
  Image|endswith: \cmd.exe
  ParentImage|startswith: C:\Program Files\WindowsApps\Microsoft.SysinternalsSuite
filter_optional_terminal:
  Image|endswith:
  - \powershell.exe
  - \cmd.exe
  - \pwsh.exe
  ParentImage|contains: :\Program Files\WindowsApps\Microsoft.WindowsTerminal
  ParentImage|endswith: \WindowsTerminal.exe
selection_parent:
  ParentImage|contains: C:\Program Files\WindowsApps\
selection_susp_cli:
  CommandLine|contains:
  - cmd /c
  - Invoke-
  - Base64
selection_susp_img:
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
```

## False Positives
- Legitimate packages that make use of external binaries such as Windows Terminal

## References
- https://news.sophos.com/en-us/2021/11/11/bazarloader-call-me-back-attack-abuses-windows-10-apps-mechanism/
- https://www.sentinelone.com/labs/inside-malicious-windows-apps-for-malware-deployment/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-12
- **Rule ID:** `f91ed517-a6ba-471d-9910-b3b4a398c0f3`
- **Source file:** `windows/process_creation/proc_creation_win_susp_appx_execution.yml`
