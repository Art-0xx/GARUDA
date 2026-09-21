---
type: detection_rule
title: "DLL Loaded via CertOC.EXE"
rule_id: 242301bc-f92f-4476-8718-78004a6efd9f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# DLL Loaded via CertOC.EXE

## Description
Detects when a user installs certificates by using CertOC.exe to loads the target DLL file.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: ' -LoadDLL '
selection_img:
- Image|endswith: \certoc.exe
- OriginalFileName: CertOC.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://twitter.com/sblmsrsn/status/1445758411803480072?s=20
- https://github.com/elastic/protections-artifacts/commit/746086721fd385d9f5c6647cada1788db4aea95f#diff-fe98e74189873d6df72a15df2eaa0315c59ba9cdaca93ecd68afc4ea09194ef2
- https://lolbas-project.github.io/lolbas/Binaries/Certoc/

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-10-23
- **Rule ID:** `242301bc-f92f-4476-8718-78004a6efd9f`
- **Source file:** `windows/process_creation/proc_creation_win_certoc_load_dll.yml`
