---
type: detection_rule
title: "AgentExecutor PowerShell Execution"
rule_id: 7efd2c8d-8b18-45b7-947d-adfe9ed04f61
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# AgentExecutor PowerShell Execution

## Description
Detects execution of the AgentExecutor.exe binary. Which can be abused as a LOLBIN to execute powershell scripts with the ExecutionPolicy "Bypass" or any binary named "powershell.exe" located in the path provided by 6th positional argument

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_intune:
  ParentImage|endswith: \Microsoft.Management.Services.IntuneWindowsAgent.exe
selection_cli:
  CommandLine|contains:
  - ' -powershell'
  - ' -remediationScript'
selection_img:
- Image: \AgentExecutor.exe
- OriginalFileName: AgentExecutor.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate use via Intune management. You exclude script paths and names to reduce FP rate

## References
- https://twitter.com/lefterispan/status/1286259016436514816
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Agentexecutor/
- https://learn.microsoft.com/en-us/mem/intune/apps/intune-management-extension
- https://twitter.com/jseerden/status/1247985304667066373/photo/1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), memory-shards
- **Date:** 2022-12-24
- **Rule ID:** `7efd2c8d-8b18-45b7-947d-adfe9ed04f61`
- **Source file:** `windows/process_creation/proc_creation_win_agentexecutor_potential_abuse.yml`
