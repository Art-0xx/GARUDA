---
type: detection_rule
title: "Potentially Suspicious Regsvr32 HTTP/FTP Pattern"
rule_id: 867356ee-9352-41c9-a8f2-1be690d78216
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Potentially Suspicious Regsvr32 HTTP/FTP Pattern

## Description
Detects regsvr32 execution to download/install/register new DLLs that are hosted on Web or FTP servers.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flag:
  CommandLine|contains:
  - ' /i'
  - ' -i'
selection_img:
- Image|endswith: \regsvr32.exe
- OriginalFileName: REGSVR32.EXE
selection_protocol:
  CommandLine|contains:
  - ftp
  - http
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Unknown

## References
- https://twitter.com/mrd0x/status/1461041276514623491
- https://twitter.com/tccontre18/status/1480950986650832903
- https://lolbas-project.github.io/lolbas/Binaries/Regsvr32/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2023-05-24
- **Rule ID:** `867356ee-9352-41c9-a8f2-1be690d78216`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_network_pattern.yml`
