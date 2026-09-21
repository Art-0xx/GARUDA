---
type: detection_rule
title: "Potential In-Memory Download And Compile Of Payloads"
rule_id: 13db8d2e-7723-4c2c-93c1-a4d36994f7ef
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059.007, attack.t1105]
---

# Potential In-Memory Download And Compile Of Payloads

## Description
Detects potential in-memory downloading and compiling of applets using curl and osacompile as seen used by XCSSET malware

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - osacompile
  - curl
```

## MITRE ATT&CK
- T1059.007
- T1105

## False Positives
- Unknown

## References
- https://redcanary.com/blog/mac-application-bundles/

## Metadata
- **Author:** Sohan G (D4rkCiph3r), Red Canary (idea)
- **Date:** 2023-08-22
- **Rule ID:** `13db8d2e-7723-4c2c-93c1-a4d36994f7ef`
- **Source file:** `macos/process_creation/proc_creation_macos_susp_in_memory_download_and_compile.yml`
