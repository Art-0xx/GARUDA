---
type: detection_rule
title: "AWS GuardDuty Detector Deleted Or Updated"
rule_id: d2656e78-c069-4571-8220-9e0ab5913f19
platform: cloud
level: high
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1685, attack.t1685.002]
---

# AWS GuardDuty Detector Deleted Or Updated

## Description
Detects successful deletion or disabling of an AWS GuardDuty detector, possibly by an attacker trying to avoid detection of its malicious activities.
Upon deletion, GuardDuty stops monitoring the environment and all existing findings are lost.
Verify with the user identity that this activity is legitimate.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_event_source and 1 of selection_action_* and 1 of selection_status_*
selection_action_delete:
  eventName: DeleteDetector
selection_action_update:
  eventName: UpdateDetector
  requestParameters.enable: 'false'
selection_event_source:
  eventSource: guardduty.amazonaws.com
selection_status_null:
  errorCode: null
selection_status_success:
  errorCode: Success
```

## MITRE ATT&CK
- T1685
- T1685.002

## False Positives
- Legitimate detector deletion by an admin (e.g., during account decommissioning).
- Temporary disablement for troubleshooting (verify via change management tickets).
- Automated deployment tools (e.g. Terraform) managing GuardDuty state.

## References
- https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html
- https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html
- https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_suspend-disable.html
- https://docs.datadoghq.com/security/default_rules/719-39f-9cd/
- https://docs.prismacloud.io/en/enterprise-edition/policy-reference/aws-policies/aws-general-policies/ensure-aws-guardduty-detector-is-enabled

## Metadata
- **Author:** suktech24
- **Date:** 2025-11-27
- **Rule ID:** `d2656e78-c069-4571-8220-9e0ab5913f19`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_guardduty_detector_deleted_or_updated.yml`
