---
type: detection_rule
title: "Suspicious Driver/DLL Installation Via Odbcconf.EXE"
rule_id: cb0fe7c5-f3a3-484d-aa25-d350a7912729
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Suspicious Driver/DLL Installation Via Odbcconf.EXE

## Description
Detects execution of "odbcconf" with the "INSTALLDRIVER" action where the driver doesn't contain a ".dll" extension. This is often used as a defense evasion method.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_dll_ext:
  CommandLine|contains: .dll
selection_cli:
  CommandLine|contains: 'INSTALLDRIVER '
selection_img:
- Image|endswith: \odbcconf.exe
- OriginalFileName: odbcconf.exe
```

## MITRE ATT&CK
- T1218.008

## False Positives
- Unlikely

## References
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://web.archive.org/web/20191023232753/https://twitter.com/Hexacorn/status/1187143326673330176
- https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-23
- **Rule ID:** `cb0fe7c5-f3a3-484d-aa25-d350a7912729`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_driver_install_susp.yml`
