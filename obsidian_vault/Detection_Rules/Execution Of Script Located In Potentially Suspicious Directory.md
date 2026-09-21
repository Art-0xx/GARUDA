---
type: detection_rule
title: "Execution Of Script Located In Potentially Suspicious Directory"
rule_id: 30bcce26-51c5-49f2-99c8-7b59e3af36c7
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
---

# Execution Of Script Located In Potentially Suspicious Directory

## Description
Detects executions of scripts located in potentially suspicious locations such as "/tmp" via a shell such as "bash", "sh", etc.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flag:
  CommandLine|contains: ' -c '
selection_img:
  Image|endswith:
  - /bash
  - /csh
  - /dash
  - /fish
  - /ksh
  - /sh
  - /zsh
selection_paths:
  CommandLine|contains: /tmp/
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
- **Rule ID:** `30bcce26-51c5-49f2-99c8-7b59e3af36c7`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_shell_script_exec_from_susp_location.yml`
