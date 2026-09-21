---
type: detection_rule
title: "Enumeration for 3rd Party Creds From CLI"
rule_id: 87a476dc-0079-4583-a985-dee7a20a03de
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.002]
---

# Enumeration for 3rd Party Creds From CLI

## Description
Detects processes that query known 3rd party registry keys that holds credentials via commandline

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_other_rule:
  CommandLine|contains:
  - export
  - save
  Image|endswith: reg.exe
selection:
  CommandLine|contains:
  - \Software\Aerofox\Foxmail\V3.1
  - \Software\Aerofox\FoxmailPreview
  - \Software\DownloadManager\Passwords
  - \Software\FTPWare\COREFTP\Sites
  - \Software\IncrediMail\Identities
  - \Software\Martin Prikryl\WinSCP 2\Sessions
  - \Software\Mobatek\MobaXterm\
  - \Software\OpenSSH\Agent\Keys
  - \Software\OpenVPN-GUI\configs
  - \Software\ORL\WinVNC3\Password
  - \Software\Qualcomm\Eudora\CommandLine
  - \Software\RealVNC\WinVNC4
  - \Software\RimArts\B2\Settings
  - \Software\SimonTatham\PuTTY\Sessions
  - \Software\SimonTatham\PuTTY\SshHostKeys\
  - \Software\Sota\FFFTP
  - \Software\TightVNC\Server
  - \Software\WOW6432Node\Radmin\v3.0\Server\Parameters\Radmin
```

## MITRE ATT&CK
- T1552.002

## False Positives
- Unknown

## References
- https://isc.sans.edu/diary/More+Data+Exfiltration/25698
- https://github.com/synacktiv/Radmin3-Password-Cracker/blob/acfc87393e4b7c06353973a14a6c7126a51f36ac/regkey.txt
- https://github.com/HyperSine/how-does-MobaXterm-encrypt-password
- https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation#inside-the-registry

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `87a476dc-0079-4583-a985-dee7a20a03de`
- **Source file:** `windows/process_creation/proc_creation_win_registry_enumeration_for_credentials_cli.yml`
