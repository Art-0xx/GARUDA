---
type: detection_rule
title: "Creation Exe for Service with Unquoted Path"
rule_id: 8c3c76ca-8f8b-4b1d-aaf3-81aebcd367c9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.009]
---

# Creation Exe for Service with Unquoted Path

## Description
Adversaries may execute their own malicious payloads by hijacking vulnerable file path references.
Adversaries can take advantage of paths that lack surrounding quotations by placing an executable in a higher level directory within the path, so that Windows will choose the adversary's executable to launch.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename: C:\program.exe
```

## MITRE ATT&CK
- T1547.009

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1574.009/T1574.009.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-30
- **Rule ID:** `8c3c76ca-8f8b-4b1d-aaf3-81aebcd367c9`
- **Source file:** `windows/file/file_event/file_event_win_creation_unquoted_service_path.yml`
