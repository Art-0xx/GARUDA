---
type: detection_rule
title: "AWS EFS Fileshare Modified or Deleted"
rule_id: 25cb1ba1-8a19-4a23-a198-d252664c8cef
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
---

# AWS EFS Fileshare Modified or Deleted

## Description
Detects when a EFS Fileshare is modified or deleted.
You can't delete a file system that is in use.
If the file system has any mount targets, the adversary must first delete them, so deletion of a mount will occur before deletion of a fileshare.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: DeleteFileSystem
  eventSource: elasticfilesystem.amazonaws.com
```

## False Positives
- Unknown

## References
- https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-15
- **Rule ID:** `25cb1ba1-8a19-4a23-a198-d252664c8cef`
- **Source file:** `cloud/aws/cloudtrail/aws_efs_fileshare_modified_or_deleted.yml`
