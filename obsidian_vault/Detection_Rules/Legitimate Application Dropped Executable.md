---
type: detection_rule
title: "Legitimate Application Dropped Executable"
rule_id: f0540f7e-2db3-4432-b9e0-3965486744bc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Legitimate Application Dropped Executable

## Description
Detects LOLBINs and applications that should not legitimately drop executable or executable-equivalent files to disk.
This may indicate malware staging, process injection, or abuse of a trusted binary for payload delivery.

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
  - .com
  - .dll
  - .exe
  - .jar
  - .ocx
  - .pyc
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
- **Rule ID:** `f0540f7e-2db3-4432-b9e0-3965486744bc`
- **Source file:** `windows/file/file_event/file_event_win_susp_legitimate_app_dropping_exe.yml`
