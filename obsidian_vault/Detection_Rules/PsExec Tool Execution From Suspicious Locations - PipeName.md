---
type: detection_rule
title: "PsExec Tool Execution From Suspicious Locations - PipeName"
rule_id: 41504465-5e3a-4a5b-a5b4-2a0baadd4463
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1569.002]
---

# PsExec Tool Execution From Suspicious Locations - PipeName

## Description
Detects PsExec default pipe creation where the image executed is located in a suspicious location. Which could indicate that the tool is being used in an attack

## Log Source
```yaml
category: pipe_created
definition: Note that you have to configure logging for Named Pipe Events in Sysmon
  config (Event ID 17 and Event ID 18). The basic configuration is in popular sysmon
  configuration (https://github.com/SwiftOnSecurity/sysmon-config), but it is worth
  verifying. You can also use other repo, e.g. https://github.com/Neo23x0/sysmon-config,
  https://github.com/olafhartong/sysmon-modular. How to test detection? You can check
  powershell script from this site https://svch0st.medium.com/guide-to-named-pipes-and-hunting-for-cobalt-strike-pipes-dc46b2c5f575
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \Desktop\
  - \Downloads\
  PipeName: \PSEXESVC
```

## MITRE ATT&CK
- T1569.002

## False Positives
- Rare legitimate use of psexec from the locations mentioned above. This will require initial tuning based on your environment.

## References
- https://www.jpcert.or.jp/english/pub/sr/ir_research.html
- https://jpcertcc.github.io/ToolAnalysisResultSheet

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-04
- **Rule ID:** `41504465-5e3a-4a5b-a5b4-2a0baadd4463`
- **Source file:** `windows/pipe_created/pipe_created_sysinternals_psexec_default_pipe_susp_location.yml`
