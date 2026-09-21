---
type: detection_rule
title: "Suspicious Process Access to LSASS with Dbgcore/Dbghelp DLLs"
rule_id: 9f5c1d59-33be-4e60-bcab-85d2f566effd
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001, attack.t1685]
---

# Suspicious Process Access to LSASS with Dbgcore/Dbghelp DLLs

## Description
Detects suspicious process access to LSASS.exe from processes located in uncommon locations with dbgcore.dll or dbghelp.dll in the call trace.
These DLLs contain functions like MiniDumpWriteDump that can be abused for credential dumping purposes. While modern tools like Mimikatz have moved to using ntdll.dll,
dbgcore.dll and dbghelp.dll are still used by basic credential dumping utilities and legacy tools for LSASS memory access and process suspension techniques.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_lsass_calltrace:
  CallTrace|contains:
  - dbgcore.dll
  - dbghelp.dll
  TargetImage|endswith: \lsass.exe
selection_susp_location:
  SourceImage|contains:
  - :\Perflogs\
  - :\Temp\
  - :\Users\Public\
  - \$Recycle.Bin\
  - \AppData\Roaming\
  - \Contacts\
  - \Desktop\
  - \Documents\
  - \Downloads\
  - \Favorites\
  - \Favourites\
  - \inetpub\wwwroot\
  - \Music\
  - \Pictures\
  - \Start Menu\Programs\Startup\
  - \Users\Default\
  - \Videos\
  - \Windows\Temp\
```

## MITRE ATT&CK
- T1003.001
- T1685

## False Positives
- Possibly during software installation or update processes

## References
- https://www.splunk.com/en_us/blog/security/you-bet-your-lsass-hunting-lsass-access.html
- https://docs.microsoft.com/en-us/windows/win32/api/minidumpapiset/nf-minidumpwritedump

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-27
- **Rule ID:** `9f5c1d59-33be-4e60-bcab-85d2f566effd`
- **Source file:** `windows/process_access/proc_access_win_susp_dbgcore_dbghelp_load.yml`
