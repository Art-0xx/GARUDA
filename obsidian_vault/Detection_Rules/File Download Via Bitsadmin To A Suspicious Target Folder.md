---
type: detection_rule
title: "File Download Via Bitsadmin To A Suspicious Target Folder"
rule_id: 2ddef153-167b-4e89-86b6-757a9e65dcac
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197, attack.t1036.003, attack.t1105]
---

# File Download Via Bitsadmin To A Suspicious Target Folder

## Description
Detects usage of bitsadmin downloading a file to a suspicious target folder

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
  - ' /transfer '
  - ' /create '
  - ' /addfile '
selection_folder:
  CommandLine|contains:
  - :\Perflogs
  - :\ProgramData\
  - :\Temp\
  - :\Users\Public\
  - :\Windows\
  - \$Recycle.Bin\
  - \AppData\Local\
  - \AppData\Roaming\
  - \Contacts\
  - \Desktop\
  - \Favorites\
  - \Favourites\
  - \inetpub\wwwroot\
  - \Music\
  - \Pictures\
  - \Start Menu\Programs\Startup\
  - \Users\Default\
  - \Videos\
  - '%ProgramData%'
  - '%public%'
  - '%temp%'
  - '%tmp%'
selection_img:
- Image|endswith: \bitsadmin.exe
- OriginalFileName: bitsadmin.exe
```

## MITRE ATT&CK
- T1197
- T1036.003
- T1105

## False Positives
- Unknown

## References
- https://blog.netspi.com/15-ways-to-download-a-file/#bitsadmin
- https://isc.sans.edu/diary/22264
- https://lolbas-project.github.io/lolbas/Binaries/Bitsadmin/
- https://blog.talosintelligence.com/breaking-the-silence-recent-truebot-activity/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `2ddef153-167b-4e89-86b6-757a9e65dcac`
- **Source file:** `windows/process_creation/proc_creation_win_bitsadmin_download_susp_targetfolder.yml`
