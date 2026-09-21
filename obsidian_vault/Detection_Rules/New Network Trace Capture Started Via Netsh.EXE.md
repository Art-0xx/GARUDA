---
type: detection_rule
title: "New Network Trace Capture Started Via Netsh.EXE"
rule_id: d3c3861d-c504-4c77-ba55-224ba82d0118
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1040]
---

# New Network Trace Capture Started Via Netsh.EXE

## Description
Detects the execution of netsh with the "trace" flag in order to start a network capture

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - trace
  - start
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1040

## False Positives
- Legitimate administration activity

## References
- https://blogs.msdn.microsoft.com/canberrapfe/2012/03/30/capture-a-network-trace-without-installing-anything-capture-a-network-trace-of-a-reboot/
- https://klausjochem.me/2016/02/03/netsh-the-cyber-attackers-tool-of-choice/

## Metadata
- **Author:** Kutepov Anton, oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `d3c3861d-c504-4c77-ba55-224ba82d0118`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_packet_capture.yml`
