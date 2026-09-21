---
type: detection_rule
title: "Curl Usage on Linux"
rule_id: ea34fb97-e2c4-4afb-810f-785e4459b194
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1105]
---

# Curl Usage on Linux

## Description
Detects a curl process start on linux, which indicates a file download from a remote location or a simple web request to a remote server

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: /curl
```

## MITRE ATT&CK
- T1105

## False Positives
- Scripts created by developers and admins
- Administrative activity

## References
- https://www.trendmicro.com/en_us/research/22/i/how-malicious-actors-abuse-native-linux-tools-in-their-attacks.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-15
- **Rule ID:** `ea34fb97-e2c4-4afb-810f-785e4459b194`
- **Source file:** `linux/process_creation/proc_creation_lnx_curl_usage.yml`
