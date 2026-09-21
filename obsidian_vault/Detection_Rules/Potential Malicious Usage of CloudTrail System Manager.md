---
type: detection_rule
title: "Potential Malicious Usage of CloudTrail System Manager"
rule_id: 38e7f511-3f74-41d4-836e-f57dfa18eead
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1566, attack.t1566.002]
---

# Potential Malicious Usage of CloudTrail System Manager

## Description
Detect when System Manager successfully executes commands against an instance.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_event and 1 of selection_status_*
selection_event:
  eventName: SendCommand
  eventSource: ssm.amazonaws.com
selection_status_null:
  errorCode: null
selection_status_success:
  errorCode: Success
```

## MITRE ATT&CK
- T1566
- T1566.002

## False Positives
- There are legitimate uses of SSM to send commands to EC2 instances
- Legitimate users may have to use SSM to perform actions against machines in the Cloud to update or maintain them

## References
- https://github.com/elastic/detection-rules/blob/v8.6.0/rules/integrations/aws/initial_access_via_system_manager.toml

## Metadata
- **Author:** jamesc-grafana
- **Date:** 2024-07-11
- **Rule ID:** `38e7f511-3f74-41d4-836e-f57dfa18eead`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_ssm_malicious_usage.yml`
