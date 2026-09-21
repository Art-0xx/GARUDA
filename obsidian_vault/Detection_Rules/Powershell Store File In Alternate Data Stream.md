---
type: detection_rule
title: "Powershell Store File In Alternate Data Stream"
rule_id: a699b30e-d010-46c8-bbd1-ee2e26765fe9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Powershell Store File In Alternate Data Stream

## Description
Storing files in Alternate Data Stream (ADS) similar to Astaroth malware.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_compspec
selection_compspec:
  ScriptBlockText|contains|all:
  - Start-Process
  - '-FilePath "$env:comspec" '
  - '-ArgumentList '
  - '>'
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1564.004/T1564.004.md

## Metadata
- **Author:** frack113
- **Date:** 2021-09-02
- **Rule ID:** `a699b30e-d010-46c8-bbd1-ee2e26765fe9`
- **Source file:** `windows/powershell/powershell_script/posh_ps_store_file_in_alternate_data_stream.yml`
