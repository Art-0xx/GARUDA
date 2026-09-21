---
type: detection_rule
title: "Suspicious Unsigned Thor Scanner Execution"
rule_id: ea5c131b-380d-49f9-aeb3-920694da4d4b
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Suspicious Unsigned Thor Scanner Execution

## Description
Detects loading and execution of an unsigned thor scanner binary.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter_main
filter_main:
  Signature: Nextron Systems GmbH
  SignatureStatus: valid
  Signed: 'true'
selection:
  ImageLoaded|endswith:
  - \thor.exe
  - \thor64.exe
  Image|endswith:
  - \thor.exe
  - \thor64.exe
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Other legitimate binaries named "thor.exe" that aren't published by Nextron Systems

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-10-29
- **Rule ID:** `ea5c131b-380d-49f9-aeb3-920694da4d4b`
- **Source file:** `windows/image_load/image_load_thor_unsigned_execution.yml`
