---
type: detection_rule
title: "Netsh Allow Group Policy on Microsoft Defender Firewall"
rule_id: 347906f3-e207-4d18-ae5b-a9403d6bcdef
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# Netsh Allow Group Policy on Microsoft Defender Firewall

## Description
Adversaries may modify system firewalls in order to bypass controls limiting network usage

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
  - advfirewall
  - firewall
  - set
  - rule
  - group=
  - new
  - enable=Yes
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Legitimate administration activity

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.004/T1562.004.md#atomic-test-3---allow-smb-and-rdp-on-microsoft-defender-firewall
- https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/netsh-advfirewall-firewall-control-firewall-behavior

## Metadata
- **Author:** frack113
- **Date:** 2022-01-09
- **Rule ID:** `347906f3-e207-4d18-ae5b-a9403d6bcdef`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_enable_group_rule.yml`
