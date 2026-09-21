---
type: detection_rule
title: "Driver/DLL Installation Via Odbcconf.EXE"
rule_id: 3f5491e2-8db8-496b-9e95-1029fce852d4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Driver/DLL Installation Via Odbcconf.EXE

## Description
Detects execution of "odbcconf" with "INSTALLDRIVER" which installs a new ODBC driver. Attackers abuse this to install and run malicious DLLs.

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
  - 'INSTALLDRIVER '
  - .dll
selection_img:
- Image|endswith: \odbcconf.exe
- OriginalFileName: odbcconf.exe
```

## MITRE ATT&CK
- T1218.008

## False Positives
- Legitimate driver DLLs being registered via "odbcconf" will generate false positives. Investigate the path of the DLL and its contents to determine if the action is authorized.

## References
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://web.archive.org/web/20191023232753/https://twitter.com/Hexacorn/status/1187143326673330176
- https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-22
- **Rule ID:** `3f5491e2-8db8-496b-9e95-1029fce852d4`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_driver_install.yml`
