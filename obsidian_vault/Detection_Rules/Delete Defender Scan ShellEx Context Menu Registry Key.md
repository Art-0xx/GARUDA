---
type: detection_rule
title: "Delete Defender Scan ShellEx Context Menu Registry Key"
rule_id: 72a0369a-2576-4aaf-bfc9-6bb24a574ac6
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
---

# Delete Defender Scan ShellEx Context Menu Registry Key

## Description
Detects deletion of registry key that adds 'Scan with Defender' option in context menu. Attackers may use this to make it harder for users to scan files that are suspicious.

## Log Source
```yaml
category: registry_delete
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_defender:
  Image|endswith: \MsMpEng.exe
  Image|startswith:
  - C:\ProgramData\Microsoft\Windows Defender\Platform\
  - C:\Program Files\Windows Defender\
  - C:\Program Files (x86)\Windows Defender\
selection:
  TargetObject|contains: shellex\ContextMenuHandlers\EPP
```

## False Positives
- Unlikely as this weakens defenses and normally would not be done even if using another AV.

## References
- https://research.splunk.com/endpoint/395ed5fe-ad13-4366-9405-a228427bdd91/
- https://winaero.com/how-to-delete-scan-with-windows-defender-from-context-menu-in-windows-10/
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://blog.malwarebytes.com/malwarebytes-news/2021/02/lazyscripter-from-empire-to-double-rat/

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2025-07-11
- **Rule ID:** `72a0369a-2576-4aaf-bfc9-6bb24a574ac6`
- **Source file:** `windows/registry/registry_delete/registry_delete_defender_context_menu.yml`
