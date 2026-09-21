---
type: detection_rule
title: "Data Exfiltration with Wget"
rule_id: cb39d16b-b3b6-4a7a-8222-1cf24b686ffc
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1048.003]
---

# Data Exfiltration with Wget

## Description
Detects attempts to post the file with the usage of wget utility.
The adversary can bypass the permission restriction with the misconfigured sudo permission for wget utility which could allow them to read files like /etc/shadow.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  a0: wget
  a1|startswith: --post-file=
  type: EXECVE
```

## MITRE ATT&CK
- T1048.003

## False Positives
- Legitimate usage of wget utility to post a file

## References
- https://linux.die.net/man/1/wget
- https://gtfobins.github.io/gtfobins/wget/

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2021-11-18
- **Rule ID:** `cb39d16b-b3b6-4a7a-8222-1cf24b686ffc`
- **Source file:** `linux/auditd/execve/lnx_auditd_data_exfil_wget.yml`
