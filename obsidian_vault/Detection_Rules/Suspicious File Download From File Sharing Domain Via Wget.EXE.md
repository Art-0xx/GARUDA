---
type: detection_rule
title: "Suspicious File Download From File Sharing Domain Via Wget.EXE"
rule_id: a0d7e4d2-bede-4141-8896-bc6e237e977c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Download From File Sharing Domain Via Wget.EXE

## Description
Detects potentially suspicious file downloads from file sharing domains using wget.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_ext:
  CommandLine|endswith:
  - .ps1
  - .ps1'
  - .ps1"
  - .dat
  - .dat'
  - .dat"
  - .msi
  - .msi'
  - .msi"
  - .bat
  - .bat'
  - .bat"
  - .exe
  - .exe'
  - .exe"
  - .vbs
  - .vbs'
  - .vbs"
  - .vbe
  - .vbe'
  - .vbe"
  - .hta
  - .hta'
  - .hta"
  - .dll
  - .dll'
  - .dll"
  - .psm1
  - .psm1'
  - .psm1"
selection_flag:
- CommandLine|re: \s-O\s
- CommandLine|contains: --output-document
selection_http:
  CommandLine|contains: http
selection_img:
- Image|endswith: \wget.exe
- OriginalFileName: wget.exe
selection_websites:
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
```

## False Positives
- Unknown

## References
- https://labs.withsecure.com/publications/fin7-target-veeam-servers
- https://github.com/WithSecureLabs/iocs/blob/344203de742bb7e68bd56618f66d34be95a9f9fc/FIN7VEEAM/iocs.csv
- https://www.microsoft.com/en-us/security/blog/2024/01/17/new-ttps-observed-in-mint-sandstorm-campaign-targeting-high-profile-individuals-at-universities-and-research-orgs/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-05
- **Rule ID:** `a0d7e4d2-bede-4141-8896-bc6e237e977c`
- **Source file:** `windows/process_creation/proc_creation_win_wget_download_susp_file_sharing_domains.yml`
