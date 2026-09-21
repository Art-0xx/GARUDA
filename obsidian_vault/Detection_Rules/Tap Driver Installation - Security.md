---
type: detection_rule
title: "Tap Driver Installation - Security"
rule_id: 9c8afa4d-0022-48f0-9456-3712466f9701
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048]
---

# Tap Driver Installation - Security

## Description
Detects the installation of a well-known TAP driver service. This could be a sign of potential preparation for data exfiltration using tunnelling techniques.

## Log Source
```yaml
definition: 'Requirements: The System Security Extension audit subcategory need to
  be enabled to log the EID 4697'
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4697
  ServiceFileName|contains: tap0901
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
- **Rule ID:** `9c8afa4d-0022-48f0-9456-3712466f9701`
- **Source file:** `windows/builtin/security/win_security_tap_driver_installation.yml`
