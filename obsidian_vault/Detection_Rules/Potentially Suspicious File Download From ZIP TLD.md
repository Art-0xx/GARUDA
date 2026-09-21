---
type: detection_rule
title: "Potentially Suspicious File Download From ZIP TLD"
rule_id: 0bb4bbeb-fe52-4044-b40c-430a04577ebe
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious File Download From ZIP TLD

## Description
Detects the download of a file with a potentially suspicious extension from a .zip top level domain.

## Log Source
```yaml
category: create_stream_hash
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Contents|contains: .zip/
  TargetFilename|contains:
  - .bat:Zone
  - .dat:Zone
  - .dll:Zone
  - .doc:Zone
  - .docm:Zone
  - .exe:Zone
  - .hta:Zone
  - .pptm:Zone
  - .ps1:Zone
  - .rar:Zone
  - .rtf:Zone
  - .sct:Zone
  - .vbe:Zone
  - .vbs:Zone
  - .ws:Zone
  - .wsf:Zone
  - .xll:Zone
  - .xls:Zone
  - .xlsm:Zone
  - .zip:Zone
```

## False Positives
- Legitimate file downloads from a websites and web services that uses the ".zip" top level domain.

## References
- https://twitter.com/cyb3rops/status/1659175181695287297
- https://fabian-voith.de/2020/06/25/sysmon-v11-1-reads-alternate-data-streams/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2023-05-18
- **Rule ID:** `0bb4bbeb-fe52-4044-b40c-430a04577ebe`
- **Source file:** `windows/create_stream_hash/create_stream_hash_zip_tld_download.yml`
