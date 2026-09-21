---
type: detection_rule
title: "Legitimate Application Dropped Archive"
rule_id: 654fcc6d-840d-4844-9b07-2c3300e54a26
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Legitimate Application Dropped Archive

## Description
Detects programs on a Windows system that should not write an archive to disk

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \winword.exe
  - \excel.exe
  - \powerpnt.exe
  - \msaccess.exe
  - \mspub.exe
  - \eqnedt32.exe
  - \visio.exe
  - \wordpad.exe
  - \wordview.exe
  - \certutil.exe
  - \certoc.exe
  - \CertReq.exe
  - \Desktopimgdownldr.exe
  - \esentutl.exe
  - \finger.exe
  - \notepad.exe
  - \AcroRd32.exe
  - \RdrCEF.exe
  - \mshta.exe
  - \hh.exe
  TargetFilename|endswith:
  - .zip
  - .rar
  - .7z
  - .diagcab
  - .appx
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/Neo23x0/sysmon-config/blob/3f808d9c022c507aae21a9346afba4a59dd533b9/sysmonconfig-export-block.xml#L1326

## Metadata
- **Author:** frack113, Florian Roth
- **Date:** 2022-08-21
- **Rule ID:** `654fcc6d-840d-4844-9b07-2c3300e54a26`
- **Source file:** `windows/file/file_event/file_event_win_susp_legitimate_app_dropping_archive.yml`
