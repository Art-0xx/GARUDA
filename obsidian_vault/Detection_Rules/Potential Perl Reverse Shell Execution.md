---
type: detection_rule
title: "Potential Perl Reverse Shell Execution"
rule_id: 259df6bc-003f-4306-9f54-4ff1a08fa38e
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
---

# Potential Perl Reverse Shell Execution

## Description
Detects execution of the perl binary with the "-e" flag and common strings related to potential reverse shell activity

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_content:
- CommandLine|contains|all:
  - fdopen(
  - ::Socket::INET
- CommandLine|contains|all:
  - Socket
  - connect
  - open
  - exec
selection_img:
  CommandLine|contains: ' -e '
  Image|endswith: /perl
```

## False Positives
- Unlikely

## References
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet
- https://www.revshells.com/

## Metadata
- **Author:** @d4ns4n_, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-07
- **Rule ID:** `259df6bc-003f-4306-9f54-4ff1a08fa38e`
- **Source file:** `linux/process_creation/proc_creation_lnx_perl_reverse_shell.yml`
