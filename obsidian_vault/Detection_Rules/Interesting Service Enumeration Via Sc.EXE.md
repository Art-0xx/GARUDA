---
type: detection_rule
title: "Interesting Service Enumeration Via Sc.EXE"
rule_id: e83e8899-c9b2-483b-b355-5decc942b959
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Interesting Service Enumeration Via Sc.EXE

## Description
Detects the enumeration and query of interesting and in some cases sensitive services on the system via "sc.exe".
Attackers often try to enumerate the services currently running on a system in order to find different attack vectors.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: query
selection_cmd:
  CommandLine|contains: termservice
selection_img:
- Image|endswith: \sc.exe
- OriginalFileName: sc.exe
```

## MITRE ATT&CK
- T1003

## False Positives
- Unknown

## References
- https://www.n00py.io/2021/05/dumping-plaintext-rdp-credentials-from-svchost-exe/
- https://pentestlab.blog/tag/svchost/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-02-12
- **Rule ID:** `e83e8899-c9b2-483b-b355-5decc942b959`
- **Source file:** `windows/process_creation/proc_creation_win_sc_query_interesting_services.yml`
