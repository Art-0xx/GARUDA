---
type: detection_rule
title: "Odbcconf.EXE Suspicious DLL Location"
rule_id: 6b65c28e-11f3-46cb-902a-68f2cafaf474
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Odbcconf.EXE Suspicious DLL Location

## Description
Detects execution of "odbcconf" where the path of the DLL being registered is located in a potentially suspicious location.

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
  - :\PerfLogs\
  - :\ProgramData\
  - :\Temp\
  - :\Users\Public\
  - :\Windows\Registration\CRMLog
  - :\Windows\System32\com\dmp\
  - :\Windows\System32\FxsTmp\
  - :\Windows\System32\Microsoft\Crypto\RSA\MachineKeys\
  - :\Windows\System32\spool\drivers\color\
  - :\Windows\System32\spool\PRINTERS\
  - :\Windows\System32\spool\SERVERS\
  - :\Windows\System32\Tasks_Migrated\
  - :\Windows\System32\Tasks\Microsoft\Windows\SyncCenter\
  - :\Windows\SysWOW64\com\dmp\
  - :\Windows\SysWOW64\FxsTmp\
  - :\Windows\SysWOW64\Tasks\Microsoft\Windows\PLA\System\
  - :\Windows\SysWOW64\Tasks\Microsoft\Windows\SyncCenter\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - :\Windows\Tracing\
  - \AppData\Local\Temp\
  - \AppData\Roaming\
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
- https://www.trendmicro.com/en_us/research/17/h/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses.html
- https://securityintelligence.com/posts/raspberry-robin-worm-dridex-malware/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-22
- **Rule ID:** `6b65c28e-11f3-46cb-902a-68f2cafaf474`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_exec_susp_locations.yml`
