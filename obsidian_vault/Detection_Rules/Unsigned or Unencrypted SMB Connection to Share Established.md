---
type: detection_rule
title: "Unsigned or Unencrypted SMB Connection to Share Established"
rule_id: 8d91f6e4-9f3b-4c21-ae41-2c5b7d9f7a12
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002]
---

# Unsigned or Unencrypted SMB Connection to Share Established

## Description
Detects SMB server connections to shares without signing or encryption enabled.
This could indicate potential lateral movement activity using unsecured SMB shares.

## Log Source
```yaml
product: windows
service: smbserver-connectivity
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_local_ips:
- ClientAddress|cidr:
  - 127.0.0.0/8
  - 169.254.0.0/16
  - ::1/128
  - fe80::/10
  - fc00::/7
- ClientAddress|contains:
  - '00000000000000000000000000000001'
  - FE80000000000000
  - FC00000000000000
  - 0200????7F
  - 0200????A9FE
selection_shares:
  EventID: 4000
  ShareName|contains:
  - IPC$
  - ADMIN$
  - C$
selection_status:
- SigningUsed: 'false'
- EncyptionUsed: 'false'
```

## MITRE ATT&CK
- T1021.002

## False Positives
- Connections from local or private IP addresses to SMB shares without signing or encryption enabled for older systems or misconfigured environments. Apply additional tuning as needed.

## References
- https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/overview-server-message-block-signing

## Metadata
- **Author:** Mohamed Abdelghani
- **Date:** 2025-10-19
- **Rule ID:** `8d91f6e4-9f3b-4c21-ae41-2c5b7d9f7a12`
- **Source file:** `windows/builtin/smbserver/connectivity/win_smbserver_connectivity_unsigned_and_unencrypted_share_connection.yml`
