---
type: detection_rule
title: "Hardware Model Reconnaissance Via Wmic.EXE"
rule_id: 3e3ceccd-6c06-48b8-b5ff-ab1d25db8c1d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Hardware Model Reconnaissance Via Wmic.EXE

## Description
Detects the execution of WMIC with the "csproduct" which is used to obtain information such as hardware models and vendor information

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: csproduct
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://jonconwayuk.wordpress.com/2014/01/31/wmic-csproduct-using-wmi-to-identify-make-and-model-of-hardware/
- https://www.uptycs.com/blog/kuraystealer-a-bandit-using-discord-webhooks

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2023-02-14
- **Rule ID:** `3e3ceccd-6c06-48b8-b5ff-ab1d25db8c1d`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_csproduct.yml`
