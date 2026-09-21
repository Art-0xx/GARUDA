---
type: detection_rule
title: "Gzip Archive Decode Via PowerShell"
rule_id: 98767d61-b2e8-4d71-b661-e36783ee24c1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1132.001]
---

# Gzip Archive Decode Via PowerShell

## Description
Detects attempts of decoding encoded Gzip archives via PowerShell.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - GZipStream
  - ::Decompress
```

## MITRE ATT&CK
- T1132.001

## False Positives
- Legitimate administrative scripts may use this functionality. Use "ParentImage" in combination with the script names and allowed users and applications to filter legitimate executions

## References
- https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution

## Metadata
- **Author:** Hieu Tran
- **Date:** 2023-03-13
- **Rule ID:** `98767d61-b2e8-4d71-b661-e36783ee24c1`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_decode_gzip.yml`
