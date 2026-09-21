---
type: detection_rule
title: "Suspicious Remote Logon with Explicit Credentials"
rule_id: 941e5c45-cda7-4864-8cea-bbb7458d194a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078]
---

# Suspicious Remote Logon with Explicit Credentials

## Description
Detects suspicious processes logging on with explicit credentials

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter*
filter1:
  TargetServerName: localhost
filter2:
  SubjectUserName|endswith: $
  TargetUserName|endswith: $
selection:
  EventID: 4648
  ProcessName|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \winrs.exe
  - \wmic.exe
  - \net.exe
  - \net1.exe
  - \reg.exe
```

## MITRE ATT&CK
- T1078

## False Positives
- Administrators that use the RunAS command or scheduled tasks

## References
- https://drive.google.com/file/d/1lKya3_mLnR3UQuCoiYruO3qgu052_iS_/view

## Metadata
- **Author:** oscd.community, Teymur Kheirkhabarov @HeirhabarovT, Zach Stanford @svch0st, Tim Shelton
- **Date:** 2020-10-05
- **Rule ID:** `941e5c45-cda7-4864-8cea-bbb7458d194a`
- **Source file:** `windows/builtin/security/win_security_susp_logon_explicit_credentials.yml`
