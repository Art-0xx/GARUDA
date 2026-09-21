---
type: detection_rule
title: "LSASS Process Crashed - Application"
rule_id: a18e0862-127b-43ca-be12-1a542c75c7c5
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Process Crashed - Application

## Description
Detects Windows error reporting events where the process that crashed is LSASS (Local Security Authority Subsystem Service).
This could be the cause of a provoked crash by techniques such as Lsass-Shtinkering to dump credentials.

## Log Source
```yaml
product: windows
service: application
```

## Detection Logic
```yaml
condition: selection
selection:
  AppName: lsass.exe
  EventID: 1000
  ExceptionCode: c0000001
  Provider_Name: Application Error
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Rare legitimate crashing of the lsass process

## References
- https://github.com/deepinstinct/Lsass-Shtinkering
- https://media.defcon.org/DEF%20CON%2030/DEF%20CON%2030%20presentations/Asaf%20Gilboa%20-%20LSASS%20Shtinkering%20Abusing%20Windows%20Error%20Reporting%20to%20Dump%20LSASS.pdf
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-erref/596a1078-e883-4972-9bbc-49e60bebca55

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-07
- **Rule ID:** `a18e0862-127b-43ca-be12-1a542c75c7c5`
- **Source file:** `windows/builtin/application/application_error/win_application_error_lsass_crash.yml`
