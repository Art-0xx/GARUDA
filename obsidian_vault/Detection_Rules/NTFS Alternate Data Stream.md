---
type: detection_rule
title: "NTFS Alternate Data Stream"
rule_id: 8c521530-5169-495d-a199-0a3a881ad24e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004, attack.t1059.001]
---

# NTFS Alternate Data Stream

## Description
Detects writing data into NTFS alternate data streams from powershell. Needs Script Block Logging.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_content:
  ScriptBlockText|contains:
  - set-content
  - add-content
selection_stream:
  ScriptBlockText|contains: -stream
```

## MITRE ATT&CK
- T1564.004
- T1059.001

## False Positives
- Unknown

## References
- https://web.archive.org/web/20220614030603/http://www.powertheshell.com/ntfsstreams/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1564.004/T1564.004.md

## Metadata
- **Author:** Sami Ruohonen
- **Date:** 2018-07-24
- **Rule ID:** `8c521530-5169-495d-a199-0a3a881ad24e`
- **Source file:** `windows/powershell/powershell_script/posh_ps_ntfs_ads_access.yml`
