---
type: detection_rule
title: "Linux Shell Pipe to Shell"
rule_id: 880973f3-9708-491c-a77b-2a35a1921158
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1140]
---

# Linux Shell Pipe to Shell

## Description
Detects suspicious process command line that starts with a shell that executes something and finally gets piped into another shell

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  CommandLine|startswith:
  - 'sh -c '
  - 'bash -c '
selection_exec:
- CommandLine|contains:
  - '| bash '
  - '| sh '
  - '|bash '
  - '|sh '
- CommandLine|endswith:
  - '| bash'
  - '| sh'
  - '|bash'
  - ' |sh'
```

## MITRE ATT&CK
- T1140

## False Positives
- Legitimate software that uses these patterns

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-14
- **Rule ID:** `880973f3-9708-491c-a77b-2a35a1921158`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_pipe_shell.yml`
