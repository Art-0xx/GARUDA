---
type: detection_rule
title: "Suspicious File Download From IP Via Curl.EXE"
rule_id: 5cb299fc-5fb1-4d07-b989-0644c68b6043
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Download From IP Via Curl.EXE

## Description
Detects potentially suspicious file downloads directly from IP addresses using curl.exe

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
  - .bat
  - .bat"
  - .dat
  - .dat"
  - .dll
  - .dll"
  - .exe
  - .exe"
  - .gif
  - .gif"
  - .hta
  - .hta"
  - .jpeg
  - .jpeg"
  - .log
  - .log"
  - .msi
  - .msi"
  - .png
  - .png"
  - .ps1
  - .ps1"
  - .psm1
  - .psm1"
  - .vbe
  - .vbe"
  - .vbs
  - .vbs"
  - .bat'
  - .dat'
  - .dll'
  - .exe'
  - .gif'
  - .hta'
  - .jpeg'
  - .log'
  - .msi'
  - .png'
  - .ps1'
  - .psm1'
  - .vbe'
  - .vbs'
selection_flag:
  CommandLine|contains:
  - ' -O'
  - --remote-name
  - --output
selection_http:
  CommandLine|contains: http
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
selection_ip:
  CommandLine|re: ://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}
```

## False Positives
- Unknown

## References
- https://labs.withsecure.com/publications/fin7-target-veeam-servers
- https://github.com/WithSecureLabs/iocs/blob/344203de742bb7e68bd56618f66d34be95a9f9fc/FIN7VEEAM/iocs.csv
- https://github.com/pr0xylife/IcedID/blob/8dd1e218460db4f750d955b4c65b2f918a1db906/icedID_09.28.2023.txt

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-27
- **Rule ID:** `5cb299fc-5fb1-4d07-b989-0644c68b6043`
- **Source file:** `windows/process_creation/proc_creation_win_curl_download_direct_ip_susp_extensions.yml`
