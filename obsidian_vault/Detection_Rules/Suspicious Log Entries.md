---
type: detection_rule
title: "Suspicious Log Entries"
rule_id: f64b6e9a-5d9d-48a5-8289-e1dd2b3876e1
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
---

# Suspicious Log Entries

## Description
Detects suspicious log entries in Linux log files

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- entered promiscuous mode
- Deactivating service
- Oversized packet received from
- imuxsock begins to drop messages
```

## False Positives
- Unknown

## References
- https://github.com/ossec/ossec-hids/blob/f6502012b7380208db81f82311ad4a1994d39905/etc/rules/syslog_rules.xml

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-25
- **Rule ID:** `f64b6e9a-5d9d-48a5-8289-e1dd2b3876e1`
- **Source file:** `linux/builtin/lnx_shell_susp_log_entries.yml`
