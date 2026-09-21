---
type: detection_rule
title: "Django Framework Exceptions"
rule_id: fd435618-981e-4a7c-81f8-f78ce480d616
platform: application
level: medium
status: stable
tags: [detection, sigma, application]
mitre_tags: [attack.t1190]
---

# Django Framework Exceptions

## Description
Detects suspicious Django web application framework exceptions that could indicate exploitation attempts

## Log Source
```yaml
category: application
product: django
```

## Detection Logic
```yaml
condition: keywords
keywords:
- SuspiciousOperation
- DisallowedHost
- DisallowedModelAdminLookup
- DisallowedModelAdminToField
- DisallowedRedirect
- InvalidSessionKey
- RequestDataTooBig
- SuspiciousFileOperation
- SuspiciousMultipartForm
- SuspiciousSession
- TooManyFieldsSent
- PermissionDenied
```

## MITRE ATT&CK
- T1190

## False Positives
- Application bugs

## References
- https://docs.djangoproject.com/en/1.11/ref/exceptions/
- https://docs.djangoproject.com/en/1.11/topics/logging/#django-security

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2017-08-05
- **Rule ID:** `fd435618-981e-4a7c-81f8-f78ce480d616`
- **Source file:** `application/django/appframework_django_exceptions.yml`
