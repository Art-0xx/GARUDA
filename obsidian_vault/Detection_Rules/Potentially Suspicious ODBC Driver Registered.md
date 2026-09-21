---
type: detection_rule
title: "Potentially Suspicious ODBC Driver Registered"
rule_id: e4d22291-f3d5-4b78-9a0c-a1fbaf32a6a4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Potentially Suspicious ODBC Driver Registered

## Description
Detects the registration of a new ODBC driver where the driver is located in a potentially suspicious location

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains:
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
  TargetObject|contains: \SOFTWARE\ODBC\ODBCINST.INI\
  TargetObject|endswith:
  - \Driver
  - \Setup
```

## MITRE ATT&CK
- T1003

## False Positives
- Unlikely

## References
- https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-23
- **Rule ID:** `e4d22291-f3d5-4b78-9a0c-a1fbaf32a6a4`
- **Source file:** `windows/registry/registry_set/registry_set_odbc_driver_registered_susp.yml`
