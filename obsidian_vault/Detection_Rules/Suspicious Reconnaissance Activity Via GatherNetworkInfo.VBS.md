---
type: detection_rule
title: "Suspicious Reconnaissance Activity Via GatherNetworkInfo.VBS"
rule_id: 07aa184a-870d-413d-893a-157f317f6f58
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1615, attack.t1059.005]
---

# Suspicious Reconnaissance Activity Via GatherNetworkInfo.VBS

## Description
Detects execution of the built-in script located in "C:\Windows\System32\gatherNetworkInfo.vbs". Which can be used to gather information about the target machine

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith:
  - \cscript.exe
  - \wscript.exe
selection:
  CommandLine|contains: gatherNetworkInfo.vbs
```

## MITRE ATT&CK
- T1615
- T1059.005

## False Positives
- Unknown

## References
- https://posts.slayerlabs.com/living-off-the-land/#gathernetworkinfovbs
- https://www.mandiant.com/resources/blog/trojanized-windows-installers-ukrainian-government

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-08
- **Rule ID:** `07aa184a-870d-413d-893a-157f317f6f58`
- **Source file:** `windows/process_creation/proc_creation_win_susp_gather_network_info_execution.yml`
