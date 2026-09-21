---
type: detection_rule
title: "Remote File Copy"
rule_id: 7a14080d-a048-4de8-ae58-604ce58a795b
platform: linux
level: low
status: stable
tags: [detection, sigma, linux]
mitre_tags: [attack.t1105]
---

# Remote File Copy

## Description
Detects the use of tools that copy files from or to remote systems

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: tools and filter
filter:
- '@'
- ':'
tools:
- 'scp '
- 'rsync '
- 'sftp '
```

## MITRE ATT&CK
- T1105

## False Positives
- Legitimate administration activities

## References
- https://www.cisa.gov/stopransomware/ransomware-guide

## Metadata
- **Author:** Ömer Günal
- **Date:** 2020-06-18
- **Rule ID:** `7a14080d-a048-4de8-ae58-604ce58a795b`
- **Source file:** `linux/builtin/lnx_file_copy.yml`
