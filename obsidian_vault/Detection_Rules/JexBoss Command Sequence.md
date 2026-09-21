---
type: detection_rule
title: "JexBoss Command Sequence"
rule_id: 8ec2c8b4-557a-4121-b87c-5dfb3a602fae
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# JexBoss Command Sequence

## Description
Detects suspicious command sequence that JexBoss

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
  '|all':
  - bash -c /bin/bash
  - '&/dev/tcp/'
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Unknown

## References
- https://www.us-cert.gov/ncas/analysis-reports/AR18-312A

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-08-24
- **Rule ID:** `8ec2c8b4-557a-4121-b87c-5dfb3a602fae`
- **Source file:** `linux/builtin/lnx_susp_jexboss.yml`
