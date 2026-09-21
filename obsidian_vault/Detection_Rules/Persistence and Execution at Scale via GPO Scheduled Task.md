---
type: detection_rule
title: "Persistence and Execution at Scale via GPO Scheduled Task"
rule_id: a8f29a7b-b137-4446-80a0-b804272f3da2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Persistence and Execution at Scale via GPO Scheduled Task

## Description
Detect lateral movement using GPO scheduled task, usually used to deploy ransomware at scale

## Log Source
```yaml
definition: The advanced audit policy setting "Object Access > Audit Detailed File
  Share" must be configured for Success/Failure
product: windows
service: security
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_5136:
  AttributeLDAPDisplayName:
  - gPCMachineExtensionNames
  - gPCUserExtensionNames
  AttributeValue|contains:
  - CAB54552-DEEA-4691-817E-ED4A4D1AFC72
  - AADCED64-746C-4633-A97C-D61349046527
  EventID: 5136
selection_5145:
  AccessList|contains:
  - WriteData
  - '%%4417'
  EventID: 5145
  RelativeTargetName|endswith: ScheduledTasks.xml
  ShareName|endswith: \SYSVOL
```

## MITRE ATT&CK
- T1053.005

## False Positives
- If the source IP is not localhost then it's super suspicious, better to monitor both local and remote changes to GPO scheduled tasks.

## References
- https://twitter.com/menasec1/status/1106899890377052160
- https://www.secureworks.com/blog/ransomware-as-a-distraction
- https://www.elastic.co/guide/en/security/7.17/prebuilt-rule-0-16-1-scheduled-task-execution-at-scale-via-gpo.html

## Metadata
- **Author:** Samir Bousseaden
- **Date:** 2019-04-03
- **Rule ID:** `a8f29a7b-b137-4446-80a0-b804272f3da2`
- **Source file:** `windows/builtin/security/win_security_gpo_scheduledtasks.yml`
