---
type: detection_rule
title: "Network Communication Initiated To File Sharing Domains From Process Located In Suspicious Folder"
rule_id: e0f8ab85-0ac9-423b-a73a-81b3c7b1aa97
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Network Communication Initiated To File Sharing Domains From Process Located In Suspicious Folder

## Description
Detects executables located in potentially suspicious directories initiating network connections towards file sharing domains.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_domains:
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
  Initiated: 'true'
selection_paths:
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
  - :\Windows\Temp\
  - \AppData\Temp\
  - \config\systemprofile\
  - \Windows\addins\
```

## MITRE ATT&CK
- T1105

## False Positives
- Some installers located in the temp directory might communicate with the Github domains in order to download additional software. Baseline these cases or move the github domain to a lower level hunting rule.

## References
- https://twitter.com/M_haggis/status/900741347035889665
- https://twitter.com/M_haggis/status/1032799638213066752
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker
- https://www.cisa.gov/uscert/ncas/alerts/aa22-321a
- https://github.com/EmpireProject/Empire/blob/e37fb2eef8ff8f5a0a689f1589f424906fe13055/data/module_source/exfil/Invoke-ExfilDataToGitHub.ps1

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2018-08-30
- **Rule ID:** `e0f8ab85-0ac9-423b-a73a-81b3c7b1aa97`
- **Source file:** `windows/network_connection/net_connection_win_susp_file_sharing_domains_susp_folders.yml`
