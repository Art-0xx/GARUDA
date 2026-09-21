---
type: detection_rule
title: "Malicious Usage Of IMDS Credentials Outside Of AWS Infrastructure"
rule_id: 352a918a-34d8-4882-8470-44830c507aa3
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078, attack.t1078.002]
---

# Malicious Usage Of IMDS Credentials Outside Of AWS Infrastructure

## Description
Detects when an instance identity has taken an action that isn't inside SSM.
This can indicate that a compromised EC2 instance is being used as a pivot point.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_generic:
- eventSource: ssm.amazonaws.com
- eventName: RegisterManagedInstance
- sourceIPAddress: AWS Internal
selection:
  userIdentity.arn|re: .+:assumed-role/aws:.+
```

## MITRE ATT&CK
- T1078
- T1078.002

## False Positives
- A team has configured an EC2 instance to use instance profiles that grant the option for the EC2 instance to talk to other AWS Services

## References
- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-identity-roles.html
- https://ermetic.com/blog/aws/aws-ec2-imds-what-you-need-to-know/
- https://www.packetmischief.ca/2023/07/31/amazon-ec2-credential-exfiltration-how-it-happens-and-how-to-mitigate-it/#lifting-credentials-from-imds-this-is-why-we-cant-have-nice-things

## Metadata
- **Author:** jamesc-grafana
- **Date:** 2024-07-11
- **Rule ID:** `352a918a-34d8-4882-8470-44830c507aa3`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_imds_malicious_usage.yml`
