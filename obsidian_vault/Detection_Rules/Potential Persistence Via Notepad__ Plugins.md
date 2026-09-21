---
type: detection_rule
title: "Potential Persistence Via Notepad++ Plugins"
rule_id: 54127bd4-f541-4ac3-afdb-ea073f63f692
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via Notepad++ Plugins

## Description
Detects creation of new ".dll" files inside the plugins directory of a notepad++ installation by a process other than "gup.exe". Which could indicates possible persistence

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_gup:
  Image|endswith: \Notepad++\updater\gup.exe
filter_install:
  Image|contains: \AppData\Local\Temp\
  Image|endswith:
  - \target.exe
  - Installer.x64.exe
  Image|startswith: C:\Users\
filter_main_installer:
  Image|contains: \npp.
  Image|endswith: .exe
  TargetFilename:
  - C:\Program Files\Notepad++\plugins\NppExport\NppExport.dll
  - C:\Program Files\Notepad++\plugins\mimeTools\mimeTools.dll
  - C:\Program Files\Notepad++\plugins\NppConverter\NppConverter.dll
  - C:\Program Files\Notepad++\plugins\Config\nppPluginList.dll
selection:
  TargetFilename|contains: \Notepad++\plugins\
  TargetFilename|endswith: .dll
```

## False Positives
- Possible FPs during first installation of Notepad++
- Legitimate use of custom plugins by users in order to enhance notepad++ functionalities

## References
- https://pentestlab.blog/2022/02/14/persistence-notepad-plugins/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-10
- **Rule ID:** `54127bd4-f541-4ac3-afdb-ea073f63f692`
- **Source file:** `windows/file/file_event/file_event_win_notepad_plus_plus_persistence.yml`
