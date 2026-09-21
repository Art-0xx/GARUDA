---
type: detection_rule
title: "Invoke-Obfuscation VAR+ Launcher"
rule_id: 27aec9c9-dbb0-4939-8422-1742242471d0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR+ Launcher

## Description
Detects Obfuscated use of Environment Variables to execute PowerShell

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|re: cmd.{0,5}(?:/c|/r)(?:\s|)\"set\s[a-zA-Z]{3,6}.*(?:\{\d\}){1,}\\\"\s+?\-f(?:.*\)){1,}.*\"
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-15
- **Rule ID:** `27aec9c9-dbb0-4939-8422-1742242471d0`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_var.yml`
