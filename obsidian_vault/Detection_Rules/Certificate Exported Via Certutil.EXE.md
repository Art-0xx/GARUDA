---
type: detection_rule
title: "Certificate Exported Via Certutil.EXE"
rule_id: 3ffd6f51-e6c1-47b7-94b4-c1e61d4117c5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027]
---

# Certificate Exported Via Certutil.EXE

## Description
Detects the execution of the certutil with the "exportPFX" flag which allows the utility to export certificates.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: '-exportPFX '
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1027

## False Positives
- There legitimate reasons to export certificates. Investigate the activity to determine if it's benign

## References
- https://www.splunk.com/en_us/blog/security/a-golden-saml-journey-solarwinds-continued.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-15
- **Rule ID:** `3ffd6f51-e6c1-47b7-94b4-c1e61d4117c5`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_export_pfx.yml`
