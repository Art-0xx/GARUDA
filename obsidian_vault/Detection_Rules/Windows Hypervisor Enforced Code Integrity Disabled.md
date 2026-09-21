---
type: detection_rule
title: "Windows Hypervisor Enforced Code Integrity Disabled"
rule_id: 8b7273a4-ba5d-4d8a-b04f-11f2900d043a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Hypervisor Enforced Code Integrity Disabled

## Description
Detects changes to the HypervisorEnforcedCodeIntegrity registry key and the "Enabled" value being set to 0 in order to disable the Hypervisor Enforced Code Integrity feature. This allows an attacker to load unsigned and untrusted code to be run in the kernel

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
  - \Control\DeviceGuard\HypervisorEnforcedCodeIntegrity
  - \Control\DeviceGuard\Scenarios\HypervisorEnforcedCodeIntegrity\Enabled
  - \Microsoft\Windows\DeviceGuard\HypervisorEnforcedCodeIntegrity
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate system administration tasks that require disabling HVCI for troubleshooting purposes when certain drivers or applications are incompatible with it.

## References
- https://www.welivesecurity.com/2023/03/01/blacklotus-uefi-bootkit-myth-confirmed/
- https://github.com/redcanaryco/atomic-red-team/blob/04e487c1828d76df3e834621f4f893ea756d5232/atomics/T1562.001/T1562.001.md#atomic-test-43---disable-hypervisor-enforced-code-integrity-hvci

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Anish Bogati
- **Date:** 2023-03-14
- **Rule ID:** `8b7273a4-ba5d-4d8a-b04f-11f2900d043a`
- **Source file:** `windows/registry/registry_set/registry_set_deviceguard_hypervisorenforcedcodeintegrity_disabled.yml`
