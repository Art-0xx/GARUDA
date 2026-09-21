---
type: detection_rule
title: "Suspicious Download from Office Domain"
rule_id: 00d49ed5-4491-4271-a8db-650a4ef6f8c1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105, attack.t1608]
---

# Suspicious Download from Office Domain

## Description
Detects suspicious ways to download files from Microsoft domains that are used to store attachments in Emails or OneNote documents

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_domains:
  CommandLine|contains:
  - https://attachment.outlook.live.net/owa/
  - https://onenoteonlinesync.onenote.com/onenoteonlinesync/
selection_download:
- Image|endswith:
  - \curl.exe
  - \wget.exe
- CommandLine|contains:
  - Invoke-WebRequest
  - 'iwr '
  - 'curl '
  - 'wget '
  - Start-BitsTransfer
  - .DownloadFile(
  - .DownloadString(
```

## MITRE ATT&CK
- T1105
- T1608

## False Positives
- Scripts or tools that download attachments from these domains (OneNote, Outlook 365)

## References
- https://twitter.com/an0n_r0/status/1474698356635193346?s=12
- https://twitter.com/mrd0x/status/1475085452784844803?s=12

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-27
- **Rule ID:** `00d49ed5-4491-4271-a8db-650a4ef6f8c1`
- **Source file:** `windows/process_creation/proc_creation_win_susp_download_office_domain.yml`
