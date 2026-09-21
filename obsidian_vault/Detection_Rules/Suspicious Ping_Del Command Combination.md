---
type: detection_rule
title: "Suspicious Ping/Del Command Combination"
rule_id: 54786ddc-5b8a-11ed-9b6a-0242ac120002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.004]
---

# Suspicious Ping/Del Command Combination

## Description
Detects a method often used by ransomware. Which combines the "ping" to wait a couple of seconds and then "del" to delete the file in question. Its used to hide the file responsible for the initial infection for example

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_all:
  CommandLine|contains|all:
  - ping
  - 'del '
selection_count:
  CommandLine|contains|windash: ' -n '
selection_del_param:
  CommandLine|contains|windash:
  - ' -f '
  - ' -q '
selection_nul:
  CommandLine|contains: Nul
```

## MITRE ATT&CK
- T1070.004

## False Positives
- Unknown

## References
- https://blog.sygnia.co/kaseya-ransomware-supply-chain-attack
- https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2022/06/23093553/Common-TTPs-of-the-modern-ransomware_low-res.pdf
- https://www.acronis.com/en-us/blog/posts/lockbit-ransomware/
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/blackbyte-exbyte-ransomware

## Metadata
- **Author:** Ilya Krestinichev
- **Date:** 2022-11-03
- **Rule ID:** `54786ddc-5b8a-11ed-9b6a-0242ac120002`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_ping_del_combined_execution.yml`
