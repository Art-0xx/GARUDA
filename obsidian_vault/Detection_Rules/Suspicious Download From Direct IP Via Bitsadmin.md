---
type: detection_rule
title: "Suspicious Download From Direct IP Via Bitsadmin"
rule_id: 99c840f2-2012-46fd-9141-c761987550ef
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197, attack.t1036.003]
---

# Suspicious Download From Direct IP Via Bitsadmin

## Description
Detects usage of bitsadmin downloading a file using an URL that contains an IP

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_seven_zip:
  CommandLine|contains: ://7-
selection_extension:
  CommandLine|contains:
  - ://1
  - ://2
  - ://3
  - ://4
  - ://5
  - ://6
  - ://7
  - ://8
  - ://9
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

## False Positives
- Unknown

## References
- https://blog.netspi.com/15-ways-to-download-a-file/#bitsadmin
- https://isc.sans.edu/diary/22264
- https://lolbas-project.github.io/lolbas/Binaries/Bitsadmin/
- https://blog.talosintelligence.com/breaking-the-silence-recent-truebot-activity/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `99c840f2-2012-46fd-9141-c761987550ef`
- **Source file:** `windows/process_creation/proc_creation_win_bitsadmin_download_direct_ip.yml`
