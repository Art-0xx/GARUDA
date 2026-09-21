---
type: detection_rule
title: "Suspicious Environment Variable Has Been Registered"
rule_id: 966315ef-c5e1-4767-ba25-fce9c8de3660
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Environment Variable Has Been Registered

## Description
Detects the creation of user-specific or system-wide environment variables via the registry. Which contains suspicious commands and strings

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_details:
- Details:
  - powershell
  - pwsh
- Details|contains:
  - \AppData\Local\Temp\
  - C:\Users\Public\
  - TVqQAAMAAAAEAAAA
  - TVpQAAIAAAAEAA8A
  - TVqAAAEAAAAEABAA
  - TVoAAAAAAAAAAAAA
  - TVpTAQEAAAAEAAAA
  - SW52b2tlL
  - ludm9rZS
  - JbnZva2Ut
  - SQBuAHYAbwBrAGUALQ
  - kAbgB2AG8AawBlAC0A
  - JAG4AdgBvAGsAZQAtA
- Details|startswith:
  - SUVY
  - SQBFAF
  - SQBuAH
  - cwBhA
  - aWV4
  - aQBlA
  - R2V0
  - dmFy
  - dgBhA
  - dXNpbm
  - H4sIA
  - Y21k
  - cABhAH
  - Qzpc
  - Yzpc
selection_main:
  TargetObject|contains: \Environment\
```

## False Positives
- Unknown

## References
- https://infosec.exchange/@sbousseaden/109542254124022664

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-20
- **Rule ID:** `966315ef-c5e1-4767-ba25-fce9c8de3660`
- **Source file:** `windows/registry/registry_set/registry_set_suspicious_env_variables.yml`
