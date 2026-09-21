---
type: detection_rule
title: "Suspicious File Encoded To Base64 Via Certutil.EXE"
rule_id: ea0cdc3e-2239-4f26-a947-4e8f8224e464
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027]
---

# Suspicious File Encoded To Base64 Via Certutil.EXE

## Description
Detects the execution of certutil with the "encode" flag to encode a file to base64 where the extensions of the file is suspicious

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: -encode
selection_extension:
  CommandLine|contains:
  - .acl
  - .bat
  - .doc
  - .gif
  - .jpeg
  - .jpg
  - .mp3
  - .pdf
  - .png
  - .ppt
  - .tmp
  - .xls
  - .xml
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1027

## False Positives
- Unknown

## References
- https://www.virustotal.com/gui/file/35c22725a92d5cb1016b09421c0a6cdbfd860fd4778b3313669b057d4a131cb7/behavior
- https://www.virustotal.com/gui/file/427616528b7dbc4a6057ac89eb174a3a90f7abcf3f34e5a359b7a910d82f7a72/behavior
- https://www.virustotal.com/gui/file/34de4c8beded481a4084a1fd77855c3e977e8ac643e5c5842d0f15f7f9b9086f/behavior
- https://www.virustotal.com/gui/file/4abe1395a09fda06d897a9c4eb247278c1b6cddda5d126ce5b3f4f499e3b8fa2/behavior

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-15
- **Rule ID:** `ea0cdc3e-2239-4f26-a947-4e8f8224e464`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_encode_susp_extensions.yml`
