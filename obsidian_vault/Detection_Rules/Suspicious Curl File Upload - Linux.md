---
type: detection_rule
title: "Suspicious Curl File Upload - Linux"
rule_id: 00b90cc1-17ec-402c-96ad-3a8117d7a582
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1567, attack.t1105]
---

# Suspicious Curl File Upload - Linux

## Description
Detects a suspicious curl process start the adds a file to a web request

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_localhost:
  CommandLine|contains:
  - ://localhost
  - ://127.0.0.1
selection_cli:
- CommandLine|contains:
  - ' --form'
  - ' --upload-file '
  - ' --data '
  - ' --data-'
- CommandLine|re: \s-[FTd]\s
selection_img:
  Image|endswith: /curl
```

## MITRE ATT&CK
- T1567
- T1105

## False Positives
- Scripts created by developers and admins

## References
- https://twitter.com/d1r4c/status/1279042657508081664
- https://medium.com/@petehouston/upload-files-with-curl-93064dcccc76
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1105/T1105.md#atomic-test-19---curl-upload-file
- https://curl.se/docs/manpage.html
- https://www.trendmicro.com/en_us/research/22/i/how-malicious-actors-abuse-native-linux-tools-in-their-attacks.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Cedric MAURUGEON (Update)
- **Date:** 2022-09-15
- **Rule ID:** `00b90cc1-17ec-402c-96ad-3a8117d7a582`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_curl_fileupload.yml`
