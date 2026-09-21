---
type: detection_rule
title: "Modifying Crontab"
rule_id: af202fd3-7bff-4212-a25a-fb34606cfcbe
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1053.003]
---

# Modifying Crontab

## Description
Detects suspicious modification of crontab file.

## Log Source
```yaml
product: linux
service: cron
```

## Detection Logic
```yaml
condition: keywords
keywords:
- REPLACE
```

## MITRE ATT&CK
- T1053.003

## False Positives
- Legitimate modification of crontab

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1053.003/T1053.003.md

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2022-04-16
- **Rule ID:** `af202fd3-7bff-4212-a25a-fb34606cfcbe`
- **Source file:** `linux/builtin/cron/lnx_cron_crontab_file_modification.yml`
