---
type: detection_rule
title: "Suspicious Execution via macOS Script Editor"
rule_id: 6e4dcdd1-e48b-42f7-b2d8-3b413fc58cb4
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1566, attack.t1566.002, attack.t1059, attack.t1059.002, attack.t1204, attack.t1204.001, attack.t1553]
---

# Suspicious Execution via macOS Script Editor

## Description
Detects when the macOS Script Editor utility spawns an unusual child process.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith:
  - /curl
  - /bash
  - /sh
  - /zsh
  - /dash
  - /fish
  - /osascript
  - /mktemp
  - /chmod
  - /php
  - /nohup
  - /openssl
  - /plutil
  - /PlistBuddy
  - /xattr
  - /sqlite
  - /funzip
  - /popen
- Image|contains:
  - python
  - perl
selection_parent:
  ParentImage|endswith: /Script Editor
```

## MITRE ATT&CK
- T1566
- T1566.002
- T1059
- T1059.002
- T1204
- T1204.001
- T1553

## False Positives
- Unknown

## References
- https://github.com/elastic/protections-artifacts/commit/746086721fd385d9f5c6647cada1788db4aea95f#diff-7f541fbc4a4a28a92970e8bf53effea5bd934604429112c920affb457f5b2685
- https://wojciechregula.blog/post/macos-red-teaming-initial-access-via-applescript-url/

## Metadata
- **Author:** Tim Rauch (rule), Elastic (idea)
- **Date:** 2022-10-21
- **Rule ID:** `6e4dcdd1-e48b-42f7-b2d8-3b413fc58cb4`
- **Source file:** `macos/process_creation/proc_creation_macos_susp_execution_macos_script_editor.yml`
