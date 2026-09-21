---
type: detection_rule
title: "Uncommon Child Process Of Appvlp.EXE"
rule_id: 9c7e131a-0f2c-4ae0-9d43-b04f4e266d43
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Uncommon Child Process Of Appvlp.EXE

## Description
Detects uncommon child processes of Appvlp.EXE
Appvlp or the Application Virtualization Utility is included with Microsoft Office. Attackers are able to abuse "AppVLP" to execute shell commands.
Normally, this binary is used for Application Virtualization, but it can also be abused to circumvent the ASR file path rule folder
or to mark a file as a system file.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  Image|endswith:
  - :\Windows\SysWOW64\rundll32.exe
  - :\Windows\System32\rundll32.exe
filter_optional_office_msoasb:
  Image|contains: :\Program Files\Microsoft Office
  Image|endswith: \msoasb.exe
filter_optional_office_msouc:
  Image|contains: :\Program Files\Microsoft Office
  Image|endswith: \MSOUC.EXE
filter_optional_office_skype:
  Image|contains|all:
  - :\Program Files\Microsoft Office
  - \SkypeSrv\
  Image|endswith: \SKYPESERVER.EXE
selection:
  ParentImage|endswith: \appvlp.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Appvlp/

## Metadata
- **Author:** Sreeman
- **Date:** 2020-03-13
- **Rule ID:** `9c7e131a-0f2c-4ae0-9d43-b04f4e266d43`
- **Source file:** `windows/process_creation/proc_creation_win_appvlp_uncommon_child_process.yml`
