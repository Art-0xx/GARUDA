---
type: detection_rule
title: "Windows Defender Configuration Changes"
rule_id: 801bd44f-ceed-4eb6-887c-11544633c0aa
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Configuration Changes

## Description
Detects suspicious changes to the Windows Defender configuration

## Log Source
```yaml
product: windows
service: windefend
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 5007
  NewValue|contains:
  - '\Windows Defender\DisableAntiSpyware '
  - '\Windows Defender\Scan\DisableRemovableDriveScanning '
  - '\Windows Defender\Scan\DisableScanningMappedNetworkDrivesForFullScan '
  - '\Windows Defender\SpyNet\DisableBlockAtFirstSeen '
  - '\Real-Time Protection\SpyNetReporting '
```

## MITRE ATT&CK
- T1685

## False Positives
- Administrator activity (must be investigated)

## References
- https://learn.microsoft.com/en-us/defender-endpoint/troubleshoot-microsoft-defender-antivirus?view=o365-worldwide
- https://bidouillesecurity.com/disable-windows-defender-in-powershell/#DisableAntiSpyware

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-06
- **Rule ID:** `801bd44f-ceed-4eb6-887c-11544633c0aa`
- **Source file:** `windows/builtin/windefend/win_defender_suspicious_features_tampering.yml`
