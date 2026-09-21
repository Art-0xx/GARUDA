---
type: detection_rule
title: "Remote File Download Via Findstr.EXE"
rule_id: 587254ee-a24b-4335-b3cd-065c0f1f4baa
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1564.004, attack.t1552.001, attack.t1105]
---

# Remote File Download Via Findstr.EXE

## Description
Detects execution of "findstr" with specific flags and a remote share path. This specific set of CLI flags would allow "findstr" to download the content of the file located on the remote share as described in the LOLBAS entry.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_findstr and all of selection_cli_download_*
selection_cli_download_1:
  CommandLine|contains|windash: ' -v '
selection_cli_download_2:
  CommandLine|contains|windash: ' -l '
selection_cli_download_3:
  CommandLine|contains: \\\\
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
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Findstr/
- https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f

## Metadata
- **Author:** Furkan CALISKAN, @caliskanfurkan_, @oscd_initiative, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-10-05
- **Rule ID:** `587254ee-a24b-4335-b3cd-065c0f1f4baa`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_download.yml`
