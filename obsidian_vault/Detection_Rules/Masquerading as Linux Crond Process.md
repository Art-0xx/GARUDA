---
type: detection_rule
title: "Masquerading as Linux Crond Process"
rule_id: 9d4548fa-bba0-4e88-bd66-5d5bf516cda0
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1036.003]
---

# Masquerading as Linux Crond Process

## Description
Masquerading occurs when the name or location of an executable, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation.
Several different variations of this technique have been observed.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  a0: cp
  a1: /bin/sh
  a2|endswith: /crond
  type: execve
```

## MITRE ATT&CK
- T1036.003

## References
- https://github.com/redcanaryco/atomic-red-team/blob/8a82e9b66a5b4f4bc5b91089e9f24e0544f20ad7/atomics/T1036.003/T1036.003.md#atomic-test-2---masquerading-as-linux-crond-process

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `9d4548fa-bba0-4e88-bd66-5d5bf516cda0`
- **Source file:** `linux/auditd/execve/lnx_auditd_masquerading_crond.yml`
