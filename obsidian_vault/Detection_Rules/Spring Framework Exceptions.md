---
type: detection_rule
title: "Spring Framework Exceptions"
rule_id: ae48ab93-45f7-4051-9dfe-5d30a3f78e33
platform: application
level: medium
status: stable
tags: [detection, sigma, application]
mitre_tags: [attack.t1190]
---

# Spring Framework Exceptions

## Description
Detects suspicious Spring framework exceptions that could indicate exploitation attempts

## Log Source
```yaml
category: application
product: spring
```

## Detection Logic
```yaml
condition: keywords
keywords:
- AccessDeniedException
- CsrfException
- InvalidCsrfTokenException
- MissingCsrfTokenException
- CookieTheftException
- InvalidCookieException
- RequestRejectedException
```

## MITRE ATT&CK
- T1190

## False Positives
- Application bugs

## References
- https://docs.spring.io/spring-security/site/docs/current/api/overview-tree.html

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2017-08-06
- **Rule ID:** `ae48ab93-45f7-4051-9dfe-5d30a3f78e33`
- **Source file:** `application/spring/spring_application_exceptions.yml`
