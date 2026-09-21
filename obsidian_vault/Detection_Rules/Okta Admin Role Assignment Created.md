---
type: detection_rule
title: "Okta Admin Role Assignment Created"
rule_id: 139bdd4b-9cd7-49ba-a2f4-744d0a8f5d8c
platform: identity
level: medium
status: test
tags: [detection, sigma, identity]
---

# Okta Admin Role Assignment Created

## Description
Detects when a new admin role assignment is created. Which could be a sign of privilege escalation or persistence

## Log Source
```yaml
product: okta
service: okta
```

## Detection Logic
```yaml
condition: selection
selection:
  eventType: iam.resourceset.bindings.add
```

## False Positives
- Legitimate creation of a new admin role assignment

## References
- https://developer.okta.com/docs/reference/api/system-log/
- https://developer.okta.com/docs/reference/api/event-types/

## Metadata
- **Author:** Nikita Khalimonenkov
- **Date:** 2023-01-19
- **Rule ID:** `139bdd4b-9cd7-49ba-a2f4-744d0a8f5d8c`
- **Source file:** `identity/okta/okta_admin_role_assignment_created.yml`
