---
type: detection_rule
title: "New Root Certificate Installed Via Certutil.EXE"
rule_id: d2125259-ddea-4c1c-9c22-977eb5b29cf0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.004]
---

# New Root Certificate Installed Via Certutil.EXE

## Description
Detects execution of "certutil" with the "addstore" flag in order to install a new certificate on the system.
Adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_add:
  CommandLine|contains|windash: -addstore
selection_cli_store:
  CommandLine|contains: root
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Help Desk or IT may need to manually add a corporate Root CA on occasion. Need to test if GPO push doesn't trigger FP

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.004/T1553.004.md

## Metadata
- **Author:** oscd.community, @redcanary, Zach Stanford @svch0st
- **Date:** 2023-03-05
- **Rule ID:** `d2125259-ddea-4c1c-9c22-977eb5b29cf0`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_certificate_installation.yml`
