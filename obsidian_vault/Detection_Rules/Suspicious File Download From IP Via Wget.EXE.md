---
type: detection_rule
title: "Suspicious File Download From IP Via Wget.EXE"
rule_id: 17f0c0a8-8bd5-4ee0-8c5f-a342c0199f35
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Download From IP Via Wget.EXE

## Description
Detects potentially suspicious file downloads directly from IP addresses using Wget.exe

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
selection_ip:
  CommandLine|re: ://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}
```

## False Positives
- Unknown

## References
- https://www.gnu.org/software/wget/manual/wget.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-27
- **Rule ID:** `17f0c0a8-8bd5-4ee0-8c5f-a342c0199f35`
- **Source file:** `windows/process_creation/proc_creation_win_wget_download_direct_ip.yml`
