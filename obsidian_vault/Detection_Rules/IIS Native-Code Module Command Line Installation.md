---
type: detection_rule
title: "IIS Native-Code Module Command Line Installation"
rule_id: 9465ddf4-f9e4-4ebd-8d98-702df3a93239
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003]
---

# IIS Native-Code Module Command Line Installation

## Description
Detects suspicious IIS native-code module installations via command line

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_iis_setup:
  ParentImage: C:\Windows\System32\inetsrv\iissetup.exe
selection_cli:
  CommandLine|contains|all:
  - install
  - module
  CommandLine|contains|windash: '-name:'
selection_img:
- Image|endswith: \appcmd.exe
- OriginalFileName: appcmd.exe
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Unknown as it may vary from organisation to organisation how admins use to install IIS modules

## References
- https://researchcenter.paloaltonetworks.com/2018/01/unit42-oilrig-uses-rgdoor-iis-backdoor-targets-middle-east/
- https://www.microsoft.com/security/blog/2022/07/26/malicious-iis-extensions-quietly-open-persistent-backdoors-into-servers/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-12-11
- **Rule ID:** `9465ddf4-f9e4-4ebd-8d98-702df3a93239`
- **Source file:** `windows/process_creation/proc_creation_win_iis_appcmd_susp_module_install.yml`
