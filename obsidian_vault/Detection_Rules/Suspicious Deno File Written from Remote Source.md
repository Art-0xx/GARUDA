---
type: detection_rule
title: "Suspicious Deno File Written from Remote Source"
rule_id: 6c0ce3b6-85e2-49d4-9c3f-6e008ce9796e
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204, attack.t1059.007, attack.t1105]
---

# Suspicious Deno File Written from Remote Source

## Description
Detects Deno writing a file from a direct HTTP(s) call and writing to the appdata folder or bringing it's own malicious DLL.
This behavior may indicate an attempt to execute remotely hosted, potentially malicious files through deno.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection_path
selection_path:
  TargetFilename|contains:
  - \deno\gen\
  - \deno\remote\https\
  TargetFilename|contains|all:
  - :\Users\
  - \AppData\
```

## MITRE ATT&CK
- T1204
- T1059.007
- T1105

## False Positives
- Legitimate usage of deno to request a file or bring a DLL to a host

## References
- https://taggart-tech.com/evildeno/

## Metadata
- **Author:** Josh Nickels, Michael Taggart
- **Date:** 2025-05-22
- **Rule ID:** `6c0ce3b6-85e2-49d4-9c3f-6e008ce9796e`
- **Source file:** `windows/file/file_event/file_event_win_creation_deno.yml`
