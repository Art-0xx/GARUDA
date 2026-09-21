---
type: detection_rule
title: "Suspicious AgentExecutor PowerShell Execution"
rule_id: c0b40568-b1e9-4b03-8d6c-b096da6da9ab
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Suspicious AgentExecutor PowerShell Execution

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
filter_main_pwsh:
  CommandLine|contains:
  - C:\Windows\System32\WindowsPowerShell\v1.0\
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\
selection_cli:
  CommandLine|contains:
  - ' -powershell'
  - ' -remediationScript'
selection_img:
- Image|endswith: \AgentExecutor.exe
- OriginalFileName: AgentExecutor.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://twitter.com/lefterispan/status/1286259016436514816
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Agentexecutor/
- https://learn.microsoft.com/en-us/mem/intune/apps/intune-management-extension
- https://twitter.com/jseerden/status/1247985304667066373/photo/1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), memory-shards
- **Date:** 2022-12-24
- **Rule ID:** `c0b40568-b1e9-4b03-8d6c-b096da6da9ab`
- **Source file:** `windows/process_creation/proc_creation_win_agentexecutor_susp_usage.yml`
