---
type: detection_rule
title: "AWS User Login Profile Was Modified"
rule_id: 055fb148-60f8-462d-ad16-26926ce050f1
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1098]
---

# AWS User Login Profile Was Modified

## Description
Detects activity when someone is changing passwords on behalf of other users.
An attacker with the "iam:UpdateLoginProfile" permission on other users can change the password used to login to the AWS console on any user that already has a login profile setup.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_user_identity:
  userIdentity.arn|fieldref: requestParameters.userName
selection:
  eventName: UpdateLoginProfile
  eventSource: iam.amazonaws.com
```

## MITRE ATT&CK
- T1098

## False Positives
- Legitimate user account administration

## References
- https://github.com/RhinoSecurityLabs/AWS-IAM-Privilege-Escalation

## Metadata
- **Author:** toffeebr33k
- **Date:** 2021-08-09
- **Rule ID:** `055fb148-60f8-462d-ad16-26926ce050f1`
- **Source file:** `cloud/aws/cloudtrail/aws_update_login_profile.yml`
