---
type: detection_rule
title: "Registry Export of Third-Party Credentials"
rule_id: cc1abf27-78a3-4ac5-a51c-f3070b1d8e40
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.002]
---

# Registry Export of Third-Party Credentials

## Description
Detects the use of reg.exe to export registry paths associated with third-party credentials.
Credential stealers have been known to use this technique to extract sensitive information from the registry.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_path:
  CommandLine|contains:
  - \Software\Aerofox\Foxmail\V3.1
  - \Software\Aerofox\FoxmailPreview
  - \Software\DownloadManager\Passwords
  - \Software\FTPWare\COREFTP\Sites
  - \Software\IncrediMail\Identities
  - \Software\Martin Prikryl\WinSCP 2\Sessions
  - \Software\Mobatek\MobaXterm
  - \Software\OpenSSH\Agent\Keys
  - \Software\OpenVPN-GUI\configs
  - \Software\ORL\WinVNC3\Password
  - \Software\Qualcomm\Eudora\CommandLine
  - \Software\RealVNC\WinVNC4
  - \Software\RimArts\B2\Settings
  - \Software\SimonTatham\PuTTY\Sessions
  - \Software\SimonTatham\PuTTY\SshHostKeys
  - \Software\Sota\FFFTP
  - \Software\TightVNC\Server
  - \Software\WOW6432Node\Radmin\v3.0\Server\Parameters\Radmin
selection_cli_save:
  CommandLine|contains:
  - save
  - export
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1552.002

## False Positives
- Unknown

## References
- https://www.virustotal.com/gui/file/fdc86a5b3d7df37a72c3272836f743747c47bfbc538f05af9ecf78547fa2e789/behavior

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-05-22
- **Rule ID:** `cc1abf27-78a3-4ac5-a51c-f3070b1d8e40`
- **Source file:** `windows/process_creation/proc_creation_win_registry_export_of_thirdparty_creds.yml`
