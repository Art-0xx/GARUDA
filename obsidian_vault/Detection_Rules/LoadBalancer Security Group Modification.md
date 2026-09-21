---
type: detection_rule
title: "LoadBalancer Security Group Modification"
rule_id: 7a4409fc-f8ca-45f6-8006-127d779eaad9
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1190]
---

# LoadBalancer Security Group Modification

## Description
Detects changes to the security groups associated with an Elastic Load Balancer (ELB) or Application Load Balancer (ALB).
This can indicate that a misconfiguration allowing more traffic into the system than required, or could indicate that an attacker is attempting to enable new connections into a VPC or subnet controlled by the account.

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
  - ApplySecurityGroupsToLoadBalancer
  - SetSecurityGroups
  eventSource: elasticloadbalancing.amazonaws.com
```

## MITRE ATT&CK
- T1190

## False Positives
- Repurposing of an ELB or ALB to serve a different or additional application
- Changes to security groups to allow for new services to be deployed

## References
- https://www.gorillastack.com/blog/real-time-events/important-aws-cloudtrail-security-events-tracking/

## Metadata
- **Author:** jamesc-grafana
- **Date:** 2024-07-11
- **Rule ID:** `7a4409fc-f8ca-45f6-8006-127d779eaad9`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_security_group_change_loadbalancer.yml`
