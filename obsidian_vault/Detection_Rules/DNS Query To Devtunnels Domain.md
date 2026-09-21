---
type: detection_rule
title: "DNS Query To Devtunnels Domain"
rule_id: 1cb0c6ce-3d00-44fc-ab9c-6d6d577bf20b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001, attack.t1572]
---

# DNS Query To Devtunnels Domain

## Description
Detects DNS query requests to Devtunnels domains. Attackers can abuse that feature to establish a reverse shell or persistence on a machine.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  QueryName|endswith: .devtunnels.ms
```

## MITRE ATT&CK
- T1071.001
- T1572

## False Positives
- Legitimate use of Devtunnels will also trigger this.

## References
- https://blueteamops.medium.com/detecting-dev-tunnels-16f0994dc3e2
- https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/security
- https://cydefops.com/devtunnels-unleashed

## Metadata
- **Author:** citron_ninja
- **Date:** 2023-10-25
- **Rule ID:** `1cb0c6ce-3d00-44fc-ab9c-6d6d577bf20b`
- **Source file:** `windows/dns_query/dns_query_win_devtunnels_communication.yml`
