---
type: detection_rule
title: "Modification of ld.so.preload"
rule_id: 4b3cb710-5e83-4715-8c45-8b2b5b3e5751
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1574.006]
---

# Modification of ld.so.preload

## Description
Identifies modification of ld.so.preload for shared object injection. This technique is used by attackers to load arbitrary code into processes.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  name: /etc/ld.so.preload
  type: PATH
```

## MITRE ATT&CK
- T1574.006

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1574.006/T1574.006.md
- https://eqllib.readthedocs.io/en/latest/analytics/fd9b987a-1101-4ed3-bda6-a70300eaf57e.html

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Tony Lambert), oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `4b3cb710-5e83-4715-8c45-8b2b5b3e5751`
- **Source file:** `linux/auditd/path/lnx_auditd_ld_so_preload_mod.yml`
