---
type: detection_rule
title: "Potential Reconnaissance Activity Via GatherNetworkInfo.VBS"
rule_id: 575dce0c-8139-4e30-9295-1ee75969f7fe
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1615, attack.t1059.005]
---

# Potential Reconnaissance Activity Via GatherNetworkInfo.VBS

## Description
Detects execution of the built-in script located in "C:\Windows\System32\gatherNetworkInfo.vbs". Which can be used to gather information about the target machine

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: gatherNetworkInfo.vbs
selection_img:
- Image|endswith:
  - \cscript.exe
  - \wscript.exe
- OriginalFileName:
  - cscript.exe
  - wscript.exe
```

## MITRE ATT&CK
- T1615
- T1059.005

## False Positives
- Administrative activity

## References
- https://posts.slayerlabs.com/living-off-the-land/#gathernetworkinfovbs
- https://www.mandiant.com/resources/blog/trojanized-windows-installers-ukrainian-government

## Metadata
- **Author:** blueteamer8699
- **Date:** 2022-01-03
- **Rule ID:** `575dce0c-8139-4e30-9295-1ee75969f7fe`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_gather_network_info.yml`
