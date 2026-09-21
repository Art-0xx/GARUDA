---
type: detection_rule
title: "Ruby Inline Command Execution"
rule_id: 20a5ffa1-3848-4584-b6f8-c7c7fd9f69c8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Ruby Inline Command Execution

## Description
Detects execution of ruby using the "-e" flag. This is could be used as a way to launch a reverse shell or execute live ruby code.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ' -e'
selection_img:
- Image|endswith: \ruby.exe
- OriginalFileName: ruby.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet
- https://www.revshells.com/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-02
- **Rule ID:** `20a5ffa1-3848-4584-b6f8-c7c7fd9f69c8`
- **Source file:** `windows/process_creation/proc_creation_win_ruby_inline_command_execution.yml`
