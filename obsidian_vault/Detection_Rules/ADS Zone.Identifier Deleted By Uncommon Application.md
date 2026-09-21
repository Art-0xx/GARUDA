---
type: detection_rule
title: "ADS Zone.Identifier Deleted By Uncommon Application"
rule_id: 3109530e-ab47-4cc6-a953-cac5ebcc93ae
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.004]
---

# ADS Zone.Identifier Deleted By Uncommon Application

## Description
Detects the deletion of the "Zone.Identifier" ADS by an uncommon process. Attackers can leverage this in order to bypass security restrictions that make use of the ADS such as Microsoft Office apps.

## Log Source
```yaml
category: file_delete
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  Image:
  - C:\Program Files\PowerShell\7-preview\pwsh.exe
  - C:\Program Files\PowerShell\7\pwsh.exe
  - C:\Windows\explorer.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
  - C:\Windows\SysWOW64\explorer.exe
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
filter_optional_browsers_chrome:
  Image:
  - C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
  - C:\Program Files\Google\Chrome\Application\chrome.exe
filter_optional_browsers_firefox:
  Image:
  - C:\Program Files (x86)\Mozilla Firefox\firefox.exe
  - C:\Program Files\Mozilla Firefox\firefox.exe
filter_optional_browsers_msedge:
  Image:
  - C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
  - C:\Program Files\Microsoft\Edge\Application\msedge.exe
selection:
  TargetFilename|endswith: :Zone.Identifier
```

## MITRE ATT&CK
- T1070.004

## False Positives
- Other third party applications not listed.

## References
- https://securityliterate.com/how-malware-abuses-the-zone-identifier-to-circumvent-detection-and-analysis/
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-04
- **Rule ID:** `3109530e-ab47-4cc6-a953-cac5ebcc93ae`
- **Source file:** `windows/file/file_delete/file_delete_win_zone_identifier_ads_uncommon.yml`
