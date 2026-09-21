---
type: detection_rule
title: "Unsigned Binary Loaded From Suspicious Location"
rule_id: 8289bf8c-4aca-4f5a-9db3-dc3d7afe5c10
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Unsigned Binary Loaded From Suspicious Location

## Description
Detects Code Integrity (CI) engine blocking processes from loading unsigned DLLs residing in suspicious locations

## Log Source
```yaml
product: windows
service: security-mitigations
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID:
  - 11
  - 12
  ImageName|contains:
  - \Users\Public\
  - \PerfLogs\
  - \Desktop\
  - \Downloads\
  - \AppData\Local\Temp\
  - C:\Windows\TEMP\
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://github.com/nasbench/EVTX-ETW-Resources/blob/45fd5be71a51aa518b1b36d4e1f36af498084e27/ETWEventsList/CSV/Windows11/21H2/W11_21H2_Pro_20220719_22000.795/Providers/Microsoft-Windows-Security-Mitigations.csv

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-03
- **Rule ID:** `8289bf8c-4aca-4f5a-9db3-dc3d7afe5c10`
- **Source file:** `windows/builtin/security_mitigations/win_security_mitigations_unsigned_dll_from_susp_location.yml`
