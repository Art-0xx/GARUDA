---
type: detection_rule
title: "Potentially Suspicious Self Extraction Directive File Created"
rule_id: ab90dab8-c7da-4010-9193-563528cfa347
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potentially Suspicious Self Extraction Directive File Created

## Description
Detects the creation of a binary file with the ".sed" extension. The ".sed" extension stand for Self Extraction Directive files.
These files are used by the "iexpress.exe" utility in order to create self extracting packages.
Attackers were seen abusing this utility and creating PE files with embedded ".sed" entries.
Usually ".sed" files are simple ini files and not PE binaries.

## Log Source
```yaml
category: file_executable_detected
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
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
- **Rule ID:** `ab90dab8-c7da-4010-9193-563528cfa347`
- **Source file:** `windows/file/file_executable_detected/file_executable_detected_win_susp_embeded_sed_file.yml`
