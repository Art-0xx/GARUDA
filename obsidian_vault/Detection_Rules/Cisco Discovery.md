---
type: detection_rule
title: "Cisco Discovery"
rule_id: 9705a6a1-6db6-4a16-a987-15b7151e299b
platform: network
level: low
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1083, attack.t1201, attack.t1057, attack.t1018, attack.t1082, attack.t1016, attack.t1049, attack.t1033, attack.t1124]
---

# Cisco Discovery

## Description
Find information about network devices that is not stored in config files

## Log Source
```yaml
product: cisco
service: aaa
```

## Detection Logic
```yaml
condition: keywords
keywords:
- dir
- show arp
- show cdp
- show clock
- show ip interface
- show ip route
- show ip sockets
- show processes
- show ssh
- show users
- show version
```

## MITRE ATT&CK
- T1083
- T1201
- T1057
- T1018
- T1082
- T1016
- T1049
- T1033
- T1124

## False Positives
- Commonly used by administrators for troubleshooting

## References
- https://www.cisco.com/c/en/us/td/docs/server_nw_virtual/2-5_release/command_reference/show.html

## Metadata
- **Author:** Austin Clark
- **Date:** 2019-08-12
- **Rule ID:** `9705a6a1-6db6-4a16-a987-15b7151e299b`
- **Source file:** `network/cisco/aaa/cisco_cli_discovery.yml`
