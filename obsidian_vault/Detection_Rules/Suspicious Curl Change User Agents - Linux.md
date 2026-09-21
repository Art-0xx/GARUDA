---
type: detection_rule
title: "Suspicious Curl Change User Agents - Linux"
rule_id: b86d356d-6093-443d-971c-9b07db583c68
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1071.001]
---

# Suspicious Curl Change User Agents - Linux

## Description
Detects a suspicious curl process start on linux with set useragent options

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - ' -A '
  - ' --user-agent '
  Image|endswith: /curl
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Scripts created by developers and admins
- Administrative activity

## References
- https://curl.se/docs/manpage.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-15
- **Rule ID:** `b86d356d-6093-443d-971c-9b07db583c68`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_curl_useragent.yml`
