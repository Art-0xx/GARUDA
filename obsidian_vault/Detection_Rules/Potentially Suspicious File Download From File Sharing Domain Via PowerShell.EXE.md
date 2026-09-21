---
type: detection_rule
title: "Potentially Suspicious File Download From File Sharing Domain Via PowerShell.EXE"
rule_id: b6e04788-29e1-4557-bb14-77f761848ab8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious File Download From File Sharing Domain Via PowerShell.EXE

## Description
Detects potentially suspicious file downloads from file sharing domains using PowerShell.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_download:
  CommandLine|contains:
  - .DownloadString(
  - .DownloadFile(
  - 'Invoke-WebRequest '
  - 'iwr '
  - 'wget '
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_websites:
  CommandLine|contains:
  - 0x0.st
  - anonfiles.com
  - bashupload.com
  - cdn.discordapp.com
  - chunk.io
  - ddns.net
  - dl.dropboxusercontent.com
  - ghostbin.co
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
- https://www.huntress.com/blog/slashandgrab-screen-connect-post-exploitation-in-the-wild-cve-2024-1709-cve-2024-1708

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-02-23
- **Rule ID:** `b6e04788-29e1-4557-bb14-77f761848ab8`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_download_susp_file_sharing_domains.yml`
