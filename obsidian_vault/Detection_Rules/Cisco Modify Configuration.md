---
type: detection_rule
title: "Cisco Modify Configuration"
rule_id: 671ffc77-50a7-464f-9e3d-9ea2b493b26b
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1490, attack.t1505, attack.t1565.002, attack.t1053]
---

# Cisco Modify Configuration

## Description
Modifications to a config that will serve an adversary's impacts or persistence

## Log Source
```yaml
product: cisco
service: aaa
```

## Detection Logic
```yaml
condition: keywords
keywords:
- ip http server
- ip https server
- kron policy-list
- kron occurrence
- policy-list
- access-list
- ip access-group
- archive maximum
- ntp server
```

## MITRE ATT&CK
- T1490
- T1505
- T1565.002
- T1053

## False Positives
- Legitimate administrators may run these commands

## Metadata
- **Author:** Austin Clark
- **Date:** 2019-08-12
- **Rule ID:** `671ffc77-50a7-464f-9e3d-9ea2b493b26b`
- **Source file:** `network/cisco/aaa/cisco_cli_modify_config.yml`
