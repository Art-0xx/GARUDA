---
type: detection_rule
title: "Perl Inline Command Execution"
rule_id: f426547a-e0f7-441a-b63e-854ac5bdf54d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Perl Inline Command Execution

## Description
Detects execution of perl using the "-e"/"-E" flags. This is could be used as a way to launch a reverse shell or execute live perl code.

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
- Image|endswith: \perl.exe
- OriginalFileName: perl.exe
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
- **Rule ID:** `f426547a-e0f7-441a-b63e-854ac5bdf54d`
- **Source file:** `windows/process_creation/proc_creation_win_perl_inline_command_execution.yml`
