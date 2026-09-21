---
type: detection_rule
title: "Cisco Clear Logs"
rule_id: ceb407f6-8277-439b-951f-e4210e3ed956
platform: network
level: high
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1070.003]
---

# Cisco Clear Logs

## Description
Clear command history in network OS which is used for defense evasion

## Log Source
```yaml
product: cisco
service: aaa
```

## Detection Logic
```yaml
condition: keywords
keywords:
- clear logging
- clear archive
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Legitimate administrators may run these commands

## References
- https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus5000/sw/command/reference/sysmgmt/n5k-sysmgmt-cr/n5k-sm_cmds_c.html
- https://www.cisco.com/c/en/us/td/docs/ios/12_2sr/12_2sra/feature/guide/srmgtint.html#wp1127609

## Metadata
- **Author:** Austin Clark
- **Date:** 2019-08-12
- **Rule ID:** `ceb407f6-8277-439b-951f-e4210e3ed956`
- **Source file:** `network/cisco/aaa/cisco_cli_clear_logs.yml`
