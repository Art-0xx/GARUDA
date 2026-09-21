---
type: detection_rule
title: "Persistence Via Sudoers.d Files"
rule_id: ddb26b76-4447-4807-871f-1b035b2bfa5d
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1548.003]
---

# Persistence Via Sudoers.d Files

## Description
Detects the creation or modification of files within the "sudoers.d" directory on Linux systems.
Such activity may indicate an attempt to establish or maintain privilege escalation by granting specific users elevated permissions.
Unauthorized changes to sudoers files are a common technique used by attackers to persist administrative access.

## Log Source
```yaml
category: file_event
product: linux
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_dpkg:
  Image|endswith: /usr/bin/dpkg
  TargetFilename: /etc/sudoers.d/README.dpkg-new
selection:
  TargetFilename|startswith: /etc/sudoers.d/
```

## MITRE ATT&CK
- T1548.003

## False Positives
- Creation of legitimate files in sudoers.d folder as part of administrator work

## References
- https://github.com/h3xduck/TripleCross/blob/1f1c3e0958af8ad9f6ebe10ab442e75de33e91de/apps/deployer.sh

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-05
- **Rule ID:** `ddb26b76-4447-4807-871f-1b035b2bfa5d`
- **Source file:** `linux/file_event/file_event_lnx_persistence_sudoers_files.yml`
