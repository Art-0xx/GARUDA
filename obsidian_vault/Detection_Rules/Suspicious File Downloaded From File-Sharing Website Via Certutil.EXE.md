---
type: detection_rule
title: "Suspicious File Downloaded From File-Sharing Website Via Certutil.EXE"
rule_id: 42a5f1e7-9603-4f6d-97ae-3f37d130d794
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1105]
---

# Suspicious File Downloaded From File-Sharing Website Via Certutil.EXE

## Description
Detects the execution of certutil with certain flags that allow the utility to download files from file-sharing websites.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flags:
  CommandLine|contains:
  - 'urlcache '
  - 'verifyctl '
  - 'URL '
selection_http:
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
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1027
- T1105

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/certutil
- https://forensicitguy.github.io/agenttesla-vba-certutil-download/
- https://news.sophos.com/en-us/2021/04/13/compromised-exchange-server-hosting-cryptojacker-targeting-other-exchange-servers/
- https://twitter.com/egre55/status/1087685529016193025
- https://lolbas-project.github.io/lolbas/Binaries/Certutil/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-15
- **Rule ID:** `42a5f1e7-9603-4f6d-97ae-3f37d130d794`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_download_file_sharing_domains.yml`
