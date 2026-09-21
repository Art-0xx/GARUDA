---
type: detection_rule
title: "AWS IAM Backdoor Users Keys"
rule_id: 0a5177f4-6ca9-44c2-aacf-d3f3d8b6e4d2
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1098]
---

# AWS IAM Backdoor Users Keys

## Description
Detects AWS API key creation for a user by another user.
Backdoored users can be used to obtain persistence in the AWS environment.
Also with this alert, you can detect a flow of AWS keys in your org.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_same_user:
  userIdentity.arn|fieldref|contains: responseElements.accessKey.userName
selection:
  eventName: CreateAccessKey
  eventSource: iam.amazonaws.com
```

## MITRE ATT&CK
- T1098

## False Positives
- Adding user keys to their own accounts (the filter cannot cover all possible variants of user naming)
- AWS API keys legitimate exchange workflows

## References
- https://github.com/RhinoSecurityLabs/pacu/blob/866376cd711666c775bbfcde0524c817f2c5b181/pacu/modules/iam__backdoor_users_keys/main.py
- https://github.com/SigmaHQ/sigma/issues/6223

## Metadata
- **Author:** faloker
- **Date:** 2020-02-12
- **Rule ID:** `0a5177f4-6ca9-44c2-aacf-d3f3d8b6e4d2`
- **Source file:** `cloud/aws/cloudtrail/aws_iam_backdoor_users_keys.yml`
