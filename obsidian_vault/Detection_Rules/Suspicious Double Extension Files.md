---
type: detection_rule
title: "Suspicious Double Extension Files"
rule_id: b4926b47-a9d7-434c-b3a0-adc3fa0bd13e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.007]
---

# Suspicious Double Extension Files

## Description
Detects dropped files with double extensions, which is often used by malware as a method to abuse the fact that Windows hide default extensions by default.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_*
filter_icons_linux:
  TargetFilename|startswith: /usr/share/icons/
selection_exe:
  TargetFilename|endswith:
  - .rar.exe
  - .zip.exe
selection_gen:
  TargetFilename|contains:
  - .doc.
  - .docx.
  - .gif.
  - .jpeg.
  - .jpg.
  - .mp3.
  - .mp4.
  - .pdf.
  - .png.
  - .ppt.
  - .pptx.
  - .rtf.
  - .svg.
  - .txt.
  - .xls.
  - .xlsx.
  TargetFilename|endswith:
  - .exe
  - .iso
  - .rar
  - .svg
  - .zip
```

## MITRE ATT&CK
- T1036.007

## False Positives
- Unlikely

## References
- https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-june-mustang-panda/
- https://www.anomali.com/blog/china-based-apt-mustang-panda-targets-minority-groups-public-and-private-sector-organizations
- https://www.cybereason.com/blog/research/a-bazar-of-tricks-following-team9s-development-cycles
- https://twitter.com/malwrhunterteam/status/1235135745611960321
- https://twitter.com/luc4m/status/1073181154126254080

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2022-06-19
- **Rule ID:** `b4926b47-a9d7-434c-b3a0-adc3fa0bd13e`
- **Source file:** `windows/file/file_event/file_event_win_susp_double_extension.yml`
