---
type: detection_rule
title: "Python Function Execution Security Warning Disabled In Excel"
rule_id: 023c654f-8f16-44d9-bb2b-00ff36a62af9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Python Function Execution Security Warning Disabled In Excel

## Description
Detects changes to the registry value "PythonFunctionWarnings" that would prevent any warnings or alerts from showing when Python functions are about to be executed.
Threat actors could run malicious code through the new Microsoft Excel feature that allows Python to run within the spreadsheet.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' 0'
  CommandLine|contains|all:
  - \Microsoft\Office\
  - \Excel\Security
  - PythonFunctionWarnings
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://support.microsoft.com/en-us/office/data-security-and-python-in-excel-33cc88a4-4a87-485e-9ff9-f35958278327

## Metadata
- **Author:** @Kostastsale
- **Date:** 2023-08-22
- **Rule ID:** `023c654f-8f16-44d9-bb2b-00ff36a62af9`
- **Source file:** `windows/process_creation/proc_creation_win_registry_office_disable_python_security_warnings.yml`
