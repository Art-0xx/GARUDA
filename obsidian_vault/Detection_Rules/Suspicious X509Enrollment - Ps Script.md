---
type: detection_rule
title: "Suspicious X509Enrollment - Ps Script"
rule_id: 504d63cb-0dba-4d02-8531-e72981aace2c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.004]
---

# Suspicious X509Enrollment - Ps Script

## Description
Detect use of X509Enrollment

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - X509Enrollment.CBinaryConverter
  - 884e2002-217d-11da-b2a4-000e7bbb2b09
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Legitimate administrative script

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=42
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=41
- https://learn.microsoft.com/en-us/dotnet/api/microsoft.hpc.scheduler.store.cx509enrollmentwebclassfactoryclass?view=hpc-sdk-5.1.6115

## Metadata
- **Author:** frack113
- **Date:** 2022-12-23
- **Rule ID:** `504d63cb-0dba-4d02-8531-e72981aace2c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_x509enrollment.yml`
