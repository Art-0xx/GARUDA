---
type: detection_rule
title: "UAC Bypass via Sdclt"
rule_id: 5b872a46-3b90-45c1-8419-f675db8053aa
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass via Sdclt

## Description
Detects the pattern of UAC Bypass using registry key manipulation of sdclt.exe (e.g. UACMe 53)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  TargetObject|endswith: Software\Classes\exefile\shell\runas\command\isolatedCommand
selection2:
  Details|re: -1[0-9]{3}\\Software\\Classes\\
  TargetObject|endswith: Software\Classes\Folder\shell\open\command\SymbolicLinkValue
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://enigma0x3.net/2017/03/17/fileless-uac-bypass-using-sdclt-exe/
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Omer Yampel, Christian Burkard (Nextron Systems)
- **Date:** 2017-03-17
- **Rule ID:** `5b872a46-3b90-45c1-8419-f675db8053aa`
- **Source file:** `windows/registry/registry_set/registry_set_uac_bypass_sdclt.yml`
