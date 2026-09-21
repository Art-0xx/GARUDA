---
type: detection_rule
title: "AMSI Disabled via Registry Modification"
rule_id: aa37cbb0-da36-42cb-a90f-fdf216fc7467
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# AMSI Disabled via Registry Modification

## Description
Detects attempts to disable AMSI (Anti-Malware Scan Interface) by modifying the AmsiEnable registry value.
Anti-Malware Scan Interface (AMSI) is a security feature in Windows that allows applications and services to integrate with anti-malware products for enhanced protection against malicious content.
Adversaries may attempt to disable AMSI to evade detection by security software, allowing them to execute malicious scripts or code without being scanned.

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
  TargetObject|endswith: \Software\Microsoft\Windows Script\Settings\AmsiEnable
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://mostafayahiax.medium.com/hunting-for-amsi-bypassing-methods-9886dda0bf9d
- https://docs.microsoft.com/en-us/windows/win32/amsi/antimalware-scan-interface-portal
- https://www.mdsec.co.uk/2019/02/macros-and-more-with-sharpshooter-v2-0/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-25
- **Rule ID:** `aa37cbb0-da36-42cb-a90f-fdf216fc7467`
- **Source file:** `windows/registry/registry_set/registry_set_amsi_disable.yml`
