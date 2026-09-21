---
type: detection_rule
title: "Restore Public AWS RDS Instance"
rule_id: c3f265c7-ff03-4056-8ab2-d486227b4599
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1020]
---

# Restore Public AWS RDS Instance

## Description
Detects the recovery of a new public database instance from a snapshot. It may be a part of data exfiltration.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_source
selection_source:
  eventName: RestoreDBInstanceFromDBSnapshot
  eventSource: rds.amazonaws.com
  responseElements.publiclyAccessible: 'true'
```

## MITRE ATT&CK
- T1020

## False Positives
- Unknown

## References
- https://github.com/RhinoSecurityLabs/pacu/blob/866376cd711666c775bbfcde0524c817f2c5b181/pacu/modules/rds__explore_snapshots/main.py

## Metadata
- **Author:** faloker
- **Date:** 2020-02-12
- **Rule ID:** `c3f265c7-ff03-4056-8ab2-d486227b4599`
- **Source file:** `cloud/aws/cloudtrail/aws_rds_public_db_restore.yml`
