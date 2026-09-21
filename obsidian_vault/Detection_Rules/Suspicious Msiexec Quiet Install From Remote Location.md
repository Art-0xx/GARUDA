---
type: detection_rule
title: "Suspicious Msiexec Quiet Install From Remote Location"
rule_id: 8150732a-0c9d-4a99-82b9-9efb9b90c40c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007]
---

# Suspicious Msiexec Quiet Install From Remote Location

## Description
Detects usage of Msiexec.exe to install packages hosted remotely quietly

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_openoffice:
  CommandLine|contains|all:
  - \AppData\Local\Temp\OpenOffice
  - Installation Files\openoffice
selection_cli:
  CommandLine|contains|windash:
  - -i
  - -package
  - -a
  - -j
selection_img:
- Image|endswith: \msiexec.exe
- OriginalFileName: msiexec.exe
selection_quiet:
  CommandLine|contains|windash: -q
selection_remote:
  CommandLine|contains:
  - http
  - \\\\
```

## MITRE ATT&CK
- T1218.007

## False Positives
- Unknown

## References
- https://www.microsoft.com/en-us/security/blog/2022/10/27/raspberry-robin-worm-part-of-larger-ecosystem-facilitating-pre-ransomware-activity/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-28
- **Rule ID:** `8150732a-0c9d-4a99-82b9-9efb9b90c40c`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_install_remote.yml`
