---
type: detection_rule
title: "AWS GuardDuty Important Change"
rule_id: 6e61ee20-ce00-4f8d-8aee-bedd8216f7e3
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1685]
---

# AWS GuardDuty Important Change

## Description
Detects updates of the GuardDuty list of trusted IPs, perhaps to disable security alerts against malicious IPs.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection_source
selection_source:
  eventName: CreateIPSet
  eventSource: guardduty.amazonaws.com
```

## MITRE ATT&CK
- T1685

## False Positives
- Valid change in the GuardDuty (e.g. to ignore internal scanners)

## References
- https://github.com/RhinoSecurityLabs/pacu/blob/866376cd711666c775bbfcde0524c817f2c5b181/pacu/modules/guardduty__whitelist_ip/main.py#L9

## Metadata
- **Author:** faloker
- **Date:** 2020-02-11
- **Rule ID:** `6e61ee20-ce00-4f8d-8aee-bedd8216f7e3`
- **Source file:** `cloud/aws/cloudtrail/aws_guardduty_disruption.yml`
