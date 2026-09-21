---
type: detection_rule
title: "Screen Capture with Xwd"
rule_id: e2f17c5d-b02a-442b-9052-6eb89c9fec9c
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1113]
---

# Screen Capture with Xwd

## Description
Detects adversary creating screen capture of a full with xwd. Highly recommended using rule on servers, due high usage of screenshot utilities on user workstations

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection and 1 of xwd_*
selection:
  a0: xwd
  type: EXECVE
xwd_no_root_window:
  a1: -out
  a2|endswith: .xwd
xwd_root_window:
  a1: -root
  a2: -out
  a3|endswith: .xwd
```

## MITRE ATT&CK
- T1113

## False Positives
- Legitimate use of screenshot utility

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1113/T1113.md#atomic-test-3---x-windows-capture
- https://linux.die.net/man/1/xwd

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2021-09-13
- **Rule ID:** `e2f17c5d-b02a-442b-9052-6eb89c9fec9c`
- **Source file:** `linux/auditd/execve/lnx_auditd_screencaputre_xwd.yml`
