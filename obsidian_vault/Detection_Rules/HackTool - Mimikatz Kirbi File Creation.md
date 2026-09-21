---
type: detection_rule
title: "HackTool - Mimikatz Kirbi File Creation"
rule_id: 9e099d99-44c2-42b6-a6d8-54c3545cab29
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558]
---

# HackTool - Mimikatz Kirbi File Creation

## Description
Detects the creation of files created by mimikatz such as ".kirbi", "mimilsa.log", etc.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - .kirbi
  - mimilsa.log
```

## MITRE ATT&CK
- T1558

## False Positives
- Unlikely

## References
- https://cobalt.io/blog/kerberoast-attack-techniques
- https://pentestlab.blog/2019/10/21/persistence-security-support-provider/

## Metadata
- **Author:** Florian Roth (Nextron Systems), David ANDRE
- **Date:** 2021-11-08
- **Rule ID:** `9e099d99-44c2-42b6-a6d8-54c3545cab29`
- **Source file:** `windows/file/file_event/file_event_win_hktl_mimikatz_files.yml`
