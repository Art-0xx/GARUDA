---
type: detection_rule
title: "Install Root Certificate"
rule_id: 78a80655-a51e-4669-bc6b-e9d206a462ee
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1553.004]
---

# Install Root Certificate

## Description
Detects installation of new certificate on the system which attackers may use to avoid warnings when connecting to controlled web servers or C2s

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - /update-ca-certificates
  - /update-ca-trust
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.004/T1553.004.md

## Metadata
- **Author:** Ömer Günal, oscd.community
- **Date:** 2020-10-05
- **Rule ID:** `78a80655-a51e-4669-bc6b-e9d206a462ee`
- **Source file:** `linux/process_creation/proc_creation_lnx_install_root_certificate.yml`
