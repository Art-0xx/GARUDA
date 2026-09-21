---
type: detection_rule
title: "Python SQL Exceptions"
rule_id: 19aefed0-ffd4-47dc-a7fc-f8b1425e84f9
platform: application
level: medium
status: stable
tags: [detection, sigma, application]
mitre_tags: [attack.t1190]
---

# Python SQL Exceptions

## Description
Generic rule for SQL exceptions in Python according to PEP 249

## Log Source
```yaml
category: application
product: python
```

## Detection Logic
```yaml
condition: keywords
keywords:
- DataError
- IntegrityError
- ProgrammingError
- OperationalError
```

## MITRE ATT&CK
- T1190

## False Positives
- Application bugs

## References
- https://www.python.org/dev/peps/pep-0249/#exceptions

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2017-08-12
- **Rule ID:** `19aefed0-ffd4-47dc-a7fc-f8b1425e84f9`
- **Source file:** `application/python/app_python_sql_exceptions.yml`
