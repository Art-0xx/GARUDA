---
type: detection_rule
title: "Powershell Timestomp"
rule_id: c6438007-e081-42ce-9483-b067fbef33c3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.006]
---

# Powershell Timestomp

## Description
Adversaries may modify file time attributes to hide new or changes to existing files.
Timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_ioc
selection_ioc:
  ScriptBlockText|contains:
  - .CreationTime =
  - .LastWriteTime =
  - .LastAccessTime =
  - '[IO.File]::SetCreationTime'
  - '[IO.File]::SetLastAccessTime'
  - '[IO.File]::SetLastWriteTime'
```

## MITRE ATT&CK
- T1070.006

## False Positives
- Legitimate admin script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.006/T1070.006.md
- https://www.offensive-security.com/metasploit-unleashed/timestomp/

## Metadata
- **Author:** frack113
- **Date:** 2021-08-03
- **Rule ID:** `c6438007-e081-42ce-9483-b067fbef33c3`
- **Source file:** `windows/powershell/powershell_script/posh_ps_timestomp.yml`
