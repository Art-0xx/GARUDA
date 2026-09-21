---
type: detection_rule
title: "Suspicious SQL Query"
rule_id: d84c0ded-edd7-4123-80ed-348bb3ccc4d5
platform: category
level: medium
status: test
tags: [detection, sigma, category]
mitre_tags: [attack.t1190, attack.t1505.001]
---

# Suspicious SQL Query

## Description
Detects suspicious SQL query keywrods that are often used during recon, exfiltration or destructive activities. Such as dropping tables and selecting wildcard fields

## Log Source
```yaml
category: database
definition: 'Requirements: Must be able to log the SQL queries'
```

## Detection Logic
```yaml
condition: keywords
keywords:
- drop
- truncate
- dump
- select \*
```

## MITRE ATT&CK
- T1190
- T1505.001

## False Positives
- Inventory and monitoring activity
- Vulnerability scanners
- Legitimate applications

## References
- https://github.com/sqlmapproject/sqlmap

## Metadata
- **Author:** @juju4
- **Date:** 2022-12-27
- **Rule ID:** `d84c0ded-edd7-4123-80ed-348bb3ccc4d5`
- **Source file:** `category/database/db_anomalous_query.yml`
