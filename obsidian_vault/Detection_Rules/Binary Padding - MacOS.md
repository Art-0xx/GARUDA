---
type: detection_rule
title: "Binary Padding - MacOS"
rule_id: 95361ce5-c891-4b0a-87ca-e24607884a96
platform: macos
level: high
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1027.001]
---

# Binary Padding - MacOS

## Description
Adversaries may use binary padding to add junk data and change the on-disk representation of malware. This rule detect using dd and truncate to add a junk data to file.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_dd:
  CommandLine|contains:
  - if=/dev/zero
  - if=/dev/random
  - if=/dev/urandom
  Image|endswith: /dd
selection_truncate:
  CommandLine|contains: -s +
  Image|endswith: /truncate
```

## MITRE ATT&CK
- T1027.001

## False Positives
- Legitimate script work

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1027.001/T1027.001.md
- https://linux.die.net/man/1/truncate
- https://linux.die.net/man/1/dd

## Metadata
- **Author:** Igor Fits, Mikhail Larin, oscd.community
- **Date:** 2020-10-19
- **Rule ID:** `95361ce5-c891-4b0a-87ca-e24607884a96`
- **Source file:** `macos/process_creation/proc_creation_macos_binary_padding.yml`
