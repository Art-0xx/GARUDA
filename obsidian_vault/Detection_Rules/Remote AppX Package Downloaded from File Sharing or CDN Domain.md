---
type: detection_rule
title: "Remote AppX Package Downloaded from File Sharing or CDN Domain"
rule_id: 8b48ad89-10d8-4382-a546-50588c410f0d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Remote AppX Package Downloaded from File Sharing or CDN Domain

## Description
Detects an appx package that was added to the pipeline of the "to be processed" packages which was downloaded from a file sharing or CDN domain.

## Log Source
```yaml
product: windows
service: appxdeployment-server
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 854
  Path|contains:
  - .githubusercontent.com
  - 0x0.st
  - anonfiles.com
  - bashupload.com
  - cdn.discordapp.com
  - chunk.io
  - ddns.net
  - dl.dropboxusercontent.com
  - ghostbin.co
  - github.com
  - glitch.me
  - gofile.io
  - hastebin.com
  - mediafire.com
  - mega.nz
  - onrender.com
  - pages.dev
  - paste.ee
  - pastebin.com
  - pastebin.pl
  - pastetext.net
  - privatlab.com
  - privatlab.net
  - send.exploit.in
  - sendspace.com
  - storage.googleapis.com
  - storjshare.io
  - supabase.co
  - temp.sh
  - transfer.sh
  - trycloudflare.com
  - ufile.io
  - w3spaces.com
  - workers.dev
  - x0.at
```

## False Positives
- Unlikely, unless the organization uses file sharing or CDN services to distribute internal applications.

## References
- https://www.sentinelone.com/labs/inside-malicious-windows-apps-for-malware-deployment/
- https://learn.microsoft.com/en-us/windows/win32/appxpkg/troubleshooting
- https://news.sophos.com/en-us/2021/11/11/bazarloader-call-me-back-attack-abuses-windows-10-apps-mechanism/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-11
- **Rule ID:** `8b48ad89-10d8-4382-a546-50588c410f0d`
- **Source file:** `windows/builtin/appxdeployment_server/win_appxdeployment_server_appx_downloaded_from_file_sharing_domains.yml`
