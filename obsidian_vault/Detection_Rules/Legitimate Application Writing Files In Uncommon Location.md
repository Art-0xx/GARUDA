---
type: detection_rule
title: "Legitimate Application Writing Files In Uncommon Location"
rule_id: 1cf465a1-2609-4c15-9b66-c32dbe4bfd67
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1105]
---

# Legitimate Application Writing Files In Uncommon Location

## Description
Detects legitimate applications writing any type of file to uncommon or suspicious locations that are not typical for application data storage or execution.
Adversaries may leverage legitimate applications (Living off the Land Binaries - LOLBins) to drop or download malicious files to uncommon locations on the system to evade detection by security solutions.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
  Image|endswith:
  - \eqnedt32.exe
  - \wordpad.exe
  - \wordview.exe
  - \cmdl32.exe
  - \certutil.exe
  - \certoc.exe
  - \CertReq.exe
  - \bitsadmin.exe
  - \Desktopimgdownldr.exe
  - \esentutl.exe
  - \expand.exe
  - \extrac32.exe
  - \replace.exe
  - \mshta.exe
  - \ftp.exe
  - \Ldifde.exe
  - \RdrCEF.exe
  - \hh.exe
  - \finger.exe
  - \findstr.exe
selection_locations:
  TargetFilename|contains:
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
```

## MITRE ATT&CK
- T1218
- T1105

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/#/download

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-10
- **Rule ID:** `1cf465a1-2609-4c15-9b66-c32dbe4bfd67`
- **Source file:** `windows/file/file_event/file_event_win_susp_legitimate_app_dropping_in_uncommon_location.yml`
