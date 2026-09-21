---
type: detection_rule
title: "Security Tools Keyword Lookup Via Findstr.EXE"
rule_id: 4fe074b4-b833-4081-8f24-7dcfeca72b42
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1518.001]
---

# Security Tools Keyword Lookup Via Findstr.EXE

## Description
Detects execution of "findstr" to search for common names of security tools. Attackers often pipe the results of recon commands such as "tasklist" or "whoami" to "findstr" in order to filter out the results.
This detection focuses on the keywords that the attacker might use as a filter.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|endswith:
  - ' avira'
  - ' avira"'
  - ' cb'
  - ' cb"'
  - ' cylance'
  - ' cylance"'
  - ' defender'
  - ' defender"'
  - ' kaspersky'
  - ' kaspersky"'
  - ' kes'
  - ' kes"'
  - ' mc'
  - ' mc"'
  - ' sec'
  - ' sec"'
  - ' sentinel'
  - ' sentinel"'
  - ' symantec'
  - ' symantec"'
  - ' virus'
  - ' virus"'
selection_img:
- Image|endswith:
  - \find.exe
  - \findstr.exe
- OriginalFileName:
  - FIND.EXE
  - FINDSTR.EXE
```

## MITRE ATT&CK
- T1518.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/987e3ca988ae3cff4b9f6e388c139c05bf44bbb8/atomics/T1518.001/T1518.001.md#atomic-test-1---security-software-discovery
- https://www.microsoft.com/en-us/security/blog/2023/10/18/multiple-north-korean-threat-actors-exploiting-the-teamcity-cve-2023-42793-vulnerability/
- https://www.hhs.gov/sites/default/files/manage-engine-vulnerability-sector-alert-tlpclear.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2023-10-20
- **Rule ID:** `4fe074b4-b833-4081-8f24-7dcfeca72b42`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_security_keyword_lookup.yml`
