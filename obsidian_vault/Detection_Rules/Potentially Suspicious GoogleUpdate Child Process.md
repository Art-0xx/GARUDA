---
type: detection_rule
title: "Potentially Suspicious GoogleUpdate Child Process"
rule_id: 84b1ecf9-6eff-4004-bafb-bae5c0e251b2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious GoogleUpdate Child Process

## Description
Detects potentially suspicious child processes of "GoogleUpdate.exe"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_image_null:
  Image: null
filter_main_known_legit:
- Image|contains: \Google
- Image|endswith:
  - \setup.exe
  - chrome_updater.exe
  - chrome_installer.exe
selection:
  ParentImage|endswith: \GoogleUpdate.exe
```

## False Positives
- Unknown

## References
- https://www.ncsc.gov.uk/static-assets/documents/malware-analysis-reports/goofy-guineapig/NCSC-MAR-Goofy-Guineapig.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-15
- **Rule ID:** `84b1ecf9-6eff-4004-bafb-bae5c0e251b2`
- **Source file:** `windows/process_creation/proc_creation_win_googleupdate_susp_child_process.yml`
