---
type: detection_rule
title: "Suspicious SQL Error Messages"
rule_id: 8a670c6d-7189-4b1c-8017-a417ca84a086
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1190]
---

# Suspicious SQL Error Messages

## Description
Detects SQL error messages that indicate probing for an injection attack

## Log Source
```yaml
category: application
definition: 'Requirements: application error logs must be collected (with LOG_LEVEL
  ERROR and above)'
product: sql
```

## Detection Logic
```yaml
condition: keywords
keywords:
- quoted string not properly terminated
- You have an error in your SQL syntax
- Unclosed quotation mark
- 'near "*": syntax error'
- SELECTs to the left and right of UNION do not have the same number of result columns
```

## MITRE ATT&CK
- T1190

## False Positives
- A syntax error in MySQL also occurs in non-dynamic (safe) queries if there is an empty in() clause, that may often be the case.

## References
- http://www.sqlinjection.net/errors

## Metadata
- **Author:** Bjoern Kimminich
- **Date:** 2017-11-27
- **Rule ID:** `8a670c6d-7189-4b1c-8017-a417ca84a086`
- **Source file:** `application/sql/app_sqlinjection_errors.yml`
