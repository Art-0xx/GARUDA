---
type: detection_rule
title: "Suspicious DLL Loaded via CertOC.EXE"
rule_id: 84232095-ecca-4015-b0d7-7726507ee793
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Suspicious DLL Loaded via CertOC.EXE

## Description
Detects when a user installs certificates by using CertOC.exe to load the target DLL file.

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
selection_paths:
  CommandLine|contains:
  - \Appdata\Local\Temp\
  - \Desktop\
  - \Downloads\
  - \Users\Public\
  - C:\Windows\Tasks\
  - C:\Windows\Temp\
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
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-15
- **Rule ID:** `84232095-ecca-4015-b0d7-7726507ee793`
- **Source file:** `windows/process_creation/proc_creation_win_certoc_load_dll_susp_locations.yml`
