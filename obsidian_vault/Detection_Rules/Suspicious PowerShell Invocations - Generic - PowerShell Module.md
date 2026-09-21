---
type: detection_rule
title: "Suspicious PowerShell Invocations - Generic - PowerShell Module"
rule_id: bbb80e91-5746-4fbe-8898-122e2cafdbf4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Invocations - Generic - PowerShell Module

## Description
Detects suspicious PowerShell invocation command parameters

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_encoded:
  ContextInfo|contains:
  - ' -enc '
  - ' -EncodedCommand '
  - ' -ec '
selection_hidden:
  ContextInfo|contains:
  - ' -w hidden '
  - ' -window hidden '
  - ' -windowstyle hidden '
  - ' -w 1 '
selection_noninteractive:
  ContextInfo|contains:
  - ' -noni '
  - ' -noninteractive '
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Very special / sneaky PowerShell scripts

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-12
- **Rule ID:** `bbb80e91-5746-4fbe-8898-122e2cafdbf4`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_invocation_generic.yml`
