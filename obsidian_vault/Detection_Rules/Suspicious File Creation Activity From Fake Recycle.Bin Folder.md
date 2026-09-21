---
type: detection_rule
title: "Suspicious File Creation Activity From Fake Recycle.Bin Folder"
rule_id: cd8b36ac-8e4a-4c2f-a402-a29b8fbd5bca
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Creation Activity From Fake Recycle.Bin Folder

## Description
Detects file write event from/to a fake recycle bin folder that is often used as a staging directory for malware

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|contains:
  - RECYCLERS.BIN\
  - RECYCLER.BIN\
- TargetFilename|contains:
  - RECYCLERS.BIN\
  - RECYCLER.BIN\
```

## False Positives
- Unknown

## References
- https://www.mandiant.com/resources/blog/infected-usb-steal-secrets
- https://unit42.paloaltonetworks.com/cloaked-ursa-phishing/

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-07-12
- **Rule ID:** `cd8b36ac-8e4a-4c2f-a402-a29b8fbd5bca`
- **Source file:** `windows/file/file_event/file_event_win_susp_recycle_bin_fake_exec.yml`
