---
type: detection_rule
title: "Azure AD Health Service Agents Registry Keys Access"
rule_id: 1d2ab8ac-1a01-423b-9c39-001510eae8e8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1012]
---

# Azure AD Health Service Agents Registry Keys Access

## Description
This detection uses Windows security events to detect suspicious access attempts to the registry key values and sub-keys of Azure AD Health service agents (e.g AD FS).
Information from AD Health service agents can be used to potentially abuse some of the features provided by those services in the cloud (e.g. Federation).
This detection requires an access control entry (ACE) on the system access control list (SACL) of the following securable object: HKLM:\SOFTWARE\Microsoft\ADHealthAgent.
Make sure you set the SACL to propagate to its sub-keys.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ProcessName|contains:
  - Microsoft.Identity.Health.Adfs.DiagnosticsAgent.exe
  - Microsoft.Identity.Health.Adfs.InsightsService.exe
  - Microsoft.Identity.Health.Adfs.MonitoringAgent.Startup.exe
  - Microsoft.Identity.Health.Adfs.PshSurrogate.exe
  - Microsoft.Identity.Health.Common.Clients.ResourceMonitor.exe
selection:
  EventID:
  - 4656
  - 4663
  ObjectName: \REGISTRY\MACHINE\SOFTWARE\Microsoft\ADHealthAgent
  ObjectType: Key
```

## MITRE ATT&CK
- T1012

## False Positives
- Unknown

## References
- https://o365blog.com/post/hybridhealthagent/
- https://github.com/OTRF/Set-AuditRule/blob/c3dec5443414231714d850565d364ca73475ade5/rules/registry/aad_connect_health_service_agent.yml

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research), MSTIC
- **Date:** 2021-08-26
- **Rule ID:** `1d2ab8ac-1a01-423b-9c39-001510eae8e8`
- **Source file:** `windows/builtin/security/win_security_aadhealth_svc_agent_regkey_access.yml`
