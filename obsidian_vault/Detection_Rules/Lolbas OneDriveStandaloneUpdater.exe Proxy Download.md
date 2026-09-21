---
type: detection_rule
title: "Lolbas OneDriveStandaloneUpdater.exe Proxy Download"
rule_id: 3aff0be0-7802-4a7e-a4fa-c60c74bc5e1d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Lolbas OneDriveStandaloneUpdater.exe Proxy Download

## Description
Detects setting a custom URL for OneDriveStandaloneUpdater.exe to download a file from the Internet without executing any
anomalous executables with suspicious arguments. The downloaded file will be in C:\Users\redacted\AppData\Local\Microsoft\OneDrive\StandaloneUpdaterreSignInSettingsConfig.json

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \SOFTWARE\Microsoft\OneDrive\UpdateOfficeConfig\UpdateRingSettingURLFromOC
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/OneDriveStandaloneUpdater/

## Metadata
- **Author:** frack113
- **Date:** 2022-05-28
- **Rule ID:** `3aff0be0-7802-4a7e-a4fa-c60c74bc5e1d`
- **Source file:** `windows/registry/registry_set/registry_set_lolbin_onedrivestandaloneupdater.yml`
