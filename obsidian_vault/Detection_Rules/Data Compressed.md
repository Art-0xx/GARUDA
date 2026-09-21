---
type: detection_rule
title: "Data Compressed"
rule_id: a3b5e3e9-1b49-4119-8b8e-0344a01f21ee
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1560.001]
---

# Data Compressed

## Description
An adversary may compress data (e.g., sensitive documents) that is collected prior to exfiltration in order to make it portable and minimize the amount of data sent over the network.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  a0: zip
  type: execve
selection2:
  a0: gzip
  a1: -k
  type: execve
selection3:
  a0: tar
  a1|contains: -c
  type: execve
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Legitimate use of archiving tools by legitimate user.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/a78b9ed805ab9ea2e422e1aa7741e9407d82d7b1/atomics/T1560.001/T1560.001.md

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `a3b5e3e9-1b49-4119-8b8e-0344a01f21ee`
- **Source file:** `linux/auditd/execve/lnx_auditd_data_compressed.yml`
