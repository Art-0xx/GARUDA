---
type: detection_rule
title: "LSASS Access Detected via Attack Surface Reduction"
rule_id: a0a278fe-2c0e-4de2-ac3c-c68b08a9ba98
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Access Detected via Attack Surface Reduction

## Description
Detects Access to LSASS Process

## Log Source
```yaml
definition: 'Requirements:Enabled Block credential stealing from the Windows local
  security authority subsystem (lsass.exe) from Attack Surface Reduction (GUID: 9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2)'
product: windows
service: windefend
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_begins:
  ProcessName|startswith:
  - C:\Windows\System32\DriverStore\
  - C:\WINDOWS\Installer\
  - C:\Program Files\
  - C:\Program Files (x86)\
filter_exact:
  ProcessName:
  - C:\Windows\System32\atiesrxx.exe
  - C:\Windows\System32\CompatTelRunner.exe
  - C:\Windows\System32\msiexec.exe
  - C:\Windows\System32\nvwmi64.exe
  - C:\Windows\System32\svchost.exe
  - C:\Windows\System32\Taskmgr.exe
  - C:\Windows\System32\wbem\WmiPrvSE.exe
  - C:\Windows\SysWOW64\msiexec.exe
filter_thor:
  ProcessName|endswith:
  - \thor64.exe
  - \thor.exe
  ProcessName|startswith: C:\Windows\Temp\asgard2-agent\
selection:
  EventID: 1121
  Path|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Google Chrome GoogleUpdate.exe
- Some Taskmgr.exe related activity

## References
- https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction

## Metadata
- **Author:** Markus Neis
- **Date:** 2018-08-26
- **Rule ID:** `a0a278fe-2c0e-4de2-ac3c-c68b08a9ba98`
- **Source file:** `windows/builtin/windefend/win_defender_asr_lsass_access.yml`
