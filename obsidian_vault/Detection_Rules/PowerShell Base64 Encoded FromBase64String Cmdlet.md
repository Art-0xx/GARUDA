---
type: detection_rule
title: "PowerShell Base64 Encoded FromBase64String Cmdlet"
rule_id: fdb62a13-9a81-4e5c-a38f-ea93a16f6d7c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1140, attack.t1059.001]
---

# PowerShell Base64 Encoded FromBase64String Cmdlet

## Description
Detects usage of a base64 encoded "FromBase64String" cmdlet in a process command line

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- CommandLine|base64offset|contains: ::FromBase64String
- CommandLine|contains:
  - OgA6AEYAcgBvAG0AQgBhAHMAZQA2ADQAUwB0AHIAaQBuAGcA
  - oAOgBGAHIAbwBtAEIAYQBzAGUANgA0AFMAdAByAGkAbgBnA
  - 6ADoARgByAG8AbQBCAGEAcwBlADYANABTAHQAcgBpAG4AZw
```

## MITRE ATT&CK
- T1140
- T1059.001

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-08-24
- **Rule ID:** `fdb62a13-9a81-4e5c-a38f-ea93a16f6d7c`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_frombase64string.yml`
