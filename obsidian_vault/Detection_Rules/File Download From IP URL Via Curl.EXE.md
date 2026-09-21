---
type: detection_rule
title: "File Download From IP URL Via Curl.EXE"
rule_id: 9cc85849-3b02-4cb5-b371-3a1ff54f2218
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# File Download From IP URL Via Curl.EXE

## Description
Detects file downloads directly from IP address URL using curl.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_ext:
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
- **Date:** 2023-10-18
- **Rule ID:** `9cc85849-3b02-4cb5-b371-3a1ff54f2218`
- **Source file:** `windows/process_creation/proc_creation_win_curl_download_direct_ip_exec.yml`
