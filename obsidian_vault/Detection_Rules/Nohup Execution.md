---
type: detection_rule
title: "Nohup Execution"
rule_id: e4ffe466-6ff8-48d4-94bd-e32d1a6061e2
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# Nohup Execution

## Description
Detects usage of nohup which could be leveraged by an attacker to keep a process running or break out from restricted environments

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: /nohup
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Administrators or installed processes that leverage nohup

## References
- https://gtfobins.github.io/gtfobins/nohup/
- https://en.wikipedia.org/wiki/Nohup
- https://www.computerhope.com/unix/unohup.htm

## Metadata
- **Author:** Christopher Peacock @SecurePeacock, SCYTHE @scythe_io
- **Date:** 2022-06-06
- **Rule ID:** `e4ffe466-6ff8-48d4-94bd-e32d1a6061e2`
- **Source file:** `linux/process_creation/proc_creation_lnx_nohup.yml`
