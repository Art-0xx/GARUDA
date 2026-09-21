---
type: detection_rule
title: "HackTool - Stracciatella Execution"
rule_id: 7a4d9232-92fc-404d-8ce1-4c92e7caf539
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1685]
---

# HackTool - Stracciatella Execution

## Description
Detects Stracciatella which executes a Powershell runspace from within C# (aka SharpPick technique) with AMSI, ETW and Script Block Logging disabled based on PE metadata characteristics.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \Stracciatella.exe
- OriginalFileName: Stracciatella.exe
- Description: Stracciatella
- Hashes|contains:
  - SHA256=9d25e61ec1527e2a69d7c2a4e3fe2fe15890710c198a66a9f25d99fdf6c7b956
  - SHA256=fd16609bd9830c63b9413671678bb159b89c357d21942ddbb6b93add808d121a
```

## MITRE ATT&CK
- T1059
- T1685

## False Positives
- Unlikely

## References
- https://github.com/mgeeky/Stracciatella

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2023-04-17
- **Rule ID:** `7a4d9232-92fc-404d-8ce1-4c92e7caf539`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_stracciatella_execution.yml`
