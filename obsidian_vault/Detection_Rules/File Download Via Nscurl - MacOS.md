---
type: detection_rule
title: "File Download Via Nscurl - MacOS"
rule_id: 6d8a7cf1-8085-423b-b87d-7e880faabbdf
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1105]
---

# File Download Via Nscurl - MacOS

## Description
Detects the execution of the nscurl utility in order to download files.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - '--download '
  - '--download-directory '
  - '--output '
  - '-dir '
  - '-dl '
  - -ld
  - '-o '
  Image|endswith: /nscurl
```

## MITRE ATT&CK
- T1105

## False Positives
- Legitimate usage of nscurl by administrators and users.

## References
- https://www.loobins.io/binaries/nscurl/
- https://www.agnosticdev.com/content/how-diagnose-app-transport-security-issues-using-nscurl-and-openssl
- https://gist.github.com/nasbench/ca6ef95db04ae04ffd1e0b1ce709cadd

## Metadata
- **Author:** Daniel Cortez
- **Date:** 2024-06-04
- **Rule ID:** `6d8a7cf1-8085-423b-b87d-7e880faabbdf`
- **Source file:** `macos/process_creation/proc_creation_macos_nscurl_usage.yml`
