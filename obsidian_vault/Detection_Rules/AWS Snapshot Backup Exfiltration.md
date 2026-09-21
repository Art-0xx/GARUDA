---
type: detection_rule
title: "AWS Snapshot Backup Exfiltration"
rule_id: abae8fec-57bd-4f87-aff6-6e3db989843d
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1537]
---

# AWS Snapshot Backup Exfiltration

## Description
Detects the modification of an EC2 snapshot's permissions to enable access from another account

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_source
selection_source:
  eventName: ModifySnapshotAttribute
  eventSource: ec2.amazonaws.com
```

## MITRE ATT&CK
- T1537

## False Positives
- Valid change to a snapshot's permissions

## References
- https://www.justice.gov/file/1080281/download

## Metadata
- **Author:** Darin Smith
- **Date:** 2021-05-17
- **Rule ID:** `abae8fec-57bd-4f87-aff6-6e3db989843d`
- **Source file:** `cloud/aws/cloudtrail/aws_snapshot_backup_exfiltration.yml`
