---
type: detection_rule
title: "Rar Usage with Password and Compression Level"
rule_id: faa48cae-6b25-4f00-a094-08947fef582f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# Rar Usage with Password and Compression Level

## Description
Detects the use of rar.exe, on the command line, to create an archive with password protection or with a specific compression level. This is pretty indicative of malicious actions.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_password and selection_other
selection_other:
  CommandLine|contains:
  - ' -m'
  - ' a '
selection_password:
  CommandLine|contains: ' -hp'
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Legitimate use of Winrar command line version
- Other command line tools, that use these flags

## References
- https://labs.sentinelone.com/the-anatomy-of-an-apt-attack-and-cobaltstrike-beacons-encoded-configuration/
- https://ss64.com/bash/rar.html
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1560.001/T1560.001.md

## Metadata
- **Author:** @ROxPinTeddy
- **Date:** 2020-05-12
- **Rule ID:** `faa48cae-6b25-4f00-a094-08947fef582f`
- **Source file:** `windows/process_creation/proc_creation_win_rar_compression_with_password.yml`
