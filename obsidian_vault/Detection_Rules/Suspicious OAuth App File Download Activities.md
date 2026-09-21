---
type: detection_rule
title: "Suspicious OAuth App File Download Activities"
rule_id: ee111937-1fe7-40f0-962a-0eb44d57d174
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
---

# Suspicious OAuth App File Download Activities

## Description
Detects when a Microsoft Cloud App Security reported when an app downloads multiple files from Microsoft SharePoint or Microsoft OneDrive in a manner that is unusual for the user.

## Log Source
```yaml
product: m365
service: threat_management
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: Suspicious OAuth app file download activities
  eventSource: SecurityComplianceCenter
  status: success
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy
- https://learn.microsoft.com/en-us/defender-cloud-apps/policy-template-reference

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-23
- **Rule ID:** `ee111937-1fe7-40f0-962a-0eb44d57d174`
- **Source file:** `cloud/m365/threat_management/microsoft365_susp_oauth_app_file_download_activities.yml`
