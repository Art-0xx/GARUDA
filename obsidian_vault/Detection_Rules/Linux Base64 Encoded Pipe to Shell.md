---
type: detection_rule
title: "Linux Base64 Encoded Pipe to Shell"
rule_id: ba592c6d-6888-43c3-b8c6-689b8fe47337
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1140]
---

# Linux Base64 Encoded Pipe to Shell

## Description
Detects suspicious process command line that uses base64 encoded input for execution with a shell

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_base64:
  CommandLine|contains: 'base64 '
selection_exec:
- CommandLine|contains:
  - '| bash '
  - '| sh '
  - '|bash '
  - '|sh '
- CommandLine|endswith:
  - ' |sh'
  - '| bash'
  - '| sh'
  - '|bash'
```

## MITRE ATT&CK
- T1140

## False Positives
- Legitimate administration activities

## References
- https://github.com/arget13/DDexec
- https://www.mandiant.com/resources/blog/barracuda-esg-exploited-globally

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-07-26
- **Rule ID:** `ba592c6d-6888-43c3-b8c6-689b8fe47337`
- **Source file:** `linux/process_creation/proc_creation_lnx_base64_execution.yml`
