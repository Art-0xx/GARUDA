---
type: detection_rule
title: "Suspicious Git Clone"
rule_id: aef9d1f1-7396-4e92-a927-4567c7a495c1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1593.003]
---

# Suspicious Git Clone

## Description
Detects execution of "git" in order to clone a remote repository that contain suspicious keywords which might be suspicious

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' clone '
  - 'git-remote-https '
selection_img:
- Image|endswith:
  - \git.exe
  - \git-remote-https.exe
- OriginalFileName: git.exe
selection_keyword:
  CommandLine|contains:
  - exploit
  - Vulns
  - vulnerability
  - RemoteCodeExecution
  - Invoke-
  - CVE-
  - poc-
  - ProofOfConcept
  - proxyshell
  - log4shell
  - eternalblue
  - eternal-blue
  - MS17-
```

## MITRE ATT&CK
- T1593.003

## False Positives
- Unknown

## References
- https://gist.githubusercontent.com/MichaelKoczwara/12faba9c061c12b5814b711166de8c2f/raw/e2068486692897b620c25fde1ea258c8218fe3d3/history.txt

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-03
- **Rule ID:** `aef9d1f1-7396-4e92-a927-4567c7a495c1`
- **Source file:** `windows/process_creation/proc_creation_win_git_susp_clone.yml`
