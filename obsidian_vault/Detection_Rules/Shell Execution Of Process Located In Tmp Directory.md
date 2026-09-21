---
type: detection_rule
title: "Shell Execution Of Process Located In Tmp Directory"
rule_id: 2fade0b6-7423-4835-9d4f-335b39b83867
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
---

# Shell Execution Of Process Located In Tmp Directory

## Description
Detects execution of shells from a parent process located in a temporary (/tmp) directory

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - /bash
  - /csh
  - /dash
  - /fish
  - /ksh
  - /sh
  - /zsh
  ParentImage|startswith: /tmp/
```

## False Positives
- Unknown

## References
- https://blogs.jpcert.or.jp/en/2023/05/gobrat.html
- https://jstnk9.github.io/jstnk9/research/GobRAT-Malware/
- https://www.virustotal.com/gui/file/60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3/detection
- https://www.virustotal.com/gui/file/3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1/detection

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-06-02
- **Rule ID:** `2fade0b6-7423-4835-9d4f-335b39b83867`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_shell_child_process_from_parent_tmp_folder.yml`
