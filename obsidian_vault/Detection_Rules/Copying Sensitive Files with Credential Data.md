---
type: detection_rule
title: "Copying Sensitive Files with Credential Data"
rule_id: e7be6119-fc37-43f0-ad4f-1f3f99be2f9f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002, attack.t1003.003]
---

# Copying Sensitive Files with Credential Data

## Description
Files with well-known filenames (sensitive files with credential data) copying

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_esent_* or selection_susp_paths
selection_esent_cli:
  CommandLine|contains|windash:
  - vss
  - ' /m '
  - ' /y '
selection_esent_img:
- Image|endswith: \esentutl.exe
- OriginalFileName: \esentutl.exe
selection_susp_paths:
  CommandLine|contains:
  - \config\RegBack\sam
  - \config\RegBack\security
  - \config\RegBack\system
  - \config\sam
  - \config\security
  - '\config\system '
  - \repair\sam
  - \repair\security
  - \repair\system
  - \windows\ntds\ntds.dit
```

## MITRE ATT&CK
- T1003.002
- T1003.003

## False Positives
- Copying sensitive files for legitimate use (eg. backup) or forensic investigation by legitimate incident responder or forensic investigator.

## References
- https://room362.com/post/2013/2013-06-10-volume-shadow-copy-ntdsdit-domain-hashes-remotely-part-1/
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment
- https://dfironthemountain.wordpress.com/2018/12/06/locked-file-access-using-esentutl-exe/
- https://github.com/LOLBAS-Project/LOLBAS/blob/2cc01b01132b5c304027a658c698ae09dd6a92bf/yml/OSBinaries/Esentutl.yml

## Metadata
- **Author:** Teymur Kheirkhabarov, Daniil Yugoslavskiy, oscd.community
- **Date:** 2019-10-22
- **Rule ID:** `e7be6119-fc37-43f0-ad4f-1f3f99be2f9f`
- **Source file:** `windows/process_creation/proc_creation_win_esentutl_sensitive_file_copy.yml`
