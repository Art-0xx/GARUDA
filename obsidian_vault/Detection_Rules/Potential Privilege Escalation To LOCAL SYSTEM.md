---
type: detection_rule
title: "Potential Privilege Escalation To LOCAL SYSTEM"
rule_id: 207b0396-3689-42d9-8399-4222658efc99
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1587.001]
---

# Potential Privilege Escalation To LOCAL SYSTEM

## Description
Detects unknown program using commandline flags usually used by tools such as PsExec and PAExec to start programs with SYSTEM Privileges

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_exclude_coverage:
  CommandLine|contains:
  - paexec
  - PsExec
  - accepteula
selection:
  CommandLine|contains|windash:
  - ' -s cmd'
  - ' -s -i cmd'
  - ' -i -s cmd'
  - ' -s pwsh'
  - ' -s -i pwsh'
  - ' -i -s pwsh'
  - ' -s powershell'
  - ' -s -i powershell'
  - ' -i -s powershell'
```

## MITRE ATT&CK
- T1587.001

## False Positives
- Weird admins that rename their tools
- Software companies that bundle PsExec/PAExec with their software and rename it, so that it is less embarrassing

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/psexec
- https://www.poweradmin.com/paexec/
- https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-05-22
- **Rule ID:** `207b0396-3689-42d9-8399-4222658efc99`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_susp_psexec_paexec_flags.yml`
