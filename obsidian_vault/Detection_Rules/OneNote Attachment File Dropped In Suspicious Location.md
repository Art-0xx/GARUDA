---
type: detection_rule
title: "OneNote Attachment File Dropped In Suspicious Location"
rule_id: 7fd164ba-126a-4d9c-9392-0d4f7c243df0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# OneNote Attachment File Dropped In Suspicious Location

## Description
Detects creation of files with the ".one"/".onepkg" extension in suspicious or uncommon locations. This could be a sign of attackers abusing OneNote attachments

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_onenote:
  Image|contains: :\Program Files\Microsoft Office\
  Image|endswith: \ONENOTE.EXE
selection:
  TargetFilename|contains:
  - \AppData\Local\Temp\
  - \Users\Public\
  - \Windows\Temp\
  - :\Temp\
  TargetFilename|endswith:
  - .one
  - .onepkg
```

## False Positives
- Legitimate usage of ".one" or ".onepkg" files from those locations

## References
- https://www.bleepingcomputer.com/news/security/hackers-now-use-microsoft-onenote-attachments-to-spread-malware/
- https://blog.osarmor.com/319/onenote-attachment-delivers-asyncrat-malware/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-22
- **Rule ID:** `7fd164ba-126a-4d9c-9392-0d4f7c243df0`
- **Source file:** `windows/file/file_event/file_event_win_office_onenote_files_in_susp_locations.yml`
