---
type: detection_rule
title: "WMIC Loading Scripting Libraries"
rule_id: 06ce37c2-61ab-4f05-9ff5-b1a96d18ae32
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1220]
---

# WMIC Loading Scripting Libraries

## Description
Detects threat actors proxy executing code and bypassing application controls by leveraging wmic and the `/FORMAT` argument switch to download and execute an XSL file (i.e js, vbs, etc).
It could be an indicator of SquiblyTwo technique, which uses Windows Management Instrumentation (WMI) to execute malicious code.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|endswith:
  - \jscript.dll
  - \vbscript.dll
  Image|endswith: \wmic.exe
```

## MITRE ATT&CK
- T1220

## False Positives
- The command wmic os get lastbootuptime loads vbscript.dll
- The command wmic os get locale loads vbscript.dll
- Since the ImageLoad event doesn't have enough information in this case. It's better to look at the recent process creation events that spawned the WMIC process and investigate the command line and parent/child processes to get more insights
- The command `wmic ntevent` loads vbscript.dll

## References
- https://securitydatasets.com/notebooks/atomic/windows/defense_evasion/SDWIN-201017061100.html
- https://twitter.com/dez_/status/986614411711442944
- https://lolbas-project.github.io/lolbas/Binaries/Wmic/

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-10-17
- **Rule ID:** `06ce37c2-61ab-4f05-9ff5-b1a96d18ae32`
- **Source file:** `windows/image_load/image_load_wmic_remote_xsl_scripting_dlls.yml`
