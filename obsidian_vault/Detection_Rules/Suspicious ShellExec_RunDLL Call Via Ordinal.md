---
type: detection_rule
title: "Suspicious ShellExec_RunDLL Call Via Ordinal"
rule_id: 8823e85d-31d8-473e-b7f4-92da070f0fc6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Suspicious ShellExec_RunDLL Call Via Ordinal

## Description
Detects suspicious call to the "ShellExec_RunDLL" exported function of SHELL32.DLL through the ordinal number to launch other commands.
Adversary might only use the ordinal number in order to bypass existing detection that alert on usage of ShellExec_RunDLL on CommandLine.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_parent_* and 1 of selection_susp_*
selection_parent_img:
  ParentCommandLine|contains: SHELL32.DLL
selection_parent_ordinal:
  ParentCommandLine|contains:
  - '#568'
  - '#570'
  - '#572'
  - '#576'
selection_susp_child_img:
  Image|endswith:
  - \bash.exe
  - \bitsadmin.exe
  - \cmd.exe
  - \cscript.exe
  - \curl.exe
  - \mshta.exe
  - \msiexec.exe
  - \msxsl.exe
  - \odbcconf.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \schtasks.exe
  - \wmic.exe
  - \wscript.exe
selection_susp_cli_parent:
- ParentCommandLine|contains:
  - comspec
  - iex
  - Invoke-
  - msiexec
  - odbcconf
  - regsvr32
- ParentCommandLine|contains:
  - \Desktop\
  - \ProgramData\
  - \Temp\
  - \Users\Public\
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://redcanary.com/blog/raspberry-robin/
- https://www.microsoft.com/en-us/security/blog/2022/10/27/raspberry-robin-worm-part-of-larger-ecosystem-facilitating-pre-ransomware-activity/
- https://github.com/SigmaHQ/sigma/issues/1009
- https://strontic.github.io/xcyclopedia/library/shell32.dll-65DA072F25DE83D9F83653E3FEA3644D.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-12-01
- **Rule ID:** `8823e85d-31d8-473e-b7f4-92da070f0fc6`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_susp_shellexec_ordinal_execution.yml`
