---
type: detection_rule
title: "Sysmon File Executable Creation Detected"
rule_id: 693a44e9-7f26-4cb6-b787-214867672d3a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Sysmon File Executable Creation Detected

## Description
Detects Portable Executable (PE) files creation events logged by Sysmon in paths monitored by the used Sysmon configuration.
This is a high-value detection for catching unauthorized or suspicious executable drops.
Alert volume and scope depend entirely on which paths or files are monitored in the Sysmon config.
A high noise level or hits from known-legitimate software are a strong signal that the Sysmon configuration is too permissive, not that the detection itself is wrong and probably needs to be tuned to a more restrictive set of paths or files.

## Log Source
```yaml
product: windows
service: sysmon
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 29
```

## False Positives
- Legitimate software writing executables to monitored paths - if this occurs, narrow the Sysmon configuration to more sensitive paths rather than suppressing this rule

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon
- https://medium.com/@olafhartong/sysmon-15-0-file-executable-detected-40fd64349f36

## Metadata
- **Author:** frack113
- **Date:** 2023-07-20
- **Rule ID:** `693a44e9-7f26-4cb6-b787-214867672d3a`
- **Source file:** `windows/sysmon/sysmon_file_executable_detected.yml`
