---
type: detection_rule
title: "Suspicious CertReq Command to Download"
rule_id: 4480827a-9799-4232-b2c4-ccc6c4e9e12b
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious CertReq Command to Download

## Description
Detects a suspicious CertReq execution downloading a file.
This behavior is often used by attackers to download additional payloads or configuration files.
Certreq is a built-in Windows utility used to request and retrieve certificates from a certification authority (CA). However, it can be abused by threat actors for malicious purposes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_flag_config:
  CommandLine|contains|windash: -config
selection_cli_flag_post:
  CommandLine|contains|windash: -Post
selection_cli_http:
  CommandLine|contains: http
selection_img:
- Image|endswith: \certreq.exe
- OriginalFileName: CertReq.exe
```

## MITRE ATT&CK
- T1105

## False Positives
- Unlikely

## References
- https://lolbas-project.github.io/lolbas/Binaries/Certreq/

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-11-24
- **Rule ID:** `4480827a-9799-4232-b2c4-ccc6c4e9e12b`
- **Source file:** `windows/process_creation/proc_creation_win_certreq_download.yml`
