---
type: detection_rule
title: "Insensitive Subfolder Search Via Findstr.EXE"
rule_id: 04936b66-3915-43ad-a8e5-809eadfd1141
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1564.004, attack.t1552.001, attack.t1105]
---

# Insensitive Subfolder Search Via Findstr.EXE

## Description
Detects execution of findstr with the "s" and "i" flags for a "subfolder" and "insensitive" search respectively. Attackers sometimes leverage this built-in utility to search the system for interesting files or filter through results of commands.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_findstr and all of selection_cli_search_*
selection_cli_search_insensitive:
  CommandLine|contains|windash: ' -i '
selection_cli_search_subfolder:
  CommandLine|contains|windash: ' -s '
selection_findstr:
- CommandLine|contains: findstr
- Image|endswith: findstr.exe
- OriginalFileName: FINDSTR.EXE
```

## MITRE ATT&CK
- T1218
- T1564.004
- T1552.001
- T1105

## False Positives
- Administrative or software activity

## References
- https://lolbas-project.github.io/lolbas/Binaries/Findstr/
- https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f

## Metadata
- **Author:** Furkan CALISKAN, @caliskanfurkan_, @oscd_initiative, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-10-05
- **Rule ID:** `04936b66-3915-43ad-a8e5-809eadfd1141`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_subfolder_search.yml`
