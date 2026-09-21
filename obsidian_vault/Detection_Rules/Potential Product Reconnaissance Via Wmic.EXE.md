---
type: detection_rule
title: "Potential Product Reconnaissance Via Wmic.EXE"
rule_id: 15434e33-5027-4914-88d5-3d4145ec25a9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Potential Product Reconnaissance Via Wmic.EXE

## Description
Detects the execution of WMIC in order to get a list of firewall and antivirus products

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_call_operations:
  CommandLine|contains:
  - ' uninstall'
  - ' install'
filter_main_csproduct:
  CommandLine|contains: csproduct
selection_cli:
  CommandLine|contains: Product
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://thedfirreport.com/2023/03/06/2022-year-in-review/
- https://www.yeahhub.com/list-installed-programs-version-path-windows/
- https://learn.microsoft.com/en-us/answers/questions/253555/software-list-inventory-wmic-product

## Metadata
- **Author:** Nasreddine Bencherchali
- **Date:** 2023-02-14
- **Rule ID:** `15434e33-5027-4914-88d5-3d4145ec25a9`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_product.yml`
