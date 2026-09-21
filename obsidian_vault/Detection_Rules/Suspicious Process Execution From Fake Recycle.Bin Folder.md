---
type: detection_rule
title: "Suspicious Process Execution From Fake Recycle.Bin Folder"
rule_id: 5ce0f04e-3efc-42af-839d-5b3a543b76c0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Process Execution From Fake Recycle.Bin Folder

## Description
Detects process execution from a fake recycle bin folder, often used to avoid security solution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - RECYCLERS.BIN\
  - RECYCLER.BIN\
```

## False Positives
- Unlikely

## References
- https://www.mandiant.com/resources/blog/infected-usb-steal-secrets
- https://unit42.paloaltonetworks.com/cloaked-ursa-phishing/

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-07-12
- **Rule ID:** `5ce0f04e-3efc-42af-839d-5b3a543b76c0`
- **Source file:** `windows/process_creation/proc_creation_win_susp_recycle_bin_fake_execution.yml`
