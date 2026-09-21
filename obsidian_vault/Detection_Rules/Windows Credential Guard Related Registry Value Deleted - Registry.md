---
type: detection_rule
title: "Windows Credential Guard Related Registry Value Deleted - Registry"
rule_id: d645ef86-2396-48a1-a2b6-b629ca3f57ff
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Credential Guard Related Registry Value Deleted - Registry

## Description
Detects attempts to disable Windows Credential Guard by deleting registry values. Credential Guard uses virtualization-based security to isolate secrets so that only privileged system software can access them.
Adversaries may disable Credential Guard to gain access to sensitive credentials stored in the system, such as NTLM hashes and Kerberos tickets, which can be used for lateral movement and privilege escalation.

## Log Source
```yaml
category: registry_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith:
  - \DeviceGuard\EnableVirtualizationBasedSecurity
  - \DeviceGuard\LsaCfgFlags
  - \DeviceGuard\RequirePlatformSecurityFeatures
  - \Lsa\LsaCfgFlags
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://github.com/DambergC/SaveFolder/blob/90e945eba80fae85f2d54b4616e05a44ec90c500/Cygate%20Installation%20tool%206.22/Script/OSD/OSDeployment-CredentialGuardDisable.ps1#L50
- https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/configure

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-26
- **Rule ID:** `d645ef86-2396-48a1-a2b6-b629ca3f57ff`
- **Source file:** `windows/registry/registry_delete/registry_delete_disable_credential_guard.yml`
