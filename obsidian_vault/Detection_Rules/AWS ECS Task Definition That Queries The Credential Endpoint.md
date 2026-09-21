---
type: detection_rule
title: "AWS ECS Task Definition That Queries The Credential Endpoint"
rule_id: b94bf91e-c2bf-4047-9c43-c6810f43baad
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1525]
---

# AWS ECS Task Definition That Queries The Credential Endpoint

## Description
Detects when an Elastic Container Service (ECS) Task Definition includes a command to query the credential endpoint.
This can indicate a potential adversary adding a backdoor to establish persistence or escalate privileges.

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
  - DescribeTaskDefinition
  - RegisterTaskDefinition
  - RunTask
  eventSource: ecs.amazonaws.com
  requestParameters.containerDefinitions.command|contains: $AWS_CONTAINER_CREDENTIALS_RELATIVE_URI
```

## MITRE ATT&CK
- T1525

## False Positives
- Task Definition being modified to request credentials from the Task Metadata Service for valid reasons

## References
- https://github.com/RhinoSecurityLabs/pacu/blob/866376cd711666c775bbfcde0524c817f2c5b181/pacu/modules/ecs__backdoor_task_def/main.py
- https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
- https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html

## Metadata
- **Author:** Darin Smith
- **Date:** 2022-06-07
- **Rule ID:** `b94bf91e-c2bf-4047-9c43-c6810f43baad`
- **Source file:** `cloud/aws/cloudtrail/aws_ecs_task_definition_cred_endpoint_query.yml`
