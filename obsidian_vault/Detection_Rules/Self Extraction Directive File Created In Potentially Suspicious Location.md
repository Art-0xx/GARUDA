---
type: detection_rule
title: "Self Extraction Directive File Created In Potentially Suspicious Location"
rule_id: 760e75d8-c3b5-409b-a9bf-6130b4c4603f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Self Extraction Directive File Created In Potentially Suspicious Location

## Description
Detects the creation of Self Extraction Directive files (.sed) in a potentially suspicious location.
These files are used by the "iexpress.exe" utility in order to create self extracting packages.
Attackers were seen abusing this utility and creating PE files with embedded ".sed" entries.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains:
  - :\ProgramData\
  - :\Temp\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  TargetFilename|endswith: .sed
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://strontic.github.io/xcyclopedia/library/iexpress.exe-D594B2A33EFAFD0EABF09E3FDC05FCEA.html
- https://en.wikipedia.org/wiki/IExpress
- https://www.virustotal.com/gui/file/602f4ae507fa8de57ada079adff25a6c2a899bd25cd092d0af7e62cdb619c93c/behavior

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2024-02-05
- **Rule ID:** `760e75d8-c3b5-409b-a9bf-6130b4c4603f`
- **Source file:** `windows/file/file_event/file_event_win_sed_file_creation.yml`
