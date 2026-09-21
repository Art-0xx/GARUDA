---
type: detection_rule
title: "Suspicious Filename with Embedded Base64 Commands"
rule_id: 179b3686-6271-4d87-807d-17d843a8af73
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004, attack.t1027]
---

# Suspicious Filename with Embedded Base64 Commands

## Description
Detects files with specially crafted filenames that embed Base64-encoded bash payloads designed to execute when processed by shell scripts.
These filenames exploit shell interpretation quirks to trigger hidden commands, a technique observed in VShell malware campaigns.

## Log Source
```yaml
category: file_event
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains:
  - '{echo'
  - '{base64,-d}'
```

## MITRE ATT&CK
- T1059.004
- T1027

## False Positives
- Legitimate files with similar naming patterns (very unlikely).

## References
- https://www.trellix.com/blogs/research/the-silent-fileless-threat-of-vshell/

## Metadata
- **Author:** @kostastsale
- **Date:** 2025-11-22
- **Rule ID:** `179b3686-6271-4d87-807d-17d843a8af73`
- **Source file:** `linux/file_event/file_event_lnx_susp_filename_with_embedded_base64_command.yml`
