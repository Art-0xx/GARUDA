---
type: detection_rule
title: "HackTool - NetExec Execution"
rule_id: 7638e5fe-600c-4289-a968-f49dd537ec7d
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1018, attack.t1021]
---

# HackTool - NetExec Execution

## Description
Detects execution of the hacktool NetExec.
NetExec (formerly CrackMapExec) is a widely used post-exploitation tool designed for Active Directory penetration testing and network enumeration
In enterprise environments, the use of NetExec is considered suspicious or potentially malicious because it enables attackers to enumerate hosts, exploit network services, and move laterally across systems.
Threat actors and red teams commonly use NetExec to identify vulnerable systems, harvest credentials, and execute commands remotely.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - ' ftp '
  - ' ldap '
  - ' mssql '
  - ' nfs '
  - ' rdp '
  - ' smb '
  - ' ssh '
  - ' vnc '
  - ' winrm '
  - ' wmi '
  Image|endswith: \nxc.exe
```

## MITRE ATT&CK
- T1018
- T1021

## False Positives
- Legitimate use of NetExec by security professionals or system administrators for network assessment and management.

## References
- https://thedfirreport.com/2025/12/17/cats-got-your-files-lynx-ransomware/
- https://github.com/Pennyw0rth/NetExec
- https://www.netexec.wiki/

## Metadata
- **Author:** Chirag Damani
- **Date:** 2026-03-29
- **Rule ID:** `7638e5fe-600c-4289-a968-f49dd537ec7d`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_netexec.yml`
