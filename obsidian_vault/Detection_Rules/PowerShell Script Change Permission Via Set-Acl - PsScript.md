---
type: detection_rule
title: "PowerShell Script Change Permission Via Set-Acl - PsScript"
rule_id: cae80281-ef23-44c5-873b-fd48d2666f49
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1222]
---

# PowerShell Script Change Permission Via Set-Acl - PsScript

## Description
Detects PowerShell scripts set ACL to of a file or a folder

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - 'Set-Acl '
  - '-AclObject '
  - '-Path '
```

## MITRE ATT&CK
- T1222

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/74438b0237d141ee9c99747976447dc884cb1a39/atomics/T1505.005/T1505.005.md

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-18
- **Rule ID:** `cae80281-ef23-44c5-873b-fd48d2666f49`
- **Source file:** `windows/powershell/powershell_script/posh_ps_set_acl.yml`
