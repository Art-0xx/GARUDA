---
tags: 
  - mitre/attack/data_component
---

# Group Enumeration (`DC0099`)

Extracting group lists from identity systems identifies permissions, roles, or configurations. Adversaries may exploit high-privilege groups or misconfigurations. Examples:

- AWS CLI: `aws iam list-groups`
- PowerShell: `Get-ADGroup -Filter *`
- (Saas) Google Workspace: Admin SDK Directory API
- Azure: `Get-AzureADGroup`
- Microsoft 365:  Graph API `GET https://graph.microsoft.com/v1.0/groups`

*Data Collection Measures:*

- Cloud Logging: Enable AWS CloudTrail, Azure Activity Logs, and Google Workspace Admin Logs for group-related actions.
- Directory Monitoring: Track logs like AD Event ID 4662 (object operations).
- API Monitoring: Log API activity like AWS IAM queries.
- SaaS Monitoring: Use platform logs (e.g., Office 365 Unified Audit Logs).
- SIEM Integration: Centralize group query tracking.





