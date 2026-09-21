---
type: detection_rule
title: "Suspicious Printer Driver Empty Manufacturer"
rule_id: e0813366-0407-449a-9869-a2db1119dc41
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574]
---

# Suspicious Printer Driver Empty Manufacturer

## Description
Detects a suspicious printer driver installation with an empty Manufacturer value

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_cutepdf:
  TargetObject|contains: \CutePDF Writer v4.0\
filter_pdf24:
  TargetObject|contains: \Version-3\PDF24\
filter_vnc:
  TargetObject|contains:
  - \VNC Printer (PS)\
  - \VNC Printer (UD)\
selection:
  Details: (Empty)
  TargetObject|contains|all:
  - \Control\Print\Environments\Windows x64\Drivers
  - \Manufacturer
```

## MITRE ATT&CK
- T1574

## False Positives
- Alerts on legitimate printer drivers that do not set any more details in the Manufacturer value

## References
- https://twitter.com/SBousseaden/status/1410545674773467140

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-07-01
- **Rule ID:** `e0813366-0407-449a-9869-a2db1119dc41`
- **Source file:** `windows/registry/registry_set/registry_set_susp_printer_driver.yml`
