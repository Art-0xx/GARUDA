---
type: detection_rule
title: "Kerberoasting Activity - Initial Query"
rule_id: d04ae2b8-ad54-4de0-bd87-4bc1da66aa59
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558.003]
---

# Kerberoasting Activity - Initial Query

## Description
This rule will collect the data needed to start looking into possible kerberoasting activity.
Further analysis or computation within the query is needed focusing on requests from one specific host/IP towards multiple service names within a time period of 5 seconds.
You can then set a threshold for the number of requests and time between the requests to turn this into an alert.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_krbtgt:
  ServiceName|endswith:
  - krbtgt
  - $
filter_main_machine_accounts:
  TargetUserName|contains: $@
selection:
  EventID: 4769
  Status: '0x0'
  TicketEncryptionType: '0x17'
```

## MITRE ATT&CK
- T1558.003

## False Positives
- Legacy applications.

## References
- https://www.trustedsec.com/blog/art_of_kerberoast/
- https://adsecurity.org/?p=3513

## Metadata
- **Author:** @kostastsale
- **Date:** 2022-01-21
- **Rule ID:** `d04ae2b8-ad54-4de0-bd87-4bc1da66aa59`
- **Source file:** `windows/builtin/security/win_security_kerberoasting_activity.yml`
