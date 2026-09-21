---
type: detection_rule
title: "Modification or Deletion of an AWS RDS Cluster"
rule_id: 457cc9ac-d8e6-4d1d-8c0e-251d0f11a74c
platform: cloud
level: high
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1020]
---

# Modification or Deletion of an AWS RDS Cluster

## Description
Detects modifications to an RDS cluster or its deletion, which may indicate potential data exfiltration attempts, unauthorized access, or exposure of sensitive information.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName:
  - ModifyDBCluster
  - DeleteDBCluster
  eventSource: rds.amazonaws.com
```

## MITRE ATT&CK
- T1020

## False Positives
- Verify if the modification or deletion was performed by an authorized administrator.
- Confirm if the modification or deletion was part of a planned change or maintenance activity.

## References
- https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html
- https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html
- https://cloud.hacktricks.xyz/pentesting-cloud/aws-security/aws-privilege-escalation/aws-rds-privesc#rds-modifydbinstance

## Metadata
- **Author:** Ivan Saakov
- **Date:** 2024-12-06
- **Rule ID:** `457cc9ac-d8e6-4d1d-8c0e-251d0f11a74c`
- **Source file:** `cloud/aws/cloudtrail/aws_rds_dbcluster_actions.yml`
