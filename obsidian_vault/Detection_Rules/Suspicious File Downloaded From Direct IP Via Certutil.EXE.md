---
type: detection_rule
title: "Suspicious File Downloaded From Direct IP Via Certutil.EXE"
rule_id: 13e6fe51-d478-4c7e-b0f2-6da9b400a829
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1105]
---

# Suspicious File Downloaded From Direct IP Via Certutil.EXE

## Description
Detects the execution of certutil with certain flags that allow the utility to download files from direct IPs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_seven_zip:
  CommandLine|contains: ://7-
selection_flags:
  CommandLine|contains:
  - 'urlcache '
  - 'verifyctl '
  - 'URL '
selection_http:
  CommandLine|contains:
  - ://1
  - ://2
  - ://3
  - ://4
  - ://5
  - ://6
  - ://7
  - ://8
  - ://9
selection_img:
- Image|endswith: \certutil.exe
- OriginalFileName: CertUtil.exe
```

## MITRE ATT&CK
- T1027
- T1105

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/certutil
- https://forensicitguy.github.io/agenttesla-vba-certutil-download/
- https://news.sophos.com/en-us/2021/04/13/compromised-exchange-server-hosting-cryptojacker-targeting-other-exchange-servers/
- https://twitter.com/egre55/status/1087685529016193025
- https://lolbas-project.github.io/lolbas/Binaries/Certutil/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-15
- **Rule ID:** `13e6fe51-d478-4c7e-b0f2-6da9b400a829`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_download_direct_ip.yml`
