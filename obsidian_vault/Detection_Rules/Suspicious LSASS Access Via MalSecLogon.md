---
type: detection_rule
title: "Suspicious LSASS Access Via MalSecLogon"
rule_id: 472159c5-31b9-4f56-b794-b766faa8b0a7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Suspicious LSASS Access Via MalSecLogon

## Description
Detects suspicious access to LSASS handle via a call trace to "seclogon.dll" with a suspicious access right.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains: seclogon.dll
  GrantedAccess: '0x14c0'
  SourceImage|endswith: \svchost.exe
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://twitter.com/SBousseaden/status/1541920424635912196
- https://github.com/elastic/detection-rules/blob/2bc1795f3d7bcc3946452eb4f07ae799a756d94e/rules/windows/credential_access_lsass_handle_via_malseclogon.toml
- https://splintercod3.blogspot.com/p/the-hidden-side-of-seclogon-part-3.html

## Metadata
- **Author:** Samir Bousseaden (original elastic rule), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-29
- **Rule ID:** `472159c5-31b9-4f56-b794-b766faa8b0a7`
- **Source file:** `windows/process_access/proc_access_win_lsass_seclogon_access.yml`
