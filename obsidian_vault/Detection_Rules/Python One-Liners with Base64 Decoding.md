---
type: detection_rule
title: "Python One-Liners with Base64 Decoding"
rule_id: 50a0aa3d-ab16-4594-a8aa-5145a6e6792b
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.006, attack.t1027.010]
---

# Python One-Liners with Base64 Decoding

## Description
Detects Python one-liners that use base64 decoding functions in command line executions.
Malicious scripts or attackers often use python one-liners to decode and execute base64-encoded payloads, which is a common technique for obfuscation and evasion.

## Log Source
```yaml
category: process_creation
product: windows
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
- Image|contains: \python
- OriginalFileName|contains: python
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
- **Rule ID:** `50a0aa3d-ab16-4594-a8aa-5145a6e6792b`
- **Source file:** `windows/process_creation/proc_creation_win_python_base64_encoded_execution.yml`
