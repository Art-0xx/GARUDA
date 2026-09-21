---
type: detection_rule
title: "WMI Event Consumer Created Named Pipe"
rule_id: 493fb4ab-cdcc-4c4f-818c-0e363bd1e4bb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# WMI Event Consumer Created Named Pipe

## Description
Detects the WMI Event Consumer service scrcons.exe creating a named pipe

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
  Image|endswith: \scrcons.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://github.com/RiccardoAncarani/LiquidSnake

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-09-01
- **Rule ID:** `493fb4ab-cdcc-4c4f-818c-0e363bd1e4bb`
- **Source file:** `windows/pipe_created/pipe_created_scrcons_wmi_consumer_namedpipe.yml`
