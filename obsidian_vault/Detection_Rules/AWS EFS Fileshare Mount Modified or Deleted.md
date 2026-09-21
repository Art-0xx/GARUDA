---
type: detection_rule
title: "AWS EFS Fileshare Mount Modified or Deleted"
rule_id: 6a7ba45c-63d8-473e-9736-2eaabff79964
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1485]
---

# AWS EFS Fileshare Mount Modified or Deleted

## Description
Detects when a EFS Fileshare Mount is modified or deleted. An adversary breaking any file system using the mount target that is being deleted, which might disrupt instances or applications using those mounts.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: DeleteMountTarget
  eventSource: elasticfilesystem.amazonaws.com
```

## MITRE ATT&CK
- T1485

## False Positives
- Unknown

## References
- https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-15
- **Rule ID:** `6a7ba45c-63d8-473e-9736-2eaabff79964`
- **Source file:** `cloud/aws/cloudtrail/aws_efs_fileshare_mount_modified_or_deleted.yml`
