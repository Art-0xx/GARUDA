---
type: detection_rule
title: "File Encoded To Base64 Via Certutil.EXE"
rule_id: e62a9f0c-ca1e-46b2-85d5-a6da77f86d1a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027]
---

# File Encoded To Base64 Via Certutil.EXE

## Description
Detects the execution of certutil with the "encode" flag to encode a file to base64. This can be abused by threat actors and attackers for data exfiltration

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: -encode
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1027

## False Positives
- As this is a general purpose rule, legitimate usage of the encode functionality will trigger some false positives. Apply additional filters accordingly

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/certutil
- https://unit42.paloaltonetworks.com/new-babyshark-malware-targets-u-s-national-security-think-tanks/
- https://lolbas-project.github.io/lolbas/Binaries/Certutil/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-02-24
- **Rule ID:** `e62a9f0c-ca1e-46b2-85d5-a6da77f86d1a`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_encode.yml`
