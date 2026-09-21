---
type: detection_rule
title: "LSASS Memory Access by Tool With Dump Keyword In Name"
rule_id: 9bd012ee-0dff-44d7-84a0-aa698cfd87a3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Memory Access by Tool With Dump Keyword In Name

## Description
Detects LSASS process access requests from a source process with the "dump" keyword in its image name.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  GrantedAccess|endswith:
  - '10'
  - '30'
  - '50'
  - '70'
  - '90'
  - B0
  - D0
  - F0
  - '18'
  - '38'
  - '58'
  - '78'
  - '98'
  - B8
  - D8
  - F8
  - 1A
  - 3A
  - 5A
  - 7A
  - 9A
  - BA
  - DA
  - FA
  - '0x14C2'
  - FF
  SourceImage|contains: dump
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Rare programs that contain the word dump in their name and access lsass

## References
- https://twitter.com/_xpn_/status/1491557187168178176
- https://www.ired.team/offensive-security/credential-access-and-credential-dumping/dump-credentials-from-lsass-process-without-mimikatz

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-10
- **Rule ID:** `9bd012ee-0dff-44d7-84a0-aa698cfd87a3`
- **Source file:** `windows/process_access/proc_access_win_lsass_dump_keyword_image.yml`
