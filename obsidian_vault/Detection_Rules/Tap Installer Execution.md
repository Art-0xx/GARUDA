---
type: detection_rule
title: "Tap Installer Execution"
rule_id: 99793437-3e16-439b-be0f-078782cf953d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048]
---

# Tap Installer Execution

## Description
Well-known TAP software installation. Possible preparation for data exfiltration using tunneling techniques

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_avast:
  Image|contains:
  - :\Program Files\Avast Software\SecureLine VPN\
  - :\Program Files (x86)\Avast Software\SecureLine VPN\
filter_optional_openvpn:
  Image|contains: :\Program Files\OpenVPN Connect\drivers\tap\
filter_optional_protonvpn:
  Image|contains: :\Program Files (x86)\Proton Technologies\ProtonVPNTap\installer\
selection:
  Image|endswith: \tapinstall.exe
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
- **Rule ID:** `99793437-3e16-439b-be0f-078782cf953d`
- **Source file:** `windows/process_creation/proc_creation_win_tapinstall_execution.yml`
