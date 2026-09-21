---
type: detection_rule
title: "Python One-Liners with Base64 Decoding - Linux"
rule_id: 55e862a8-dd9c-4651-807a-f21fcad56716
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.006, attack.t1027.010]
---

# Python One-Liners with Base64 Decoding - Linux

## Description
Detects the use of Python's base64 decoding functions in command line executions on Linux systems.
Malicious scripts often use python one-liners to decode and execute base64-encoded payloads, which is a common technique for obfuscation and evasion.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - .decode
  - b16decode
  - b32decode
  - b32hexdecode
  - b64decode
  - b85decode
  - z85decode
  CommandLine|contains|all:
  - import
  - base64
  - ' -c'
selection_img:
  Image|contains: /python
```

## MITRE ATT&CK
- T1059.006
- T1027.010

## False Positives
- Legitimate use of Python for decoding data, which is uncommon in typical enterprise environments but possible in development or data analysis contexts.

## References
- https://docs.python.org/3/library/base64.html
- https://www.virustotal.com/gui/file/bc43e925d7b4b74319f6e74e836a96f1997ba404e14ac566cf12a21e9da463db/behavior
- https://cloud.google.com/blog/topics/threat-intelligence/cybercriminals-weaponize-fake-ai-websites

## Metadata
- **Author:** Hugh Ryan (HueCodes), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-03-09
- **Rule ID:** `55e862a8-dd9c-4651-807a-f21fcad56716`
- **Source file:** `linux/process_creation/proc_creation_lnx_python_base64_encoded_execution.yml`
