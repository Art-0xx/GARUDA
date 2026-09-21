---
type: detection_rule
title: "Base64 Encoded PowerShell Command Detected"
rule_id: e32d4572-9826-4738-b651-95fa63747e8a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1140, attack.t1059.001]
---

# Base64 Encoded PowerShell Command Detected

## Description
Detects usage of the "FromBase64String" function in the commandline which is used to decode a base64 encoded string

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ::FromBase64String(
```

## MITRE ATT&CK
- T1027
- T1140
- T1059.001

## False Positives
- Administrative script libraries

## References
- https://gist.github.com/Neo23x0/6af876ee72b51676c82a2db8d2cd3639

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-01-29
- **Rule ID:** `e32d4572-9826-4738-b651-95fa63747e8a`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_frombase64string.yml`
