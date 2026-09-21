---
type: detection_rule
title: "Potentially Suspicious Inline JavaScript Execution via NodeJS Binary"
rule_id: 8537c866-072e-460d-bfff-aaf39cbd73d3
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.007]
---

# Potentially Suspicious Inline JavaScript Execution via NodeJS Binary

## Description
Detects potentially suspicious inline JavaScript execution using Node.js with specific keywords in the command line.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains|all:
  - http
  - execSync
  - spawn
  - fs
  - path
  - zlib
selection_img:
- Image|endswith: \node.exe
- OriginalFileName: node.exe
- Product: Node.js
```

## MITRE ATT&CK
- T1059.007

## False Positives
- Legitimate scripts using Node.js with these modules

## References
- https://www.microsoft.com/en-us/security/blog/2025/04/15/threat-actors-misuse-node-js-to-deliver-malware-and-other-malicious-payloads/

## Metadata
- **Author:** Microsoft (idea), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-04-21
- **Rule ID:** `8537c866-072e-460d-bfff-aaf39cbd73d3`
- **Source file:** `windows/process_creation/proc_creation_win_susp_inline_node_js_execution.yml`
