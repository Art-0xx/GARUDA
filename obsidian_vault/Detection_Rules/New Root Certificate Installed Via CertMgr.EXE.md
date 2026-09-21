---
type: detection_rule
title: "New Root Certificate Installed Via CertMgr.EXE"
rule_id: ff992eac-6449-4c60-8c1d-91c9722a1d48
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.004]
---

# New Root Certificate Installed Via CertMgr.EXE

## Description
Detects execution of "certmgr" with the "add" flag in order to install a new certificate on the system.
Adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers.

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
  - /add
  - root
selection_img:
- Image|endswith: \CertMgr.exe
- OriginalFileName: CERTMGT.EXE
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Help Desk or IT may need to manually add a corporate Root CA on occasion. Need to test if GPO push doesn't trigger FP

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.004/T1553.004.md
- https://securelist.com/to-crypt-or-to-mine-that-is-the-question/86307/

## Metadata
- **Author:** oscd.community, @redcanary, Zach Stanford @svch0st
- **Date:** 2023-03-05
- **Rule ID:** `ff992eac-6449-4c60-8c1d-91c9722a1d48`
- **Source file:** `windows/process_creation/proc_creation_win_certmgr_certificate_installation.yml`
