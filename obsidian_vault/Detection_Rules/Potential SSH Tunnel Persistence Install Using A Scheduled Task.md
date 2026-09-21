---
type: detection_rule
title: "Potential SSH Tunnel Persistence Install Using A Scheduled Task"
rule_id: 2daa93a0-a5fb-41c5-8cd8-3c11294bfd1f
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Potential SSH Tunnel Persistence Install Using A Scheduled Task

## Description
Detects the creation of new scheduled tasks via commandline, using Schtasks.exe. This rule detects tasks creating that call OpenSSH, which may indicate the creation of reverse SSH tunnel to the attacker's server.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_cli_*
selection_cli_ssh:
  CommandLine|contains|all:
  - ' /create '
  - ssh.exe
  - -i
selection_cli_sshd:
  CommandLine|contains|all:
  - ' /create '
  - sshd.exe
  - -f
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://thedfirreport.com/2023/10/30/netsupport-intrusion-results-in-domain-compromise/
- https://www.kroll.com/en/insights/publications/cyber/cactus-ransomware-prickly-new-variant-evades-detection

## Metadata
- **Author:** Rory Duncan
- **Date:** 2025-07-14
- **Rule ID:** `2daa93a0-a5fb-41c5-8cd8-3c11294bfd1f`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_openssh_tunnelling.yml`
