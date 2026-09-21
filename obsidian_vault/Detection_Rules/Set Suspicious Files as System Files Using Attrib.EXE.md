---
type: detection_rule
title: "Set Suspicious Files as System Files Using Attrib.EXE"
rule_id: efec536f-72e8-4656-8960-5e85d091345b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.001]
---

# Set Suspicious Files as System Files Using Attrib.EXE

## Description
Detects the usage of attrib with the "+s" option to set scripts or executables located in suspicious locations as system files to hide them from users and make them unable to be deleted with simple rights. The rule limits the search to specific extensions and directories to avoid FPs

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection* and not 1 of filter_optional_*
filter_optional_installer:
  CommandLine|contains|all:
  - \Windows\TEMP\
  - .exe
selection_cli:
  CommandLine|contains: ' +s'
selection_ext:
  CommandLine|contains:
  - .bat
  - .dll
  - .exe
  - .hta
  - .ps1
  - .vbe
  - .vbs
selection_img:
- Image|endswith: \attrib.exe
- OriginalFileName: ATTRIB.EXE
selection_paths:
  CommandLine|contains:
  - ' %'
  - \Users\Public\
  - \AppData\Local\
  - \ProgramData\
  - \Downloads\
  - \Windows\Temp\
```

## MITRE ATT&CK
- T1564.001

## False Positives
- Unknown

## References
- https://app.any.run/tasks/c28cabc8-a19f-40f3-a78b-cae506a5c0d4
- https://app.any.run/tasks/cfc8870b-ccd7-4210-88cf-a8087476a6d0
- https://unit42.paloaltonetworks.com/unit42-sure-ill-take-new-combojack-malware-alters-clipboards-steal-cryptocurrency/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `efec536f-72e8-4656-8960-5e85d091345b`
- **Source file:** `windows/process_creation/proc_creation_win_attrib_system_susp_paths.yml`
