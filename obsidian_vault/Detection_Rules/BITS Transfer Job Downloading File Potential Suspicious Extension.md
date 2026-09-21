---
type: detection_rule
title: "BITS Transfer Job Downloading File Potential Suspicious Extension"
rule_id: b85e5894-9b19-4d86-8c87-a2f3b81f0521
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# BITS Transfer Job Downloading File Potential Suspicious Extension

## Description
Detects new BITS transfer job saving local files with potential suspicious extensions

## Log Source
```yaml
product: windows
service: bits-client
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_generic:
  LocalName|contains: \AppData\
  RemoteName|contains: .com
selection:
  EventID: 16403
  LocalName|endswith:
  - .bat
  - .dll
  - .exe
  - .hta
  - .ps1
  - .psd1
  - .sh
  - .vbe
  - .vbs
```

## MITRE ATT&CK
- T1197

## False Positives
- While the file extensions in question can be suspicious at times. It's best to add filters according to your environment to avoid large amount false positives

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1197/T1197.md

## Metadata
- **Author:** frack113
- **Date:** 2022-03-01
- **Rule ID:** `b85e5894-9b19-4d86-8c87-a2f3b81f0521`
- **Source file:** `windows/builtin/bits_client/win_bits_client_new_transfer_saving_susp_extensions.yml`
