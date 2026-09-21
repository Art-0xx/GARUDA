---
type: detection_rule
title: "AWS VPC Flow Logs Deleted"
rule_id: e386b9b5-af12-450e-afff-761730fb8a98
platform: cloud
level: high
status: experimental
tags: [detection, sigma, cloud]
---

# AWS VPC Flow Logs Deleted

## Description
Detects the deletion of one or more VPC Flow Logs in AWS Elastic Compute Cloud (EC2) through the DeleteFlowLogs API call.
Adversaries may delete flow logs to evade detection or remove evidence of network activity, hindering forensic investigations and visibility into malicious operations.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_event_name and 1 of selection_status_*
selection_event_name:
  eventName: DeleteFlowLogs
selection_status_null:
  errorCode: null
selection_status_success:
  errorCode: Success
```

## False Positives
- During maintenance operations or testing, authorized administrators may delete VPC Flow Logs as part of routine network management or cleanup activities.

## References
- https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFlowLogs.html
- https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/delete-flow-logs.html
- https://www.elastic.co/docs/reference/security/prebuilt-rules/rules/integrations/aws/defense_evasion_ec2_flow_log_deletion

## Metadata
- **Author:** Ivan Saakov
- **Date:** 2025-10-19
- **Rule ID:** `e386b9b5-af12-450e-afff-761730fb8a98`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_vpc_flow_logs_deleted.yml`
