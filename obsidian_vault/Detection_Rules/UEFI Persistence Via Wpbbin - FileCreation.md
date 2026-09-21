---
type: detection_rule
title: "UEFI Persistence Via Wpbbin - FileCreation"
rule_id: e94b9ddc-eec5-4bb8-8a58-b9dc5f4e185f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1542.001]
---

# UEFI Persistence Via Wpbbin - FileCreation

## Description
Detects creation of a file named "wpbbin" in the "%systemroot%\system32\" directory. Which could be indicative of UEFI based persistence method

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename: C:\Windows\System32\wpbbin.exe
```

## MITRE ATT&CK
- T1542.001

## False Positives
- Legitimate usage of the file by hardware manufacturer such as lenovo (Thanks @0gtweet for the tip)

## References
- https://grzegorztworek.medium.com/using-uefi-to-inject-executable-files-into-bitlocker-protected-drives-8ff4ca59c94c
- https://persistence-info.github.io/Data/wpbbin.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-18
- **Rule ID:** `e94b9ddc-eec5-4bb8-8a58-b9dc5f4e185f`
- **Source file:** `windows/file/file_event/file_event_win_wpbbin_persistence.yml`
