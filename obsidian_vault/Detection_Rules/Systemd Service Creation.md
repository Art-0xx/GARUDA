---
type: detection_rule
title: "Systemd Service Creation"
rule_id: 1bac86ba-41aa-4f62-9d6b-405eac99b485
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1543.002]
---

# Systemd Service Creation

## Description
Detects a creation of systemd services which could be used by adversaries to execute malicious code.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: path and 1 of name_*
name_1:
  name|startswith:
  - /usr/lib/systemd/system/
  - /etc/systemd/system/
name_2:
  name|contains: /.config/systemd/user/
path:
  nametype: CREATE
  type: PATH
```

## MITRE ATT&CK
- T1543.002

## False Positives
- Admin work like legit service installs.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1543.002/T1543.002.md

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2022-02-03
- **Rule ID:** `1bac86ba-41aa-4f62-9d6b-405eac99b485`
- **Source file:** `linux/auditd/path/lnx_auditd_systemd_service_creation.yml`
