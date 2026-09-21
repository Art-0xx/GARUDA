---
type: detection_rule
title: "Suspicious Git Clone - Linux"
rule_id: cfec9d29-64ec-4a0f-9ffe-0fdb856d5446
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1593.003]
---

# Suspicious Git Clone - Linux

## Description
Detects execution of "git" in order to clone a remote repository that contain suspicious keywords which might be suspicious

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
  CommandLine|contains: ' clone '
  Image|endswith: /git
selection_keyword:
  CommandLine|contains:
  - exploit
  - Vulns
  - vulnerability
  - RCE
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
- **Rule ID:** `cfec9d29-64ec-4a0f-9ffe-0fdb856d5446`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_git_clone.yml`
