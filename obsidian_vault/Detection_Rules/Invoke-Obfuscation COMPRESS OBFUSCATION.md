---
type: detection_rule
title: "Invoke-Obfuscation COMPRESS OBFUSCATION"
rule_id: 7eedcc9d-9fdb-4d94-9c54-474e8affc0c7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation COMPRESS OBFUSCATION

## Description
Detects Obfuscated Powershell via COMPRESS OBFUSCATION

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - system.io.compression.deflatestream
  - system.io.streamreader
  - readtoend(
  CommandLine|contains|all:
  - new-object
  - text.encoding]::ascii
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2020-10-18
- **Rule ID:** `7eedcc9d-9fdb-4d94-9c54-474e8affc0c7`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_via_compress.yml`
