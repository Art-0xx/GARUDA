---
type: detection_rule
title: "Nslookup PowerShell Download Cradle - ProcessCreation"
rule_id: 1b3b01c7-84e9-4072-86e5-fc285a41ff23
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Nslookup PowerShell Download Cradle - ProcessCreation

## Description
Detects suspicious powershell download cradle using nslookup. This cradle uses nslookup to extract payloads from DNS records

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains:
  - ' -q=txt '
  - ' -querytype=txt '
  ParentImage|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_img:
- Image|contains: \nslookup.exe
- OriginalFileName: \nslookup.exe
```

## False Positives
- Unknown

## References
- https://twitter.com/Alh4zr3d/status/1566489367232651264

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-05
- **Rule ID:** `1b3b01c7-84e9-4072-86e5-fc285a41ff23`
- **Source file:** `windows/process_creation/proc_creation_win_nslookup_poweshell_download.yml`
