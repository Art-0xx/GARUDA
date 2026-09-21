---
type: detection_rule
title: "Suspicious Outbound SMTP Connections"
rule_id: 9976fa64-2804-423c-8a5b-646ade840773
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048.003]
---

# Suspicious Outbound SMTP Connections

## Description
Adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel.
The data may also be sent to an alternate network location from the main command and control server.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_clients:
  Image|endswith:
  - \thunderbird.exe
  - \outlook.exe
filter_mailserver:
  Image|startswith: C:\Program Files\Microsoft\Exchange Server\
filter_outlook:
  Image|endswith: \HxTsr.exe
  Image|startswith: C:\Program Files\WindowsApps\microsoft.windowscommunicationsapps_
selection:
  DestinationPort:
  - 25
  - 587
  - 465
  - 2525
  Initiated: 'true'
```

## MITRE ATT&CK
- T1048.003

## False Positives
- Other SMTP tools

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1048.003/T1048.003.md#atomic-test-5---exfiltration-over-alternative-protocol---smtp
- https://www.ietf.org/rfc/rfc2821.txt

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `9976fa64-2804-423c-8a5b-646ade840773`
- **Source file:** `windows/network_connection/net_connection_win_susp_outbound_smtp_connections.yml`
