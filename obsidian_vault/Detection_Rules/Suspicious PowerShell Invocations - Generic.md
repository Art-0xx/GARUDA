---
type: detection_rule
title: "Suspicious PowerShell Invocations - Generic"
rule_id: ed965133-513f-41d9-a441-e38076a0798f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Invocations - Generic

## Description
Detects suspicious PowerShell invocation command parameters

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_encoded:
  ScriptBlockText|contains:
  - ' -enc '
  - ' -EncodedCommand '
  - ' -ec '
selection_hidden:
  ScriptBlockText|contains:
  - ' -w hidden '
  - ' -window hidden '
  - ' -windowstyle hidden '
  - ' -w 1 '
selection_noninteractive:
  ScriptBlockText|contains:
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
- **Rule ID:** `ed965133-513f-41d9-a441-e38076a0798f`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_invocation_generic.yml`
