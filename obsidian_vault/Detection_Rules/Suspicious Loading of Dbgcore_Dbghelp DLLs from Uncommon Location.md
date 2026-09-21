---
type: detection_rule
title: "Suspicious Loading of Dbgcore/Dbghelp DLLs from Uncommon Location"
rule_id: 416bc4a2-7217-4519-8dc7-c3271817f1d5
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1685]
---

# Suspicious Loading of Dbgcore/Dbghelp DLLs from Uncommon Location

## Description
Detects loading of dbgcore.dll or dbghelp.dll from uncommon locations such as user directories.
These DLLs contain the MiniDumpWriteDump function, which can be abused for credential dumping purposes or in some cases for evading EDR/AV detection by suspending processes.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_dll:
  ImageLoaded|endswith:
  - \dbgcore.dll
  - \dbghelp.dll
selection_img:
  Image|contains:
  - :\Perflogs\
  - :\Temp\
  - :\Users\Public\
  - \$Recycle.Bin\
  - \Contacts\
  - \Documents\
  - \Favorites\
  - \Favourites\
  - \inetpub\wwwroot\
  - \Music\
  - \Pictures\
  - \Start Menu\Programs\Startup\
  - \Users\Default\
  - \Videos\
```

## MITRE ATT&CK
- T1003
- T1685

## False Positives
- Unknown

## References
- https://blog.axelarator.net/hunting-for-edr-freeze/
- https://www.zerosalarium.com/2025/09/EDR-Freeze-Puts-EDRs-Antivirus-Into-Coma.html
- https://www.splunk.com/en_us/blog/security/you-bet-your-lsass-hunting-lsass-access.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-27
- **Rule ID:** `416bc4a2-7217-4519-8dc7-c3271817f1d5`
- **Source file:** `windows/image_load/image_load_win_susp_dbgcore_dbghelp_load.yml`
