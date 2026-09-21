---
type: detection_rule
title: "Regsvr32 Execution From Potential Suspicious Location"
rule_id: 9525dc73-0327-438c-8c04-13c0e037e9da
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Regsvr32 Execution From Potential Suspicious Location

## Description
Detects execution of regsvr32 where the DLL is located in a potentially suspicious location.

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
  - :\ProgramData\
  - :\Temp\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \AppData\Roaming\
selection_img:
- Image|endswith: \regsvr32.exe
- OriginalFileName: REGSVR32.EXE
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Some installers might execute "regsvr32" with DLLs located in %TEMP% or in %PROGRAMDATA%. Apply additional filters if necessary.

## References
- https://web.archive.org/web/20171001085340/https://subt0x10.blogspot.com/2017/04/bypass-application-whitelisting-script.html
- https://app.any.run/tasks/34221348-072d-4b70-93f3-aa71f6ebecad/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-26
- **Rule ID:** `9525dc73-0327-438c-8c04-13c0e037e9da`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_susp_exec_path_1.yml`
