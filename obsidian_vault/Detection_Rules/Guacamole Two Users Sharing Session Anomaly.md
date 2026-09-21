---
type: detection_rule
title: "Guacamole Two Users Sharing Session Anomaly"
rule_id: 1edd77db-0669-4fef-9598-165bda82826d
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1212]
---

# Guacamole Two Users Sharing Session Anomaly

## Description
Detects suspicious session with two users present

## Log Source
```yaml
product: linux
service: guacamole
```

## Detection Logic
```yaml
condition: selection
selection:
- (2 users now present)
```

## MITRE ATT&CK
- T1212

## False Positives
- Unknown

## References
- https://research.checkpoint.com/2020/apache-guacamole-rce/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-07-03
- **Rule ID:** `1edd77db-0669-4fef-9598-165bda82826d`
- **Source file:** `linux/builtin/guacamole/lnx_guacamole_susp_guacamole.yml`
