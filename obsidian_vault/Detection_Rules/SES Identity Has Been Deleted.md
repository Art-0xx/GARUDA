---
type: detection_rule
title: "SES Identity Has Been Deleted"
rule_id: 20f754db-d025-4a8f-9d74-e0037e999a9a
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1070]
---

# SES Identity Has Been Deleted

## Description
Detects an instance of an SES identity being deleted via the "DeleteIdentity" event. This may be an indicator of an adversary removing the account that carried out suspicious or malicious activities

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: DeleteIdentity
  eventSource: ses.amazonaws.com
```

## MITRE ATT&CK
- T1070

## False Positives
- Unknown

## References
- https://unit42.paloaltonetworks.com/compromised-cloud-compute-credentials/

## Metadata
- **Author:** Janantha Marasinghe
- **Date:** 2022-12-13
- **Rule ID:** `20f754db-d025-4a8f-9d74-e0037e999a9a`
- **Source file:** `cloud/aws/cloudtrail/aws_delete_identity.yml`
