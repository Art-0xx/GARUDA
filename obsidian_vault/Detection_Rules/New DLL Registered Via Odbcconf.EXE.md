---
type: detection_rule
title: "New DLL Registered Via Odbcconf.EXE"
rule_id: 9f0a8bf3-a65b-440a-8c1e-5cb1547c8e70
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# New DLL Registered Via Odbcconf.EXE

## Description
Detects execution of "odbcconf" with "REGSVR" in order to register a new DLL (equivalent to running regsvr32). Attackers abuse this to install and run malicious DLLs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - 'REGSVR '
  - .dll
selection_img:
- Image|endswith: \odbcconf.exe
- OriginalFileName: odbcconf.exe
```

## MITRE ATT&CK
- T1218.008

## False Positives
- Legitimate DLLs being registered via "odbcconf" will generate false positives. Investigate the path of the DLL and its content to determine if the action is authorized.

## References
- https://learn.microsoft.com/en-us/sql/odbc/odbcconf-exe?view=sql-server-ver16
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://redcanary.com/blog/raspberry-robin/
- https://web.archive.org/web/20191023232753/https://twitter.com/Hexacorn/status/1187143326673330176
- https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/

## Metadata
- **Author:** Kirill Kiryanov, Beyu Denis, Daniil Yugoslavskiy, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-22
- **Rule ID:** `9f0a8bf3-a65b-440a-8c1e-5cb1547c8e70`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_register_dll_regsvr.yml`
