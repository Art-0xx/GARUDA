---
type: detection_rule
title: "Potential Persistence Via Security Descriptors - ScriptBlock"
rule_id: 2f77047c-e6e9-4c11-b088-a3de399524cd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via Security Descriptors - ScriptBlock

## Description
Detects usage of certain functions and keywords that are used to manipulate security descriptors in order to potentially set a backdoor. As seen used in the DAMP project.

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
  - \Lsa\JD
  - \Lsa\Skew1
  - \Lsa\Data
  - \Lsa\GBG
  ScriptBlockText|contains|all:
  - win32_Trustee
  - win32_Ace
  - .AccessMask
  - .AceType
  - .SetSecurityDescriptor
```

## False Positives
- Unknown

## References
- https://github.com/HarmJ0y/DAMP

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-05
- **Rule ID:** `2f77047c-e6e9-4c11-b088-a3de399524cd`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_ace_tampering.yml`
