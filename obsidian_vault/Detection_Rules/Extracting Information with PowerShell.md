---
type: detection_rule
title: "Extracting Information with PowerShell"
rule_id: bd5971a7-626d-46ab-8176-ed643f694f68
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.001]
---

# Extracting Information with PowerShell

## Description
Adversaries may search local file systems and remote file shares for files containing insecurely stored credentials.
These can be files created by users to store their own credentials, shared credential stores for a group of individuals,
configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.

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
  ScriptBlockText|contains|all:
  - ls
  - ' -R'
  - 'select-string '
  - '-Pattern '
```

## MITRE ATT&CK
- T1552.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.001/T1552.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-19
- **Rule ID:** `bd5971a7-626d-46ab-8176-ed643f694f68`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_extracting.yml`
