---
type: detection_rule
title: "Wdigest Enable UseLogonCredential"
rule_id: d6a9b252-c666-4de6-8806-5561bbbd3bdc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Wdigest Enable UseLogonCredential

## Description
Detects potential malicious modification of the property value of UseLogonCredential from HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest to enable clear-text credentials

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
  TargetObject|endswith: WDigest\UseLogonCredential
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://threathunterplaybook.com/hunts/windows/190510-RegModWDigestDowngrade/notebook.html
- https://support.microsoft.com/en-us/topic/microsoft-security-advisory-update-to-improve-credentials-protection-and-management-may-13-2014-93434251-04ac-b7f3-52aa-9f951c14b649
- https://github.com/redcanaryco/atomic-red-team/blob/73fcfa1d4863f6a4e17f90e54401de6e30a312bb/atomics/T1112/T1112.md#atomic-test-3---modify-registry-to-store-logon-credentials

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2019-09-12
- **Rule ID:** `d6a9b252-c666-4de6-8806-5561bbbd3bdc`
- **Source file:** `windows/registry/registry_set/registry_set_wdigest_enable_uselogoncredential.yml`
