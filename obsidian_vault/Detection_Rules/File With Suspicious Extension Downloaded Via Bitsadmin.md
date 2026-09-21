---
type: detection_rule
title: "File With Suspicious Extension Downloaded Via Bitsadmin"
rule_id: 5b80a791-ad9b-4b75-bcc1-ad4e1e89c200
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197, attack.t1036.003, attack.t1105]
---

# File With Suspicious Extension Downloaded Via Bitsadmin

## Description
Detects usage of bitsadmin downloading a file with a suspicious extension

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_extension:
  CommandLine|contains:
  - .7z
  - .asax
  - .ashx
  - .asmx
  - .asp
  - .aspx
  - .bat
  - .cfm
  - .cgi
  - .chm
  - .cmd
  - .dll
  - .gif
  - .jpeg
  - .jpg
  - .jsp
  - .jspx
  - .log
  - .png
  - .ps1
  - .psm1
  - .rar
  - .scf
  - .sct
  - .txt
  - .vbe
  - .vbs
  - .war
  - .wsf
  - .wsh
  - .xll
  - .zip
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
- Unknown

## References
- https://blog.netspi.com/15-ways-to-download-a-file/#bitsadmin
- https://isc.sans.edu/diary/22264
- https://lolbas-project.github.io/lolbas/Binaries/Bitsadmin/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `5b80a791-ad9b-4b75-bcc1-ad4e1e89c200`
- **Source file:** `windows/process_creation/proc_creation_win_bitsadmin_download_susp_extensions.yml`
