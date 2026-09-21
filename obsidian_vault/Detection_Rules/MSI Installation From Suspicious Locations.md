---
type: detection_rule
title: "MSI Installation From Suspicious Locations"
rule_id: c7c8aa1c-5aff-408e-828b-998e3620b341
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# MSI Installation From Suspicious Locations

## Description
Detects MSI package installation from suspicious locations

## Log Source
```yaml
product: windows
service: application
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_updhealthtools:
  Data|contains: C:\Windows\TEMP\UpdHealthTools.msi
filter_winget:
  Data|contains: \AppData\Local\Temp\WinGet\
selection:
  Data|contains:
  - :\Windows\TEMP\
  - \\\\
  - \Desktop\
  - \PerfLogs\
  - \Users\Public\
  EventID:
  - 1040
  - 1042
  Provider_Name: MsiInstaller
```

## False Positives
- False positives may occur if you allow installation from folders such as the desktop, the public folder or remote shares. A baseline is required before production use.

## References
- https://www.trendmicro.com/en_us/research/22/h/ransomware-actor-abuses-genshin-impact-anti-cheat-driver-to-kill-antivirus.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-31
- **Rule ID:** `c7c8aa1c-5aff-408e-828b-998e3620b341`
- **Source file:** `windows/builtin/application/msiinstaller/win_msi_install_from_susp_locations.yml`
