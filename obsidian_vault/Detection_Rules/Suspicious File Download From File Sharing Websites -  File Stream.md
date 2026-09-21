---
type: detection_rule
title: "Suspicious File Download From File Sharing Websites -  File Stream"
rule_id: 52182dfb-afb7-41db-b4bc-5336cb29b464
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Suspicious File Download From File Sharing Websites -  File Stream

## Description
Detects the download of suspicious file type from a well-known file and paste sharing domain

## Log Source
```yaml
category: create_stream_hash
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_domain:
  Contents|contains:
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
  - pixeldrain.com
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
selection_extension:
  TargetFilename|contains:
  - .cpl:Zone
  - .dll:Zone
  - .exe:Zone
  - .hta:Zone
  - .lnk:Zone
  - .one:Zone
  - .vbe:Zone
  - .vbs:Zone
  - .xll:Zone
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Some false positives might occur with binaries download via Github

## References
- https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=90015
- https://www.cisa.gov/uscert/ncas/alerts/aa22-321a
- https://fabian-voith.de/2020/06/25/sysmon-v11-1-reads-alternate-data-streams/
- https://www.microsoft.com/en-us/security/blog/2024/01/17/new-ttps-observed-in-mint-sandstorm-campaign-targeting-high-profile-individuals-at-universities-and-research-orgs/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-24
- **Rule ID:** `52182dfb-afb7-41db-b4bc-5336cb29b464`
- **Source file:** `windows/create_stream_hash/create_stream_hash_file_sharing_domains_download_susp_extension.yml`
