---
type: detection_rule
title: "AWS Key Pair Import Activity"
rule_id: 92f84194-8d9a-4ee0-8699-c30bfac59780
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078]
---

# AWS Key Pair Import Activity

## Description
Detects the import of SSH key pairs into AWS EC2, which may indicate an attacker attempting to gain unauthorized access to instances. This activity could lead to initial access, persistence, or privilege escalation, potentially compromising sensitive data and operations.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: ImportKeyPair
  eventSource: ec2.amazonaws.com
```

## MITRE ATT&CK
- T1078

## False Positives
- Legitimate administrative actions by authorized users importing keys for valid purposes.
- Automated processes for infrastructure setup may trigger this alert.
- Verify the user identity, user agent, and source IP address to ensure they are expected.

## References
- https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html

## Metadata
- **Author:** Ivan Saakov
- **Date:** 2024-12-19
- **Rule ID:** `92f84194-8d9a-4ee0-8699-c30bfac59780`
- **Source file:** `cloud/aws/cloudtrail/aws_ec2_import_key_pair_activity.yml`
