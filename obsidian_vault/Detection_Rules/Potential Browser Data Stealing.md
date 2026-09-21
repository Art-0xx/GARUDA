---
type: detection_rule
title: "Potential Browser Data Stealing"
rule_id: 47147b5b-9e17-4d76-b8d2-7bac24c5ce1b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555.003]
---

# Potential Browser Data Stealing

## Description
Adversaries may acquire credentials from web browsers by reading files specific to the target browser.
Web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future.
Web browsers typically store the credentials in an encrypted format within a credential store.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
- CommandLine|contains:
  - copy-item
  - 'copy '
  - 'cpi '
  - ' cp '
  - 'move '
  - move-item
  - ' mi '
  - ' mv '
- Image|endswith:
  - \esentutl.exe
  - \xcopy.exe
  - \robocopy.exe
- OriginalFileName:
  - esentutl.exe
  - XCOPY.EXE
  - robocopy.exe
selection_path:
  CommandLine|contains:
  - \Amigo\User Data
  - \BraveSoftware\Brave-Browser\User Data
  - \CentBrowser\User Data
  - \Chromium\User Data
  - \CocCoc\Browser\User Data
  - \Comodo\Dragon\User Data
  - \Elements Browser\User Data
  - \Epic Privacy Browser\User Data
  - \Google\Chrome Beta\User Data
  - \Google\Chrome SxS\User Data
  - \Google\Chrome\User Data\
  - \Kometa\User Data
  - \Maxthon5\Users
  - \Microsoft\Edge\User Data
  - \Mozilla\Firefox\Profiles
  - \Nichrome\User Data
  - \Opera Software\Opera GX Stable\
  - \Opera Software\Opera Neon\User Data
  - \Opera Software\Opera Stable\
  - \Orbitum\User Data
  - \QIP Surf\User Data
  - \Sputnik\User Data
  - \Torch\User Data
  - \uCozMedia\Uran\User Data
  - \Vivaldi\User Data
```

## MITRE ATT&CK
- T1555.003

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1555.003/T1555.003.md
- https://www.cisa.gov/sites/default/files/2024-04/aa24-109a-stopransomware-akira-ransomware_2.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-23
- **Rule ID:** `47147b5b-9e17-4d76-b8d2-7bac24c5ce1b`
- **Source file:** `windows/process_creation/proc_creation_win_susp_copy_browser_data.yml`
