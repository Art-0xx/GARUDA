---
type: detection_rule
title: "Potential Arbitrary File Download Via Cmdl32.EXE"
rule_id: f37aba28-a9e6-4045-882c-d5004043b337
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1202]
---

# Potential Arbitrary File Download Via Cmdl32.EXE

## Description
Detects execution of Cmdl32 with the "/vpn" and "/lan" flags.
Attackers can abuse this utility in order to download arbitrary files via a configuration file.
Inspect the location and the content of the file passed as an argument in order to determine if it is suspicious.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - /vpn
  - /lan
selection_img:
- Image|endswith: \cmdl32.exe
- OriginalFileName: CMDL32.EXE
```

## MITRE ATT&CK
- T1218
- T1202

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Cmdl32/
- https://twitter.com/SwiftOnSecurity/status/1455897435063074824
- https://github.com/LOLBAS-Project/LOLBAS/pull/151

## Metadata
- **Author:** frack113
- **Date:** 2021-11-03
- **Rule ID:** `f37aba28-a9e6-4045-882c-d5004043b337`
- **Source file:** `windows/process_creation/proc_creation_win_cmdl32_arbitrary_file_download.yml`
