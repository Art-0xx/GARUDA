---
type: detection_rule
title: "PowerShell Credential Prompt"
rule_id: ca8b77a9-d499-4095-b793-5d5f330d450e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Credential Prompt

## Description
Detects PowerShell calling a credential prompt

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
  ScriptBlockText|contains: PromptForCredential
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://twitter.com/JohnLaTwC/status/850381440629981184
- https://t.co/ezOTGy1a1G

## Metadata
- **Author:** John Lambert (idea), Florian Roth (Nextron Systems)
- **Date:** 2017-04-09
- **Rule ID:** `ca8b77a9-d499-4095-b793-5d5f330d450e`
- **Source file:** `windows/powershell/powershell_script/posh_ps_prompt_credentials.yml`
