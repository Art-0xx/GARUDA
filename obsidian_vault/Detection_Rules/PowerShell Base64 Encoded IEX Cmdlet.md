---
type: detection_rule
title: "PowerShell Base64 Encoded IEX Cmdlet"
rule_id: 88f680b8-070e-402c-ae11-d2914f2257f1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Base64 Encoded IEX Cmdlet

## Description
Detects usage of a base64 encoded "IEX" cmdlet in a process command line

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- CommandLine|base64offset|contains:
  - IEX ([
  - iex ([
  - iex (New
  - IEX (New
  - IEX([
  - iex([
  - iex(New
  - IEX(New
  - IEX(('
  - iex(('
- CommandLine|contains:
  - SQBFAFgAIAAoAFsA
  - kARQBYACAAKABbA
  - JAEUAWAAgACgAWw
  - aQBlAHgAIAAoAFsA
  - kAZQB4ACAAKABbA
  - pAGUAeAAgACgAWw
  - aQBlAHgAIAAoAE4AZQB3A
  - kAZQB4ACAAKABOAGUAdw
  - pAGUAeAAgACgATgBlAHcA
  - SQBFAFgAIAAoAE4AZQB3A
  - kARQBYACAAKABOAGUAdw
  - JAEUAWAAgACgATgBlAHcA
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-08-23
- **Rule ID:** `88f680b8-070e-402c-ae11-d2914f2257f1`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_iex.yml`
