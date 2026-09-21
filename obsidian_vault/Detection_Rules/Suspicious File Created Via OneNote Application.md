---
type: detection_rule
title: "Suspicious File Created Via OneNote Application"
rule_id: fcc6d700-68d9-4241-9a1a-06874d621b06
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Created Via OneNote Application

## Description
Detects suspicious files created via the OneNote application. This could indicate a potential malicious ".one"/".onepkg" file was executed as seen being used in malware activity in the wild

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
  - \onenote.exe
  - \onenotem.exe
  - \onenoteim.exe
  TargetFilename|contains: \AppData\Local\Temp\OneNote\
  TargetFilename|endswith:
  - .bat
  - .chm
  - .cmd
  - .dll
  - .exe
  - .hta
  - .htm
  - .html
  - .js
  - .lnk
  - .ps1
  - .vbe
  - .vbs
  - .wsf
```

## False Positives
- False positives should be very low with the extensions list cited. Especially if you don't heavily utilize OneNote.
- Occasional FPs might occur if OneNote is used internally to share different embedded documents

## References
- https://www.bleepingcomputer.com/news/security/hackers-now-use-microsoft-onenote-attachments-to-spread-malware/
- https://blog.osarmor.com/319/onenote-attachment-delivers-asyncrat-malware/
- https://twitter.com/MaD_c4t/status/1623414582382567424
- https://labs.withsecure.com/publications/detecting-onenote-abuse
- https://www.trustedsec.com/blog/new-attacks-old-tricks-how-onenote-malware-is-evolving/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-09
- **Rule ID:** `fcc6d700-68d9-4241-9a1a-06874d621b06`
- **Source file:** `windows/file/file_event/file_event_win_office_onenote_susp_dropped_files.yml`
