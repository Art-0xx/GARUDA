---
type: detection_rule
title: "Setuid and Setgid"
rule_id: c21c4eaa-ba2e-419a-92b2-8371703cbe21
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1548.001]
---

# Setuid and Setgid

## Description
Detects suspicious change of file privileges with chown and chmod commands

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_perm:
  CommandLine|contains:
  - ' chmod u+s'
  - ' chmod g+s'
selection_root:
  CommandLine|contains: chown root
```

## MITRE ATT&CK
- T1548.001

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1548.001/T1548.001.md

## Metadata
- **Author:** Ömer Günal
- **Date:** 2020-06-16
- **Rule ID:** `c21c4eaa-ba2e-419a-92b2-8371703cbe21`
- **Source file:** `linux/process_creation/proc_creation_lnx_setgid_setuid.yml`
