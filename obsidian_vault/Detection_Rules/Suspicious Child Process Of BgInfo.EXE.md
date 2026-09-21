---
type: detection_rule
title: "Suspicious Child Process Of BgInfo.EXE"
rule_id: 811f459f-9231-45d4-959a-0266c6311987
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005, attack.t1218, attack.t1202]
---

# Suspicious Child Process Of BgInfo.EXE

## Description
Detects suspicious child processes of "BgInfo.exe" which could be a sign of potential abuse of the binary to proxy execution via external VBScript

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- Image|endswith:
  - \calc.exe
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \notepad.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
- Image|contains:
  - \AppData\Local\
  - \AppData\Roaming\
  - :\Users\Public\
  - :\Temp\
  - :\Windows\Temp\
  - :\PerfLogs\
selection_parent:
  ParentImage|endswith:
  - \bginfo.exe
  - \bginfo64.exe
```

## MITRE ATT&CK
- T1059.005
- T1218
- T1202

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Bginfo/
- https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-16
- **Rule ID:** `811f459f-9231-45d4-959a-0266c6311987`
- **Source file:** `windows/process_creation/proc_creation_win_bginfo_suspicious_child_process.yml`
