---
type: detection_rule
title: "Suspicious Vsls-Agent Command With AgentExtensionPath Load"
rule_id: 43103702-5886-11ed-9b6a-0242ac120002
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Suspicious Vsls-Agent Command With AgentExtensionPath Load

## Description
Detects Microsoft Visual Studio vsls-agent.exe lolbin execution with a suspicious library load using the --agentExtensionPath parameter

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  CommandLine|contains: Microsoft.VisualStudio.LiveShare.Agent.
selection:
  CommandLine|contains: --agentExtensionPath
  Image|endswith: \vsls-agent.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- False positives depend on custom use of vsls-agent.exe

## References
- https://twitter.com/bohops/status/1583916360404729857

## Metadata
- **Author:** bohops
- **Date:** 2022-10-30
- **Rule ID:** `43103702-5886-11ed-9b6a-0242ac120002`
- **Source file:** `windows/process_creation/proc_creation_win_vslsagent_agentextensionpath_load.yml`
