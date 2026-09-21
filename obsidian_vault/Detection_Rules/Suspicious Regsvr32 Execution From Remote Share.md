---
type: detection_rule
title: "Suspicious Regsvr32 Execution From Remote Share"
rule_id: 88a87a10-384b-4ad7-8871-2f9bf9259ce5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Suspicious Regsvr32 Execution From Remote Share

## Description
Detects REGSVR32.exe to execute DLL hosted on remote shares

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ' \\\\'
selection_img:
- Image|endswith: \regsvr32.exe
- OriginalFileName: \REGSVR32.EXE
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Unknown

## References
- https://thedfirreport.com/2022/10/31/follina-exploit-leads-to-domain-compromise/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-31
- **Rule ID:** `88a87a10-384b-4ad7-8871-2f9bf9259ce5`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_remote_share.yml`
