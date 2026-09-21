---
type: detection_rule
title: "Program Executed Using Proxy/Local Command Via SSH.EXE"
rule_id: 7d6d30b8-5b91-4b90-a891-46cccaf29598
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Program Executed Using Proxy/Local Command Via SSH.EXE

## Description
Detect usage of the "ssh.exe" binary as a proxy to launch other programs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent or all of selection_cli_*
selection_cli_flags:
- CommandLine|contains: ProxyCommand=
- CommandLine|contains|all:
  - PermitLocalCommand=yes
  - ' LocalCommand'
selection_cli_img:
- Image|endswith: \ssh.exe
- Product: OpenSSH for Windows
- Hashes|contains:
  - IMPHASH=55b4964d29aad5438b9e950052dbbbc0
  - IMPHASH=334d66c33503ccbf647c15b47c27eef4
  - IMPHASH=27b0da080ef92afb37983d30d839141e
  - IMPHASH=977eb4c263d384e47daa0712d34713ab
  - IMPHASH=3eaadce9ae43d5a918bb082065815c3b
  - IMPHASH=980fe6cf0d996ab1eedf877222e722aa
  - IMPHASH=5f959422308ac3d721010d66647e100e
  - IMPHASH=a49aaa3d03d1cd9c8dc7fca60f7f480b
  - IMPHASH=dd335f759b6d5d6a8382b71dd9d65791
selection_parent:
  ParentImage: C:\Windows\System32\OpenSSH\sshd.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate usage for administration purposes

## References
- https://lolbas-project.github.io/lolbas/Binaries/Ssh/
- https://github.com/LOLBAS-Project/LOLBAS/pull/211/files
- https://gtfobins.github.io/gtfobins/ssh/
- https://man.openbsd.org/ssh_config#ProxyCommand
- https://man.openbsd.org/ssh_config#LocalCommand

## Metadata
- **Author:** frack113, Nasreddine Bencherchali
- **Date:** 2022-12-29
- **Rule ID:** `7d6d30b8-5b91-4b90-a891-46cccaf29598`
- **Source file:** `windows/process_creation/proc_creation_win_ssh_proxy_execution.yml`
