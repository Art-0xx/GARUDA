---
type: detection_rule
title: "Invoke-Obfuscation Via Use MSHTA"
rule_id: ac20ae82-8758-4f38-958e-b44a3140ca88
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use MSHTA

## Description
Detects Obfuscated Powershell via use MSHTA in Scripts

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
  - set
  - '&&'
  - mshta
  - vbscript:createobject
  - .run
  - (window.close)
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-08
- **Rule ID:** `ac20ae82-8758-4f38-958e-b44a3140ca88`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_via_use_mhsta.yml`
