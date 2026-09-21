---
type: detection_rule
title: "Service Registry Key Read Access Request"
rule_id: 11d00fff-5dc3-428c-8184-801f292faec0
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Service Registry Key Read Access Request

## Description
Detects "read access" requests on the services registry key.
Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services.
Adversaries may use flaws in the permissions for Registry keys related to services to redirect from the originally specified executable to one that they control, in order to launch their own code when a service starts.

## Log Source
```yaml
definition: 'Requirements: SACLs must be enabled for "READ_CONTROL" on the registry
  keys used in this rule'
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  AccessList|contains: '%%1538'
  EventID: 4663
  ObjectName|contains|all:
  - \SYSTEM\
  - ControlSet\Services\
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Likely from legitimate applications reading their key. Requires heavy tuning

## References
- https://center-for-threat-informed-defense.github.io/summiting-the-pyramid/analytics/service_registry_permissions_weakness_check/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1574.011/T1574.011.md#atomic-test-1---service-registry-permissions-weakness

## Metadata
- **Author:** Center for Threat Informed Defense (CTID) Summiting the Pyramid Team
- **Date:** 2023-09-28
- **Rule ID:** `11d00fff-5dc3-428c-8184-801f292faec0`
- **Source file:** `windows/builtin/security/win_security_registry_permissions_weakness_check.yml`
