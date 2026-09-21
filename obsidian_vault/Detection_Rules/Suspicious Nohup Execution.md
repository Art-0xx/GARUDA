---
type: detection_rule
title: "Suspicious Nohup Execution"
rule_id: 457df417-8b9d-4912-85f3-9dbda39c3645
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
---

# Suspicious Nohup Execution

## Description
Detects execution of binaries located in potentially suspicious locations via "nohup"

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: /tmp/
  Image|endswith: /nohup
```

## False Positives
- Unknown

## References
- https://blogs.jpcert.or.jp/en/2023/05/gobrat.html
- https://jstnk9.github.io/jstnk9/research/GobRAT-Malware/
- https://www.virustotal.com/gui/file/60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3/detection
- https://www.virustotal.com/gui/file/3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1/detection

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-06-02
- **Rule ID:** `457df417-8b9d-4912-85f3-9dbda39c3645`
- **Source file:** `linux/process_creation/proc_creation_lnx_nohup_susp_execution.yml`
