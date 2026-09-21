---
type: detection_rule
title: "Touch Suspicious Service File"
rule_id: 31545105-3444-4584-bebf-c466353230d2
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1070.006]
---

# Touch Suspicious Service File

## Description
Detects usage of the "touch" process in service file.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' -t '
  CommandLine|endswith: .service
  Image|endswith: /touch
```

## MITRE ATT&CK
- T1070.006

## False Positives
- Admin changing date of files.

## References
- https://blogs.blackberry.com/
- https://twitter.com/Joseliyo_Jstnk/status/1620131033474822144

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-01-11
- **Rule ID:** `31545105-3444-4584-bebf-c466353230d2`
- **Source file:** `linux/process_creation/proc_creation_lnx_touch_susp.yml`
