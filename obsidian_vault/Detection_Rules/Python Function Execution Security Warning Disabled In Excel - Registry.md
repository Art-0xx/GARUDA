---
type: detection_rule
title: "Python Function Execution Security Warning Disabled In Excel - Registry"
rule_id: 17e53739-a1fc-4a62-b1b9-87711c2d5e44
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Python Function Execution Security Warning Disabled In Excel - Registry

## Description
Detects changes to the registry value "PythonFunctionWarnings" that would prevent any warnings or alerts from showing when Python functions are about to be executed.
Threat actors could run malicious code through the new Microsoft Excel feature that allows Python to run within the spreadsheet.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000001)
  TargetObject|contains: \Microsoft\Office\
  TargetObject|endswith: \Excel\Security\PythonFunctionWarnings
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://support.microsoft.com/en-us/office/data-security-and-python-in-excel-33cc88a4-4a87-485e-9ff9-f35958278327

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), @Kostastsale
- **Date:** 2024-08-23
- **Rule ID:** `17e53739-a1fc-4a62-b1b9-87711c2d5e44`
- **Source file:** `windows/registry/registry_set/registry_set_office_disable_python_security_warnings.yml`
