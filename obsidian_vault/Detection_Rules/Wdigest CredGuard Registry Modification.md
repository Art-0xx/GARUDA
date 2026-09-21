---
type: detection_rule
title: "Wdigest CredGuard Registry Modification"
rule_id: 1a2d6c47-75b0-45bd-b133-2c0be75349fd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Wdigest CredGuard Registry Modification

## Description
Detects potential malicious modification of the property value of IsCredGuardEnabled from
HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest to disable Cred Guard on a system.
This is usually used with UseLogonCredential to manipulate the caching credentials.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \IsCredGuardEnabled
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://teamhydra.blog/2020/08/25/bypassing-credential-guard/

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2019-08-25
- **Rule ID:** `1a2d6c47-75b0-45bd-b133-2c0be75349fd`
- **Source file:** `windows/registry/registry_event/registry_event_disable_wdigest_credential_guard.yml`
