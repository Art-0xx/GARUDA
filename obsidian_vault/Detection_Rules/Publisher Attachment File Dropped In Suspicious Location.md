---
type: detection_rule
title: "Publisher Attachment File Dropped In Suspicious Location"
rule_id: 3d2a2d59-929c-4b78-8c1a-145dfe9e07b1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Publisher Attachment File Dropped In Suspicious Location

## Description
Detects creation of files with the ".pub" extension in suspicious or uncommon locations. This could be a sign of attackers abusing Publisher documents

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
  - \AppData\Local\Temp\
  - \Users\Public\
  - \Windows\Temp\
  - C:\Temp\
  TargetFilename|endswith: .pub
```

## False Positives
- Legitimate usage of ".pub" files from those locations

## References
- https://twitter.com/EmericNasi/status/1623224526220804098

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-08
- **Rule ID:** `3d2a2d59-929c-4b78-8c1a-145dfe9e07b1`
- **Source file:** `windows/file/file_event/file_event_win_office_publisher_files_in_susp_locations.yml`
