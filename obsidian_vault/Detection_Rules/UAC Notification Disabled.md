---
type: detection_rule
title: "UAC Notification Disabled"
rule_id: c5f6a85d-b647-40f7-bbad-c10b66bab038
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Notification Disabled

## Description
Detects when an attacker tries to disable User Account Control (UAC) notification by tampering with the "UACDisableNotify" value.
UAC is a critical security feature in Windows that prevents unauthorized changes to the operating system. It prompts the user for permission or an administrator password before allowing actions that could affect the system's operation or change settings that affect other users.
When "UACDisableNotify" is set to 1, UAC prompts are suppressed.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000001)
  TargetObject|contains: \Microsoft\Security Center\UACDisableNotify
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/7e11e9b79583545f208a6dc3fa062f2ed443d999/atomics/T1548.002/T1548.002.md
- https://securityintelligence.com/x-force/x-force-hive0129-targeting-financial-institutions-latam-banking-trojan/

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-05-10
- **Rule ID:** `c5f6a85d-b647-40f7-bbad-c10b66bab038`
- **Source file:** `windows/registry/registry_set/registry_set_uac_disable_notification.yml`
