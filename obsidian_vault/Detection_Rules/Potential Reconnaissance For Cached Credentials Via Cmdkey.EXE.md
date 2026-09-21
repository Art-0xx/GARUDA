---
type: detection_rule
title: "Potential Reconnaissance For Cached Credentials Via Cmdkey.EXE"
rule_id: 07f8bdc2-c9b3-472a-9817-5a670b872f53
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.005]
---

# Potential Reconnaissance For Cached Credentials Via Cmdkey.EXE

## Description
Detects usage of cmdkey to look for cached credentials on the system

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains|windash: ' -l'
selection_img:
- Image|endswith: \cmdkey.exe
- OriginalFileName: cmdkey.exe
```

## MITRE ATT&CK
- T1003.005

## False Positives
- Legitimate administrative tasks

## References
- https://www.peew.pw/blog/2017/11/26/exploring-cmdkey-an-edge-case-for-privilege-escalation
- https://technet.microsoft.com/en-us/library/cc754243(v=ws.11).aspx
- https://github.com/redcanaryco/atomic-red-team/blob/b27a3cb25025161d49ac861cb216db68c46a3537/atomics/T1003.005/T1003.005.md#atomic-test-1---cached-credential-dump-via-cmdkey

## Metadata
- **Author:** jmallette, Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-01-16
- **Rule ID:** `07f8bdc2-c9b3-472a-9817-5a670b872f53`
- **Source file:** `windows/process_creation/proc_creation_win_cmdkey_recon.yml`
