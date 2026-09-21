---
type: detection_rule
title: "Potential Ruby Reverse Shell"
rule_id: b8bdac18-c06e-4016-ac30-221553e74f59
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
---

# Potential Ruby Reverse Shell

## Description
Detects execution of ruby with the "-e" flag and calls to "socket" related functions. This could be an indication of a potential attempt to setup a reverse shell

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - ' ash'
  - ' bash'
  - ' bsh'
  - ' csh'
  - ' ksh'
  - ' pdksh'
  - ' sh'
  - ' tcsh'
  CommandLine|contains|all:
  - ' -e'
  - rsocket
  - TCPSocket
  Image|contains: ruby
```

## False Positives
- Unknown

## References
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet
- https://www.revshells.com/

## Metadata
- **Author:** @d4ns4n_
- **Date:** 2023-04-07
- **Rule ID:** `b8bdac18-c06e-4016-ac30-221553e74f59`
- **Source file:** `linux/process_creation/proc_creation_lnx_ruby_reverse_shell.yml`
