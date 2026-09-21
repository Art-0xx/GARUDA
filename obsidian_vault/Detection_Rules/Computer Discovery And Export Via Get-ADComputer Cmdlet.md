---
type: detection_rule
title: "Computer Discovery And Export Via Get-ADComputer Cmdlet"
rule_id: 435e10e4-992a-4281-96f3-38b11106adde
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# Computer Discovery And Export Via Get-ADComputer Cmdlet

## Description
Detects usage of the Get-ADComputer cmdlet to collect computer information and output it to a file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' > '
  - ' | Select '
  - Out-File
  - Set-Content
  - Add-Content
  CommandLine|contains|all:
  - 'Get-ADComputer '
  - ' -Filter \*'
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1033

## False Positives
- Legitimate admin scripts may use the same technique, it's better to exclude specific computers or users who execute these commands or scripts often

## References
- http://blog.talosintelligence.com/2022/09/lazarus-three-rats.html
- https://www.microsoft.com/en-us/security/blog/2022/10/18/defenders-beware-a-case-for-post-ransomware-investigations/
- https://www.cisa.gov/uscert/sites/default/files/publications/aa22-320a_joint_csa_iranian_government-sponsored_apt_actors_compromise_federal%20network_deploy_crypto%20miner_credential_harvester.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-11-10
- **Rule ID:** `435e10e4-992a-4281-96f3-38b11106adde`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_computer_discovery_get_adcomputer.yml`
