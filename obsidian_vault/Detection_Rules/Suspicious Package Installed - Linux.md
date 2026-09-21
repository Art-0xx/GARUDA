---
type: detection_rule
title: "Suspicious Package Installed - Linux"
rule_id: 700fb7e8-2981-401c-8430-be58e189e741
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1553.004]
---

# Suspicious Package Installed - Linux

## Description
Detects installation of suspicious packages using system installation utilities

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: 1 of selection_tool_* and selection_keyword
selection_keyword:
  CommandLine|contains:
  - nmap
  - ' nc'
  - netcat
  - wireshark
  - tshark
  - openconnect
  - proxychains
  - socat
selection_tool_apt:
  CommandLine|contains: install
  Image|endswith:
  - /apt
  - /apt-get
selection_tool_dpkg:
  CommandLine|contains:
  - --install
  - -i
  Image|endswith: /dpkg
selection_tool_rpm:
  CommandLine|contains: -i
  Image|endswith: /rpm
selection_tool_yum:
  CommandLine|contains:
  - localinstall
  - install
  Image|endswith: /yum
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Legitimate administration activities

## References
- https://gist.githubusercontent.com/MichaelKoczwara/12faba9c061c12b5814b711166de8c2f/raw/e2068486692897b620c25fde1ea258c8218fe3d3/history.txt

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-03
- **Rule ID:** `700fb7e8-2981-401c-8430-be58e189e741`
- **Source file:** `linux/process_creation/proc_creation_lnx_install_suspicious_packages.yml`
