---
type: detection_rule
title: "Uncommon Outbound Kerberos Connection - Security"
rule_id: eca91c7c-9214-47b9-b4c5-cb1d7e4f2350
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558.003]
---

# Uncommon Outbound Kerberos Connection - Security

## Description
Detects uncommon outbound network activity via Kerberos default port indicating possible lateral movement or first stage PrivEsc via delegation.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_lsass:
  Application|endswith: \Windows\System32\lsass.exe
  Application|startswith:
  - \device\harddiskvolume
  - 'C:'
filter_optional_chrome:
  Application|endswith:
  - \Program Files (x86)\Google\Chrome\Application\chrome.exe
  - \Program Files\Google\Chrome\Application\chrome.exe
  Application|startswith:
  - \device\harddiskvolume
  - 'C:'
filter_optional_firefox:
  Application|endswith:
  - \Program Files (x86)\Mozilla Firefox\firefox.exe
  - \Program Files\Mozilla Firefox\firefox.exe
  Application|startswith:
  - \device\harddiskvolume
  - 'C:'
filter_optional_tomcat:
  Application|endswith: \tomcat\bin\tomcat8.exe
selection:
  DestPort: 88
  EventID: 5156
```

## MITRE ATT&CK
- T1558.003

## False Positives
- Web Browsers and third party application might generate similar activity. An initial baseline is required.

## References
- https://github.com/GhostPack/Rubeus

## Metadata
- **Author:** Ilyas Ochkov, oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `eca91c7c-9214-47b9-b4c5-cb1d7e4f2350`
- **Source file:** `windows/builtin/security/win_security_susp_outbound_kerberos_connection.yml`
