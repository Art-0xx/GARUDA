---
type: detection_rule
title: "Potential Malicious AppX Package Installation Attempts"
rule_id: 09d3b48b-be17-47f5-bf4e-94e7e75d09ce
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Malicious AppX Package Installation Attempts

## Description
Detects potential installation or installation attempts of known malicious appx packages

## Log Source
```yaml
product: windows
service: appxdeployment-server
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID:
  - 400
  - 401
  PackageFullName|contains: 3669e262-ec02-4e9d-bcb4-3d008b4afac9
```

## False Positives
- Rare occasions where a malicious package uses the exact same name and version as a legitimate application.

## References
- https://www.sentinelone.com/labs/inside-malicious-windows-apps-for-malware-deployment/
- https://news.sophos.com/en-us/2021/11/11/bazarloader-call-me-back-attack-abuses-windows-10-apps-mechanism/
- https://forensicitguy.github.io/analyzing-magnitude-magniber-appx/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-11
- **Rule ID:** `09d3b48b-be17-47f5-bf4e-94e7e75d09ce`
- **Source file:** `windows/builtin/appxdeployment_server/win_appxdeployment_server_mal_appx_names.yml`
