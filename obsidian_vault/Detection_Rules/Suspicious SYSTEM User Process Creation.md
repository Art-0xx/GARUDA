---
type: detection_rule
title: "Suspicious SYSTEM User Process Creation"
rule_id: 2617e7ed-adb7-40ba-b0f3-8f9945fe6c09
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134, attack.t1003, attack.t1027]
---

# Suspicious SYSTEM User Process Creation

## Description
Detects a suspicious process creation as SYSTEM user (suspicious program or command line parameter)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection* and not 1 of filter_*
filter_config_mgr:
  ParentImage|contains: :\Packages\Plugins\Microsoft.GuestConfiguration.ConfigurationforWindows\
filter_java:
  CommandLine|contains: ' -ma '
  Image|contains:
  - :\Program Files (x86)\Java\
  - :\Program Files\Java\
  Image|endswith: \bin\jp2launcher.exe
  ParentImage|contains:
  - :\Program Files (x86)\Java\
  - :\Program Files\Java\
  ParentImage|endswith: \bin\javaws.exe
filter_main_ping:
  CommandLine|contains|all:
  - ping
  - 127.0.0.1
  - ' -n '
filter_vs:
  Image|endswith: \PING.EXE
  ParentCommandLine|contains: \DismFoDInstall.cmd
selection:
  IntegrityLevel:
  - System
  - S-1-16-16384
  User|contains:
  - AUTHORI
  - AUTORI
selection_special:
- Image|endswith:
  - \calc.exe
  - \cscript.exe
  - \forfiles.exe
  - \hh.exe
  - \mshta.exe
  - \ping.exe
  - \wscript.exe
- CommandLine|re: net\s+user\s+
- CommandLine|contains:
  - ' -NoP '
  - ' -W Hidden '
  - ' -decode '
  - ' /decode '
  - ' /urlcache '
  - ' -urlcache '
  - ' -e* JAB'
  - ' -e* SUVYI'
  - ' -e* SQBFAFgA'
  - ' -e* aWV4I'
  - ' -e* IAB'
  - ' -e* PAA'
  - ' -e* aQBlAHgA'
  - vssadmin delete shadows
  - reg SAVE HKLM
  - ' -ma '
  - Microsoft\Windows\CurrentVersion\Run
  - .downloadstring(
  - .downloadfile(
  - ' /ticket:'
  - 'dpapi::'
  - event::clear
  - event::drop
  - id::modify
  - 'kerberos::'
  - 'lsadump::'
  - 'misc::'
  - 'privilege::'
  - 'rpc::'
  - 'sekurlsa::'
  - 'sid::'
  - 'token::'
  - vault::cred
  - vault::list
  - ' p::d '
  - ;iex(
  - MiniDump
```

## MITRE ATT&CK
- T1134
- T1003
- T1027

## False Positives
- Administrative activity
- Scripts and administrative tools used in the monitored environment
- Monitoring activity

## References
- Internal Research
- https://tools.thehacker.recipes/mimikatz/modules

## Metadata
- **Author:** Florian Roth (Nextron Systems), David ANDRE (additional keywords)
- **Date:** 2021-12-20
- **Rule ID:** `2617e7ed-adb7-40ba-b0f3-8f9945fe6c09`
- **Source file:** `windows/process_creation/proc_creation_win_susp_system_user_anomaly.yml`
