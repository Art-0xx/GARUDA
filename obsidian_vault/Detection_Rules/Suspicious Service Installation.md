---
type: detection_rule
title: "Suspicious Service Installation"
rule_id: 1d61f71d-59d2-479e-9562-4ff5f4ead16b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Suspicious Service Installation

## Description
Detects suspicious service installation commands

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
  ImagePath|contains:
  - ' -nop '
  - ' -sta '
  - ' -w hidden '
  - :\Temp\
  - .downloadfile(
  - .downloadstring(
  - \ADMIN$\
  - \Perflogs\
  - '&&'
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** pH-T (Nextron Systems), Florian Roth (Nextron Systems)
- **Date:** 2022-03-18
- **Rule ID:** `1d61f71d-59d2-479e-9562-4ff5f4ead16b`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_service_install_susp.yml`
