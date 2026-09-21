---
type: detection_rule
title: "Esentutl Steals Browser Information"
rule_id: 6a69f62d-ce75-4b57-8dce-6351eb55b362
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1005]
---

# Esentutl Steals Browser Information

## Description
One way Qbot steals sensitive information is by extracting browser data from Internet Explorer and Microsoft Edge by using the built-in utility esentutl.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_flag:
  CommandLine|contains|windash: -r
selection_img:
- Image|endswith: \esentutl.exe
- OriginalFileName: esentutl.exe
selection_webcache:
  CommandLine|contains: \Windows\WebCache
```

## MITRE ATT&CK
- T1005

## False Positives
- Legitimate use

## References
- https://thedfirreport.com/2022/02/07/qbot-likes-to-move-it-move-it/
- https://redcanary.com/threat-detection-report/threats/qbot/
- https://thedfirreport.com/2022/10/31/follina-exploit-leads-to-domain-compromise/

## Metadata
- **Author:** frack113
- **Date:** 2022-02-13
- **Rule ID:** `6a69f62d-ce75-4b57-8dce-6351eb55b362`
- **Source file:** `windows/process_creation/proc_creation_win_esentutl_webcache.yml`
