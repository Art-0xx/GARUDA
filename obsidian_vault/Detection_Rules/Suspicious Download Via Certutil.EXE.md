---
type: detection_rule
title: "Suspicious Download Via Certutil.EXE"
rule_id: 19b08b1c-861d-4e75-a1ef-ea0c1baf202b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1105]
---

# Suspicious Download Via Certutil.EXE

## Description
Detects the execution of certutil with certain flags that allow the utility to download files.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flags:
  CommandLine|contains:
  - 'urlcache '
  - 'verifyctl '
  - 'URL '
selection_http:
  CommandLine|contains: http
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
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-15
- **Rule ID:** `19b08b1c-861d-4e75-a1ef-ea0c1baf202b`
- **Source file:** `windows/process_creation/proc_creation_win_certutil_download.yml`
