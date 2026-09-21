---
type: detection_rule
title: "Network Connection Initiated To Mega.nz"
rule_id: fdeebdf0-9f3f-4d08-84a6-4c4d13e39fe4
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# Network Connection Initiated To Mega.nz

## Description
Detects a network connection initiated by a binary to "api.mega.co.nz".
Attackers were seen abusing file sharing websites similar to "mega.nz" in order to upload/download additional payloads.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|endswith:
  - mega.co.nz
  - mega.nz
  Initiated: 'true'
```

## MITRE ATT&CK
- T1567.002

## False Positives
- Legitimate MEGA installers and utilities are expected to communicate with this domain. Exclude hosts that are known to be allowed to use this tool.

## References
- https://megatools.megous.com/
- https://www.mandiant.com/resources/russian-targeting-gov-business

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-12-06
- **Rule ID:** `fdeebdf0-9f3f-4d08-84a6-4c4d13e39fe4`
- **Source file:** `windows/network_connection/net_connection_win_domain_mega_nz.yml`
