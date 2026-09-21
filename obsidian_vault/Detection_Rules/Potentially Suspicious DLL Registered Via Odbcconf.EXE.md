---
type: detection_rule
title: "Potentially Suspicious DLL Registered Via Odbcconf.EXE"
rule_id: ba4cfc11-d0fa-4d94-bf20-7c332c412e76
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Potentially Suspicious DLL Registered Via Odbcconf.EXE

## Description
Detects execution of "odbcconf" with the "REGSVR" action where the DLL in question doesn't contain a ".dll" extension. Which is often used as a method to evade defenses.

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
  CommandLine|contains: 'REGSVR '
selection_img:
- Image|endswith: \odbcconf.exe
- OriginalFileName: odbcconf.exe
```

## MITRE ATT&CK
- T1218.008

## False Positives
- Unlikely

## References
- https://learn.microsoft.com/en-us/sql/odbc/odbcconf-exe?view=sql-server-ver16
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://www.trendmicro.com/en_us/research/17/h/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-22
- **Rule ID:** `ba4cfc11-d0fa-4d94-bf20-7c332c412e76`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_register_dll_regsvr_susp.yml`
