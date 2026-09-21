---
type: detection_rule
title: "Suspicious RunAs-Like Flag Combination"
rule_id: 50d66fb0-03f8-4da0-8add-84e77d12a020
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious RunAs-Like Flag Combination

## Description
Detects suspicious command line flags that let the user set a target user and command as e.g. seen in PsExec-like tools

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_command:
  CommandLine|contains:
  - ' -c cmd'
  - ' -c "cmd'
  - ' -c powershell'
  - ' -c "powershell'
  - ' --command cmd'
  - ' --command powershell'
  - ' -c whoami'
  - ' -c wscript'
  - ' -c cscript'
selection_user:
  CommandLine|contains:
  - ' -u system '
  - ' --user system '
  - ' -u NT'
  - ' -u "NT'
  - ' -u ''NT'
  - ' --system '
  - ' -u administrator '
```

## False Positives
- Unknown

## References
- https://www.trendmicro.com/en_us/research/22/k/hack-the-real-box-apt41-new-subgroup-earth-longzhi.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-11-11
- **Rule ID:** `50d66fb0-03f8-4da0-8add-84e77d12a020`
- **Source file:** `windows/process_creation/proc_creation_win_susp_privilege_escalation_cli_patterns.yml`
