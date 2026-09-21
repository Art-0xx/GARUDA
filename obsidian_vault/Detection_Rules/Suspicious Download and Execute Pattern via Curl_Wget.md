---
type: detection_rule
title: "Suspicious Download and Execute Pattern via Curl/Wget"
rule_id: a2d9e2f3-0f43-4c7a-bcd9-9acfc0d723aa
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004, attack.t1203]
---

# Suspicious Download and Execute Pattern via Curl/Wget

## Description
Detects suspicious use of command-line tools such as curl or wget to download remote
content - particularly scripts - into temporary directories (e.g., /dev/shm, /tmp), followed by
immediate execution, indicating potential malicious activity. This pattern is commonly used
by malicious scripts, stagers, or downloaders in fileless or multi-stage Linux attacks.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_downloader:
  CommandLine|contains:
  - /curl
  - /wget
selection_executor:
  CommandLine|contains: sh -c
selection_tmp:
  CommandLine|contains:
  - /tmp/
  - /dev/shm/
```

## MITRE ATT&CK
- T1059.004
- T1203

## False Positives
- System update scripts using temporary files
- Installer scripts or automated provisioning tools

## References
- https://gtfobins.github.io/gtfobins/wget/
- https://gtfobins.github.io/gtfobins/curl/

## Metadata
- **Author:** Aayush Gupta
- **Date:** 2025-06-17
- **Rule ID:** `a2d9e2f3-0f43-4c7a-bcd9-9acfc0d723aa`
- **Source file:** `linux/process_creation/proc_creation_lnx_curl_wget_exec_tmp.yml`
