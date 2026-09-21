---
type: detection_rule
title: "File Download Via Bitsadmin"
rule_id: d059842b-6b9d-4ed1-b5c3-5b89143c6ede
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197, attack.t1036.003, attack.t1105]
---

# File Download Via Bitsadmin

## Description
Detects usage of bitsadmin downloading a file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and (selection_cmd or all of selection_cli_*)
selection_cli_1:
  CommandLine|contains:
  - ' /create '
  - ' /addfile '
selection_cli_2:
  CommandLine|contains: http
selection_cmd:
  CommandLine|contains: ' /transfer '
selection_img:
- Image|endswith: \bitsadmin.exe
- OriginalFileName: bitsadmin.exe
```

## MITRE ATT&CK
- T1197
- T1036.003
- T1105

## False Positives
- Some legitimate apps use this, but limited.

## References
- https://blog.netspi.com/15-ways-to-download-a-file/#bitsadmin
- https://isc.sans.edu/diary/22264
- https://lolbas-project.github.io/lolbas/Binaries/Bitsadmin/

## Metadata
- **Author:** Michael Haag, FPT.EagleEye
- **Date:** 2017-03-09
- **Rule ID:** `d059842b-6b9d-4ed1-b5c3-5b89143c6ede`
- **Source file:** `windows/process_creation/proc_creation_win_bitsadmin_download.yml`
