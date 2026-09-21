---
type: detection_rule
title: "Obfuscated IP Download Activity"
rule_id: cb5a2333-56cf-4562-8fcb-22ba1bca728d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Obfuscated IP Download Activity

## Description
Detects use of an encoded/obfuscated version of an IP address (hex, octal...) in an URL combined with a download command

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_command and 1 of selection_ip_* and not 1 of filter_main_*
filter_main_valid_ip:
  CommandLine|re: https?://(?:(?:25[0-5]|(?:2[0-4]|1\d|[1-9])?\d)(?:\.|\b)){4}
selection_command:
  CommandLine|contains:
  - Invoke-WebRequest
  - 'iwr '
  - Invoke-RestMethod
  - 'irm '
  - 'wget '
  - 'curl '
  - DownloadFile
  - DownloadString
selection_ip_1:
  CommandLine|contains:
  - ' 0x'
  - //0x
  - .0x
  - .00x
selection_ip_2:
  CommandLine|contains|all:
  - http://%
  - '%2e'
selection_ip_3:
- CommandLine|re: https?://[0-9]{1,3}\.[0-9]{1,3}\.0[0-9]{3,4}
- CommandLine|re: https?://[0-9]{1,3}\.0[0-9]{3,7}
- CommandLine|re: https?://0[0-9]{3,11}
- CommandLine|re: https?://(?:0[0-9]{1,11}\.){3}0[0-9]{1,11}
- CommandLine|re: https?://0[0-9]{1,11}
- CommandLine|re: ' [0-7]{7,13}'
```

## False Positives
- Unknown

## References
- https://h.43z.one/ipconverter/
- https://twitter.com/Yasser_Elsnbary/status/1553804135354564608
- https://twitter.com/fr0s7_/status/1712780207105404948

## Metadata
- **Author:** Florian Roth (Nextron Systems), X__Junior (Nextron Systems)
- **Date:** 2022-08-03
- **Rule ID:** `cb5a2333-56cf-4562-8fcb-22ba1bca728d`
- **Source file:** `windows/process_creation/proc_creation_win_susp_obfuscated_ip_download.yml`
