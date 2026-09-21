---
type: detection_rule
title: "Credential Dumping Activity By Python Based Tool"
rule_id: f8be3e82-46a3-4e4e-ada5-8e538ae8b9c9
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Credential Dumping Activity By Python Based Tool

## Description
Detects LSASS process access for potential credential dumping by a Python-like tool such as LaZagne or Pypykatz.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains:
  - python27.dll+
  - python3*.dll+
  CallTrace|contains|all:
  - _ctypes.pyd+
  - :\Windows\System32\KERNELBASE.dll+
  - :\Windows\SYSTEM32\ntdll.dll+
  GrantedAccess: '0x1FFFFF'
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/bh4b3sh/status/1303674603819081728
- https://github.com/skelsec/pypykatz

## Metadata
- **Author:** Bhabesh Raj, Jonhnathan Ribeiro
- **Date:** 2023-11-27
- **Rule ID:** `f8be3e82-46a3-4e4e-ada5-8e538ae8b9c9`
- **Source file:** `windows/process_access/proc_access_win_lsass_python_based_tool.yml`
