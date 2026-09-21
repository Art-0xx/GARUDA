---
type: detection_rule
title: "Potentially Suspicious Child Process Of WinRAR.EXE"
rule_id: 146aace8-9bd6-42ba-be7a-0070d8027b76
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1203]
---

# Potentially Suspicious Child Process Of WinRAR.EXE

## Description
Detects potentially suspicious child processes of WinRAR.exe.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_binaries:
- Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- OriginalFileName:
  - Cmd.Exe
  - cscript.exe
  - mshta.exe
  - PowerShell.EXE
  - pwsh.dll
  - regsvr32.exe
  - RUNDLL32.EXE
  - wscript.exe
selection_parent:
  ParentImage|endswith: \WinRAR.exe
```

## MITRE ATT&CK
- T1203

## False Positives
- Unknown

## References
- https://www.group-ib.com/blog/cve-2023-38831-winrar-zero-day/
- https://github.com/knight0x07/WinRAR-Code-Execution-Vulnerability-CVE-2023-38831/blob/26ab6c40b6d2c09bb4fc60feaa4a3a90cfd20c23/Part-1-Overview.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-31
- **Rule ID:** `146aace8-9bd6-42ba-be7a-0070d8027b76`
- **Source file:** `windows/process_creation/proc_creation_win_winrar_susp_child_process.yml`
