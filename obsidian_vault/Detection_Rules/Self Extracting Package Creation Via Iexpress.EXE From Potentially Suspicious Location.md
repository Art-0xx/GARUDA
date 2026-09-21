---
type: detection_rule
title: "Self Extracting Package Creation Via Iexpress.EXE From Potentially Suspicious Location"
rule_id: b2b048b0-7857-4380-b0fb-d3f0ab820b71
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Self Extracting Package Creation Via Iexpress.EXE From Potentially Suspicious Location

## Description
Detects the use of iexpress.exe to create binaries via Self Extraction Directive (SED) files located in potentially suspicious locations.
This behavior has been observed in-the-wild by different threat actors.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: ' /n '
selection_img:
- Image|endswith: \iexpress.exe
- OriginalFileName: IEXPRESS.exe
selection_paths:
  CommandLine|contains:
  - :\ProgramData\
  - :\Temp\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
```

## MITRE ATT&CK
- T1218

## False Positives
- Administrators building packages using iexpress.exe

## References
- https://strontic.github.io/xcyclopedia/library/iexpress.exe-D594B2A33EFAFD0EABF09E3FDC05FCEA.html
- https://en.wikipedia.org/wiki/IExpress
- https://decoded.avast.io/janvojtesek/raspberry-robins-roshtyak-a-little-lesson-in-trickery/
- https://www.virustotal.com/gui/file/602f4ae507fa8de57ada079adff25a6c2a899bd25cd092d0af7e62cdb619c93c/behavior

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-02-05
- **Rule ID:** `b2b048b0-7857-4380-b0fb-d3f0ab820b71`
- **Source file:** `windows/process_creation/proc_creation_win_iexpress_susp_execution.yml`
