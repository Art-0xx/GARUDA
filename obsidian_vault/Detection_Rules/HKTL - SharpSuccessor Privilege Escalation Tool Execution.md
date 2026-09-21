---
type: detection_rule
title: "HKTL - SharpSuccessor Privilege Escalation Tool Execution"
rule_id: 38a1ac5f-9c74-47d2-a345-dd6f5eb4e7c8
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1068]
---

# HKTL - SharpSuccessor Privilege Escalation Tool Execution

## Description
Detects the execution of SharpSuccessor, a tool used to exploit the BadSuccessor attack for privilege escalation in WinServer 2025 Active Directory environments.
Successful usage of this tool can let the attackers gain the domain admin privileges by exploiting the BadSuccessor vulnerability.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \SharpSuccessor.exe
- OriginalFileName: SharpSuccessor.exe
- CommandLine|contains: SharpSuccessor
- CommandLine|contains|all:
  - ' add '
  - ' /impersonate'
  - ' /path'
  - ' /account'
  - ' /name'
```

## MITRE ATT&CK
- T1068

## False Positives
- Unknown

## References
- https://github.com/logangoins/SharpSuccessor

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-06-06
- **Rule ID:** `38a1ac5f-9c74-47d2-a345-dd6f5eb4e7c8`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_sharpsuccessor_execution.yml`
