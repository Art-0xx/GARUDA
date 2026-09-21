---
type: detection_rule
title: "Password Dumper Activity on LSASS"
rule_id: aa1697b7-d611-4f9a-9cb2-5125b4ccfd5c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Password Dumper Activity on LSASS

## Description
Detects process handle on LSASS process with certain access mask and object type SAM_DOMAIN

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  AccessMask: '0x705'
  EventID: 4656
  ObjectType: SAM_DOMAIN
  ProcessName|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/jackcr/status/807385668833968128

## Metadata
- **Author:** sigma
- **Date:** 2017-02-12
- **Rule ID:** `aa1697b7-d611-4f9a-9cb2-5125b4ccfd5c`
- **Source file:** `windows/builtin/security/win_security_susp_lsass_dump.yml`
