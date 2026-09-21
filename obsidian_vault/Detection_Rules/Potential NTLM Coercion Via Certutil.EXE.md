---
type: detection_rule
title: "Potential NTLM Coercion Via Certutil.EXE"
rule_id: 6c6d9280-e6d0-4b9d-80ac-254701b64916
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potential NTLM Coercion Via Certutil.EXE

## Description
Detects possible NTLM coercion via certutil using the 'syncwithWU' flag

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ' -syncwithWU '
  - ' \\\\'
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/LOLBAS-Project/LOLBAS/issues/243

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-01
- **Rule ID:** `6c6d9280-e6d0-4b9d-80ac-254701b64916`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_ntlm_coercion.yml`
