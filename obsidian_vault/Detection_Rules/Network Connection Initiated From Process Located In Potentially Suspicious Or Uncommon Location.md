---
type: detection_rule
title: "Network Connection Initiated From Process Located In Potentially Suspicious Or Uncommon Location"
rule_id: 7b434893-c57d-4f41-908d-6a17bf1ae98f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Network Connection Initiated From Process Located In Potentially Suspicious Or Uncommon Location

## Description
Detects a network connection initiated by programs or processes running from suspicious or uncommon files system locations.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_domains:
  DestinationHostname|endswith:
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
  - mega.co.nz
  - mega.nz
  - onrender.com
  - pages.dev
  - paste.ee
  - pastebin.com
  - pastebin.pl
  - pastetext.net
  - portmap.io
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
selection:
  Image|contains:
  - :\$Recycle.bin
  - :\Perflogs\
  - :\Temp\
  - :\Users\Default\
  - :\Users\Public\
  - :\Windows\Fonts\
  - :\Windows\IME\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
  - \config\systemprofile\
  - \Contacts\
  - \Favorites\
  - \Favourites\
  - \Music\
  - \Pictures\
  - \Videos\
  - \Windows\addins\
  Initiated: 'true'
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://docs.google.com/spreadsheets/d/17pSTDNpa0sf6pHeRhusvWG6rThciE8CsXTSlDUAZDyo

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2017-03-19
- **Rule ID:** `7b434893-c57d-4f41-908d-6a17bf1ae98f`
- **Source file:** `windows/network_connection/net_connection_win_susp_initiated_uncommon_or_suspicious_locations.yml`
