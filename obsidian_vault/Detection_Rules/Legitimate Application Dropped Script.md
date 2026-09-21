---
type: detection_rule
title: "Legitimate Application Dropped Script"
rule_id: 7d604714-e071-49ff-8726-edeb95a70679
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Legitimate Application Dropped Script

## Description
Detects LOLBINs and applications that should not legitimately drop script files to disk.
This may indicate malware staging or abuse of a trusted binary for script-based code execution.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_mshta:
  Image|endswith: \mshta.exe
  TargetFilename|endswith: .hta
selection:
  Image|endswith:
  - \eqnedt32.exe
  - \wordpad.exe
  - \wordview.exe
  - \certutil.exe
  - \certoc.exe
  - \CertReq.exe
  - \Desktopimgdownldr.exe
  - \esentutl.exe
  - \mshta.exe
  - \AcroRd32.exe
  - \RdrCEF.exe
  - \hh.exe
  - \finger.exe
  TargetFilename|endswith:
  - .bat
  - .chm
  - .csproj
  - .hta
  - .js
  - .jse
  - .proj
  - .ps1
  - .py
  - .scf
  - .vbe
  - .vbs
  - .wsf
  - .wsh
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/Neo23x0/sysmon-config/blob/3f808d9c022c507aae21a9346afba4a59dd533b9/sysmonconfig-export-block.xml#L1326
- https://dmpdump.github.io/posts/TelegramRat/
- https://www.virustotal.com/gui/file/a0d5b30578acd1df9139e7a8a4bfc659dc2cf48f4dc0c5804b70890adeb9fa21/behavior

## Metadata
- **Author:** frack113, Florian Roth (Nextron Systems)
- **Date:** 2022-08-21
- **Rule ID:** `7d604714-e071-49ff-8726-edeb95a70679`
- **Source file:** `windows/file/file_event/file_event_win_susp_legitimate_app_dropping_script.yml`
