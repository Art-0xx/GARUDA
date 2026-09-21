---
type: detection_rule
title: "Office Macro File Download"
rule_id: 0e29e3a7-1ad8-40aa-b691-9f82ecd33d66
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1566.001]
---

# Office Macro File Download

## Description
Detects the creation of a new office macro files on the system via an application (browser, mail client).
This can help identify potential malicious activity, such as the download of macro-enabled documents that could be used for exploitation.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_ext:
- TargetFilename|endswith:
  - .docm
  - .dotm
  - .xlsm
  - .xltm
  - .potm
  - .pptm
- TargetFilename|contains:
  - .docm:Zone
  - .dotm:Zone
  - .xlsm:Zone
  - .xltm:Zone
  - .potm:Zone
  - .pptm:Zone
selection_processes:
  Image|endswith:
  - \RuntimeBroker.exe
  - \outlook.exe
  - \thunderbird.exe
  - \brave.exe
  - \chrome.exe
  - \firefox.exe
  - \iexplore.exe
  - \maxthon.exe
  - \MicrosoftEdge.exe
  - \msedge.exe
  - \msedgewebview2.exe
  - \opera.exe
  - \safari.exe
  - \seamonkey.exe
  - \vivaldi.exe
  - \whale.exe
```

## MITRE ATT&CK
- T1566.001

## False Positives
- Legitimate macro files downloaded from the internet
- Legitimate macro files sent as attachments via emails

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1566.001/T1566.001.md
- https://learn.microsoft.com/en-us/deployoffice/compat/office-file-format-reference

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-01-23
- **Rule ID:** `0e29e3a7-1ad8-40aa-b691-9f82ecd33d66`
- **Source file:** `windows/file/file_event/file_event_win_office_macro_files_downloaded.yml`
