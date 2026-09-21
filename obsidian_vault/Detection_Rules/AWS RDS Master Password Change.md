---
type: detection_rule
title: "AWS RDS Master Password Change"
rule_id: 8a63cdd4-6207-414a-85bc-7e032bd3c1a2
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1020]
---

# AWS RDS Master Password Change

## Description
Detects the change of database master password. It may be a part of data exfiltration.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_source
selection_source:
  eventName: ModifyDBInstance
  eventSource: rds.amazonaws.com
  responseElements.pendingModifiedValues.masterUserPassword|contains: '*'
```

## MITRE ATT&CK
- T1020

## False Positives
- Benign changes to a db instance

## References
- https://github.com/RhinoSecurityLabs/pacu/blob/866376cd711666c775bbfcde0524c817f2c5b181/pacu/modules/rds__explore_snapshots/main.py

## Metadata
- **Author:** faloker
- **Date:** 2020-02-12
- **Rule ID:** `8a63cdd4-6207-414a-85bc-7e032bd3c1a2`
- **Source file:** `cloud/aws/cloudtrail/aws_rds_change_master_password.yml`
