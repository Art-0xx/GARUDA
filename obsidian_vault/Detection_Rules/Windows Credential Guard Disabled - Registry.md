---
type: detection_rule
title: "Windows Credential Guard Disabled - Registry"
rule_id: 73921b9c-cafd-4446-b0c6-fdb0ace42bc0
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Credential Guard Disabled - Registry

## Description
Detects attempts to disable Windows Credential Guard by setting registry values to 0. Credential Guard uses virtualization-based security to isolate secrets so that only privileged system software can access them.
Adversaries may disable Credential Guard to gain access to sensitive credentials stored in the system, such as NTLM hashes and Kerberos tickets, which can be used for lateral movement and privilege escalation.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000000)
  TargetObject|endswith:
  - \DeviceGuard\EnableVirtualizationBasedSecurity
  - \DeviceGuard\LsaCfgFlags
  - \Lsa\LsaCfgFlags
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://woshub.com/disable-credential-guard-windows/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-26
- **Rule ID:** `73921b9c-cafd-4446-b0c6-fdb0ace42bc0`
- **Source file:** `windows/registry/registry_set/registry_set_credential_guard_disabled.yml`
