---
type: detection_rule
title: "Linux Network Service Scanning Tools Execution"
rule_id: 3e102cd9-a70d-4a7a-9508-403963092f31
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1046]
---

# Linux Network Service Scanning Tools Execution

## Description
Detects execution of network scanning and reconnaisance tools. These tools can be used for the enumeration of local or remote network services for example.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: (selection_netcat and not filter_main_netcat_listen_flag) or selection_network_scanning_tools
filter_main_netcat_listen_flag:
  CommandLine|contains:
  - ' --listen '
  - ' -l '
selection_netcat:
  Image|endswith:
  - /nc
  - /ncat
  - /netcat
  - /socat
selection_network_scanning_tools:
  Image|endswith:
  - /autorecon
  - /hping
  - /hping2
  - /hping3
  - /naabu
  - /nmap
  - /nping
  - /telnet
  - /zenmap
```

## MITRE ATT&CK
- T1046

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1046/T1046.md
- https://github.com/projectdiscovery/naabu
- https://github.com/Tib3rius/AutoRecon

## Metadata
- **Author:** Alejandro Ortuno, oscd.community, Georg Lauenstein (sure[secure])
- **Date:** 2020-10-21
- **Rule ID:** `3e102cd9-a70d-4a7a-9508-403963092f31`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_network_utilities_execution.yml`
