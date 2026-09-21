---
type: detection_rule
title: "HackTool - Credential Dumping Tools Named Pipe Created"
rule_id: 961d0ba2-3eea-4303-a930-2cf78bbfcc5e
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001, attack.t1003.002, attack.t1003.004, attack.t1003.005]
---

# HackTool - Credential Dumping Tools Named Pipe Created

## Description
Detects well-known credential dumping tools execution via specific named pipe creation

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
  PipeName|contains:
  - \cachedump
  - \lsadump
  - \wceservicepipe
```

## MITRE ATT&CK
- T1003.001
- T1003.002
- T1003.004
- T1003.005

## False Positives
- Legitimate Administrator using tool for password recovery

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment
- https://image.slidesharecdn.com/zeronights2017kheirkhabarov-171118103000/75/hunting-for-credentials-dumping-in-windows-environment-57-2048.jpg?cb=1666035799

## Metadata
- **Author:** Teymur Kheirkhabarov, oscd.community
- **Date:** 2019-11-01
- **Rule ID:** `961d0ba2-3eea-4303-a930-2cf78bbfcc5e`
- **Source file:** `windows/pipe_created/pipe_created_hktl_generic_cred_dump_tools_pipes.yml`
