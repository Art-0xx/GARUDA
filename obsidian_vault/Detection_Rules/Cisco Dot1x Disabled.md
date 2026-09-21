---
type: detection_rule
title: "Cisco Dot1x Disabled"
rule_id: ef0ff092-a24a-4fbc-beea-06c08d53e085
platform: network
level: medium
status: experimental
tags: [detection, sigma, network]
mitre_tags: [attack.t1685, attack.t1556.004]
---

# Cisco Dot1x Disabled

## Description
Detects the manual disablement of IEEE 802.1X (dot1x) on a Cisco network device interface.
Disabling dot1x bypasses Network Access Control (NAC) mechanisms, potentially allowing unauthorized devices to gain access to the internal network.
This activity is a common technique used by attackers or malicious insiders to establish persistence or perform lateral movement via rogue devices.

## Log Source
```yaml
product: cisco
service: aaa
```

## Detection Logic
```yaml
condition: keywords
keywords:
- access-session port-control force-authorized
- authentication port-control force-authorized
- dot1x port-control force-authorized
- no access-session port-control
- no authentication port-control
- no dot1x port-control
- no dot1x system-auth-control
```

## MITRE ATT&CK
- T1685
- T1556.004

## False Positives
- Administrator troubleshooting connectivity issues

## References
- https://www.cisco.com/en/US/docs/ios-xml/ios/san/command/san-xe-3se-3850-cr-book_chapter_00.html#wp3394428680
- https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/a1/sec-a1-xe-3se-3850-cr-book/sec-a1-xe-3se-3850-cr-book_chapter_010.html#wp3502072400
- https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_53_se/command/reference/2960ComRef/cli1.html#47220

## Metadata
- **Author:** Luc Génaux
- **Date:** 2026-04-28
- **Rule ID:** `ef0ff092-a24a-4fbc-beea-06c08d53e085`
- **Source file:** `network/cisco/aaa/cisco_cli_dot1x_disabled.yml`
