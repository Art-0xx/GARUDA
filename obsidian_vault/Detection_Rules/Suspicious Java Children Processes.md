---
type: detection_rule
title: "Suspicious Java Children Processes"
rule_id: d292e0af-9a18-420c-9525-ec0ac3936892
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Suspicious Java Children Processes

## Description
Detects java process spawning suspicious children

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
  - /bin/sh
  - bash
  - dash
  - ksh
  - zsh
  - csh
  - fish
  - curl
  - wget
  - python
  ParentImage|endswith: /java
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://www.tecmint.com/different-types-of-linux-shells/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-03
- **Rule ID:** `d292e0af-9a18-420c-9525-ec0ac3936892`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_java_children.yml`
