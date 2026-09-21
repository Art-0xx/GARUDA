---
type: detection_rule
title: "Ingress/Egress Security Group Modification"
rule_id: 6fb77778-040f-4015-9440-572aa9b6b580
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1190]
---

# Ingress/Egress Security Group Modification

## Description
Detects when an account makes changes to the ingress or egress rules of a security group.
This can indicate that an attacker is attempting to open up new attack vectors in the account, that they are trying to exfiltrate data over the network, or that they are trying to allow machines in that VPC/Subnet to contact a C&C server.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName:
  - AuthorizeSecurityGroupEgress
  - AuthorizeSecurityGroupIngress
  - RevokeSecurityGroupEgress
  - RevokeSecurityGroupIngress
  eventSource: ec2.amazonaws.com
```

## MITRE ATT&CK
- T1190

## False Positives
- New VPCs and Subnets being setup requiring a different security profile to those already defined
- A single port being opened for a new service that is known to be deploying
- Administrators closing unused ports to reduce the attack surface

## References
- https://www.gorillastack.com/blog/real-time-events/important-aws-cloudtrail-security-events-tracking/

## Metadata
- **Author:** jamesc-grafana
- **Date:** 2024-07-11
- **Rule ID:** `6fb77778-040f-4015-9440-572aa9b6b580`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_security_group_change_ingress_egress.yml`
