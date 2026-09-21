---
type: detection_rule
title: "Tap Driver Installation"
rule_id: 8e4cf0e5-aa5d-4dc3-beff-dc26917744a9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048]
---

# Tap Driver Installation

## Description
Well-known TAP software installation. Possible preparation for data exfiltration using tunnelling techniques

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
  ImagePath|contains: tap0901
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1048

## False Positives
- Legitimate OpenVPN TAP installation

## References
- https://community.openvpn.net/openvpn/wiki/ManagingWindowsTAPDrivers

## Metadata
- **Author:** Daniil Yugoslavskiy, Ian Davis, oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `8e4cf0e5-aa5d-4dc3-beff-dc26917744a9`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_service_install_tap_driver.yml`
