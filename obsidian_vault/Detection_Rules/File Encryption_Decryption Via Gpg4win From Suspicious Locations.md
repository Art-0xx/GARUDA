---
type: detection_rule
title: "File Encryption/Decryption Via Gpg4win From Suspicious Locations"
rule_id: e1e0b7d7-e10b-4ee4-ac49-a4bda05d320d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# File Encryption/Decryption Via Gpg4win From Suspicious Locations

## Description
Detects usage of Gpg4win to encrypt/decrypt files located in potentially suspicious locations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: -passphrase
selection_metadata:
- Image|endswith:
  - \gpg.exe
  - \gpg2.exe
- Product: GNU Privacy Guard (GnuPG)
- Description: "GnuPG\u2019s OpenPGP tool"
selection_paths:
  CommandLine|contains:
  - :\PerfLogs\
  - :\Temp\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \AppData\Roaming\
```

## False Positives
- Unknown

## References
- https://blogs.vmware.com/security/2022/11/batloader-the-evasive-downloader-malware.html
- https://news.sophos.com/en-us/2022/01/19/zloader-installs-remote-access-backdoors-and-delivers-cobalt-strike/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), X__Junior (Nextron Systems)
- **Date:** 2022-11-30
- **Rule ID:** `e1e0b7d7-e10b-4ee4-ac49-a4bda05d320d`
- **Source file:** `windows/process_creation/proc_creation_win_gpg4win_susp_location.yml`
