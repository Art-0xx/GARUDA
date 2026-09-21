---
type: detection_rule
title: "Suspicious Download From File-Sharing Website Via Bitsadmin"
rule_id: 8518ed3d-f7c9-4601-a26c-f361a4256a0c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197, attack.t1036.003, attack.t1105]
---

# Suspicious Download From File-Sharing Website Via Bitsadmin

## Description
Detects usage of bitsadmin downloading a file from a suspicious domain

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_domain:
  CommandLine|contains:
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
selection_flags:
  CommandLine|contains:
  - ' /transfer '
  - ' /create '
  - ' /addfile '
selection_img:
- Image|endswith: \bitsadmin.exe
- OriginalFileName: bitsadmin.exe
```

## MITRE ATT&CK
- T1197
- T1036.003
- T1105

## False Positives
- Some legitimate apps use this, but limited.

## References
- https://blog.netspi.com/15-ways-to-download-a-file/#bitsadmin
- https://isc.sans.edu/diary/22264
- https://lolbas-project.github.io/lolbas/Binaries/Bitsadmin/
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker
- https://www.cisa.gov/uscert/ncas/alerts/aa22-321a

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `8518ed3d-f7c9-4601-a26c-f361a4256a0c`
- **Source file:** `windows/process_creation/proc_creation_win_bitsadmin_download_file_sharing_domains.yml`
