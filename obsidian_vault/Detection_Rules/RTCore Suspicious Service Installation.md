---
type: detection_rule
title: "RTCore Suspicious Service Installation"
rule_id: 91c49341-e2ef-40c0-ac45-49ec5c3fe26c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# RTCore Suspicious Service Installation

## Description
Detects the installation of RTCore service. Which could be an indication of Micro-Star MSI Afterburner vulnerable driver abuse

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 7045
  Provider_Name: Service Control Manager
  ServiceName: RTCore64
```

## False Positives
- Unknown

## References
- https://github.com/br-sn/CheekyBlinder/blob/e1764a8a0e7cda8a3716aefa35799f560686e01c/CheekyBlinder/CheekyBlinder.cpp

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-30
- **Rule ID:** `91c49341-e2ef-40c0-ac45-49ec5c3fe26c`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_susp_rtcore64_service_install.yml`
