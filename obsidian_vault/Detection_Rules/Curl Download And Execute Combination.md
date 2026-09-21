---
type: detection_rule
title: "Curl Download And Execute Combination"
rule_id: 21dd6d38-2b18-4453-9404-a0fe4a0cc288
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1105]
---

# Curl Download And Execute Combination

## Description
Adversaries can use curl to download payloads remotely and execute them. Curl is included by default in Windows 10 build 17063 and later.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - 'curl '
  - http
  - -o
  - '&'
  CommandLine|contains|windash: ' -c '
```

## MITRE ATT&CK
- T1218
- T1105

## False Positives
- Unknown

## References
- https://medium.com/@reegun/curl-exe-is-the-new-rundll32-exe-lolbin-3f79c5f35983

## Metadata
- **Author:** Sreeman, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-01-13
- **Rule ID:** `21dd6d38-2b18-4453-9404-a0fe4a0cc288`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_curl_download_exec_combo.yml`
