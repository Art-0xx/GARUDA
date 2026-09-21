---
type: detection_rule
title: "PUA - AWS TruffleHog Execution"
rule_id: a840e606-7c8c-4684-9bc1-eb6b6155127f
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1555, attack.t1003]
---

# PUA - AWS TruffleHog Execution

## Description
Detects the execution of TruffleHog, a popular open-source tool used for scanning repositories for secrets and sensitive information, within an AWS environment.
It has been reported to be used by threat actors for credential harvesting. All detections should be investigated to determine if the usage is authorized by security teams or potentially malicious.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  userAgent: TruffleHog
```

## MITRE ATT&CK
- T1555
- T1003

## False Positives
- Legitimate use of TruffleHog by security teams for credential scanning.

## References
- https://github.com/trufflesecurity/trufflehog
- https://www.rapid7.com/blog/post/tr-crimson-collective-a-new-threat-group-observed-operating-in-the-cloud/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-21
- **Rule ID:** `a840e606-7c8c-4684-9bc1-eb6b6155127f`
- **Source file:** `cloud/aws/cloudtrail/aws_cloudtrail_pua_trufflehog.yml`
