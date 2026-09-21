---
type: detection_rule
title: "Remote File Download Via Desktopimgdownldr Utility"
rule_id: 214641c2-c579-4ecb-8427-0cf19df6842e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Remote File Download Via Desktopimgdownldr Utility

## Description
Detects the desktopimgdownldr utility being used to download a remote file. An adversary may use desktopimgdownldr to download arbitrary files as an alternative to certutil.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: /lockscreenurl:http
  Image|endswith: \desktopimgdownldr.exe
  ParentImage|endswith: \desktopimgdownldr.exe
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/remote-file-download-via-desktopimgdownldr-utility.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-27
- **Rule ID:** `214641c2-c579-4ecb-8427-0cf19df6842e`
- **Source file:** `windows/process_creation/proc_creation_win_desktopimgdownldr_remote_file_download.yml`
