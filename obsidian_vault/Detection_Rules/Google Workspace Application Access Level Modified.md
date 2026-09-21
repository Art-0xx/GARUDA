---
type: detection_rule
title: "Google Workspace Application Access Level Modified"
rule_id: 22f2fb54-5312-435d-852f-7c74f81684ca
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1098.003]
---

# Google Workspace Application Access Level Modified

## Description
Detects when an access level is changed for a Google workspace application.
An access level is part of BeyondCorp Enterprise which is Google Workspace's way of enforcing Zero Trust model.
An adversary would be able to remove access levels to gain easier access to Google workspace resources.

## Log Source
```yaml
product: gcp
service: google_workspace.admin
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: CHANGE_APPLICATION_SETTING
  eventService: admin.googleapis.com
  setting_name|startswith: ContextAwareAccess
```

## MITRE ATT&CK
- T1098.003

## False Positives
- Legitimate administrative activities changing the access levels for an application

## References
- https://developers.google.com/admin-sdk/reports/v1/appendix/activity/admin-application-settings
- https://support.google.com/a/answer/9261439

## Metadata
- **Author:** Bryan Lim
- **Date:** 2024-01-12
- **Rule ID:** `22f2fb54-5312-435d-852f-7c74f81684ca`
- **Source file:** `cloud/gcp/gworkspace/admin/gcp_gworkspace_application_access_levels_modified.yml`
