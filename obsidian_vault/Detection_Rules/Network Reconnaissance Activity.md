---
type: detection_rule
title: "Network Reconnaissance Activity"
rule_id: e6313acd-208c-44fc-a0ff-db85d572e90e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087, attack.t1082]
---

# Network Reconnaissance Activity

## Description
Detects a set of suspicious network related commands often used in recon stages

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - nslookup
  - _ldap._tcp.dc._msdcs.
```

## MITRE ATT&CK
- T1087
- T1082

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://thedfirreport.com/2022/02/07/qbot-likes-to-move-it-move-it/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-07
- **Rule ID:** `e6313acd-208c-44fc-a0ff-db85d572e90e`
- **Source file:** `windows/process_creation/proc_creation_win_nslookup_domain_discovery.yml`
