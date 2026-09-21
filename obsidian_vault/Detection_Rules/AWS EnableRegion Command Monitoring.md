---
type: detection_rule
title: "AWS EnableRegion Command Monitoring"
rule_id: a5ffb6ea-c784-4e01-b30a-deb6e58ca2ab
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
---

# AWS EnableRegion Command Monitoring

## Description
Detects the use of the EnableRegion command in AWS CloudTrail logs.
While AWS has 30+ regions, some of them are enabled by default, others must be explicitly enabled in each account separately.
There may be situations where security monitoring does not cover some new AWS regions.
Monitoring the EnableRegion command is important for identifying potential persistence mechanisms employed by adversaries, as enabling additional regions can facilitate continued access and operations within an AWS environment.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: EnableRegion
  eventSource: account.amazonaws.com
```

## False Positives
- Legitimate use of the EnableRegion command by authorized administrators.

## References
- https://docs.aws.amazon.com/accounts/latest/reference/API_EnableRegion.html
- https://awscli.amazonaws.com/v2/documentation/api/2.14.0/reference/account/enable-region.html

## Metadata
- **Author:** Ivan Saakov, Sergey Zelenskiy
- **Date:** 2025-10-19
- **Rule ID:** `a5ffb6ea-c784-4e01-b30a-deb6e58ca2ab`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_region_enabled.yml`
