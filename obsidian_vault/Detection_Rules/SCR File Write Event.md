---
type: detection_rule
title: "SCR File Write Event"
rule_id: c048f047-7e2a-4888-b302-55f509d4a91d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# SCR File Write Event

## Description
Detects the creation of screensaver files (.scr) outside of system folders. Attackers may execute an application as an ".SCR" file using "rundll32.exe desk.cpl,InstallScreenSaver" for example.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  TargetFilename|contains:
  - :\$WINDOWS.~BT\NewOS\
  - :\Windows\System32\
  - :\Windows\SysWOW64\
  - :\Windows\WinSxS\
  - :\WUDownloadCache\
selection:
  TargetFilename|endswith: .scr
```

## MITRE ATT&CK
- T1218.011

## False Positives
- The installation of new screen savers by third party software

## References
- https://lolbas-project.github.io/lolbas/Libraries/Desk/

## Metadata
- **Author:** Christopher Peacock @securepeacock, SCYTHE @scythe_io
- **Date:** 2022-04-27
- **Rule ID:** `c048f047-7e2a-4888-b302-55f509d4a91d`
- **Source file:** `windows/file/file_event/file_event_win_new_scr_file.yml`
