---
type: detection_rule
title: "Suspicious Binary Writes Via AnyDesk"
rule_id: 2d367498-5112-4ae5-a06a-96e7bc33a211
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Suspicious Binary Writes Via AnyDesk

## Description
Detects AnyDesk writing binary files to disk other than "gcapi.dll".
According to RedCanary research it is highly abnormal for AnyDesk to write executable files to disk besides gcapi.dll,
which is a legitimate DLL that is part of the Google Chrome web browser used to interact with the Google Cloud API. (See reference section for more details)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_dlls:
  TargetFilename|endswith: \gcapi.dll
selection:
  Image|endswith:
  - \AnyDesk.exe
  - \AnyDeskMSI.exe
  TargetFilename|endswith:
  - .dll
  - .exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Unknown

## References
- https://redcanary.com/blog/misbehaving-rats/
- https://thedfirreport.com/2025/02/24/confluence-exploit-leads-to-lockbit-ransomware/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-28
- **Rule ID:** `2d367498-5112-4ae5-a06a-96e7bc33a211`
- **Source file:** `windows/file/file_event/file_event_win_anydesk_writing_susp_binaries.yml`
