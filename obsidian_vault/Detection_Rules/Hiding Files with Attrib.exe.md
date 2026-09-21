---
type: detection_rule
title: "Hiding Files with Attrib.exe"
rule_id: 4281cb20-2994-4580-aa63-c8b86d019934
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.001]
---

# Hiding Files with Attrib.exe

## Description
Detects usage of attrib.exe to hide files from users.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_msiexec:
  CommandLine|contains: '\desktop.ini '
filter_optional_intel:
  CommandLine: +R +H +S +A \\\*.cui
  ParentCommandLine: C:\\WINDOWS\\system32\\\*.bat
  ParentImage|endswith: \cmd.exe
selection_cli:
  CommandLine|contains: ' +h '
selection_img:
- Image|endswith: \attrib.exe
- OriginalFileName: ATTRIB.EXE
```

## MITRE ATT&CK
- T1564.001

## False Positives
- IgfxCUIService.exe hiding *.cui files via .bat script (attrib.exe a child of cmd.exe and igfxCUIService.exe is the parent of the cmd.exe)
- Msiexec.exe hiding desktop.ini

## References
- https://unit42.paloaltonetworks.com/unit42-sure-ill-take-new-combojack-malware-alters-clipboards-steal-cryptocurrency/
- https://www.uptycs.com/blog/lolbins-are-no-laughing-matter

## Metadata
- **Author:** Sami Ruohonen
- **Date:** 2019-01-16
- **Rule ID:** `4281cb20-2994-4580-aa63-c8b86d019934`
- **Source file:** `windows/process_creation/proc_creation_win_attrib_hiding_files.yml`
