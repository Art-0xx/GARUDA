---
type: detection_rule
title: "Python Reverse Shell Execution Via PTY And Socket Modules"
rule_id: 32e62bc7-3de0-4bb1-90af-532978fe42c0
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
---

# Python Reverse Shell Execution Via PTY And Socket Modules

## Description
Detects the execution of python with calls to the socket and pty module in order to connect and spawn a potential reverse shell.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - ' -c '
  - import
  - pty
  - socket
  - spawn
  - .connect
  Image|contains: python
```

## False Positives
- Unknown

## References
- https://www.revshells.com/

## Metadata
- **Author:** @d4ns4n_, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-24
- **Rule ID:** `32e62bc7-3de0-4bb1-90af-532978fe42c0`
- **Source file:** `linux/process_creation/proc_creation_lnx_python_reverse_shell.yml`
