---
type: detection_rule
title: "Arbitrary File Download Via ConfigSecurityPolicy.EXE"
rule_id: 1f0f6176-6482-4027-b151-00071af39d7e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567]
---

# Arbitrary File Download Via ConfigSecurityPolicy.EXE

## Description
Detects the execution of "ConfigSecurityPolicy.EXE", a binary part of Windows Defender used to manage settings in Windows Defender.
Users can configure different pilot collections for each of the co-management workloads.
It can be abused by attackers in order to upload or download files.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- CommandLine|contains: ConfigSecurityPolicy.exe
- Image|endswith: \ConfigSecurityPolicy.exe
- OriginalFileName: ConfigSecurityPolicy.exe
selection_url:
  CommandLine|contains:
  - ftp://
  - http://
  - https://
```

## MITRE ATT&CK
- T1567

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/ConfigSecurityPolicy/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-26
- **Rule ID:** `1f0f6176-6482-4027-b151-00071af39d7e`
- **Source file:** `windows/process_creation/proc_creation_win_configsecuritypolicy_download_file.yml`
