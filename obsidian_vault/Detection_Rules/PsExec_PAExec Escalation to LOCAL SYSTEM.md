---
type: detection_rule
title: "PsExec/PAExec Escalation to LOCAL SYSTEM"
rule_id: 8834e2f7-6b4b-4f09-8906-d2276470ee23
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1587.001]
---

# PsExec/PAExec Escalation to LOCAL SYSTEM

## Description
Detects suspicious commandline flags used by PsExec and PAExec to escalate a command line to LOCAL_SYSTEM rights

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_other:
  CommandLine|contains:
  - psexec
  - paexec
  - accepteula
selection_sys:
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
- Admins that use PsExec or PAExec to escalate to the SYSTEM account for maintenance purposes (rare)
- Users that debug Microsoft Intune issues using the commands mentioned in the official documentation; see https://learn.microsoft.com/en-us/mem/intune/apps/intune-management-extension

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/psexec
- https://www.poweradmin.com/paexec/
- https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-11-23
- **Rule ID:** `8834e2f7-6b4b-4f09-8906-d2276470ee23`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_psexec_paexec_escalate_system.yml`
