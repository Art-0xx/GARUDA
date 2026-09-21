---
type: detection_rule
title: "Uncommon Outbound Kerberos Connection"
rule_id: e54979bd-c5f9-4d6c-967b-a04b19ac4c74
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558, attack.t1550.003]
---

# Uncommon Outbound Kerberos Connection

## Description
Detects uncommon outbound network activity via Kerberos default port indicating possible lateral movement or first stage PrivEsc via delegation.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_lsass:
  Image: C:\Windows\System32\lsass.exe
filter_optional_chrome:
  Image:
  - C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
  - C:\Program Files\Google\Chrome\Application\chrome.exe
filter_optional_firefox:
  Image:
  - C:\Program Files (x86)\Mozilla Firefox\firefox.exe
  - C:\Program Files\Mozilla Firefox\firefox.exe
filter_optional_tomcat:
  Image|endswith: \tomcat\bin\tomcat8.exe
selection:
  DestinationPort: 88
  Initiated: 'true'
```

## MITRE ATT&CK
- T1558
- T1550.003

## False Positives
- Web Browsers and third party application might generate similar activity. An initial baseline is required.

## References
- https://github.com/GhostPack/Rubeus

## Metadata
- **Author:** Ilyas Ochkov, oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `e54979bd-c5f9-4d6c-967b-a04b19ac4c74`
- **Source file:** `windows/network_connection/net_connection_win_susp_outbound_kerberos_connection.yml`
