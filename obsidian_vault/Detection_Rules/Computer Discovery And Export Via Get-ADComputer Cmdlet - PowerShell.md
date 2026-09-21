---
type: detection_rule
title: "Computer Discovery And Export Via Get-ADComputer Cmdlet - PowerShell"
rule_id: db885529-903f-4c5d-9864-28fe199e6370
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# Computer Discovery And Export Via Get-ADComputer Cmdlet - PowerShell

## Description
Detects usage of the Get-ADComputer cmdlet to collect computer information and output it to a file

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - ' | Select '
  - Out-File
  - Set-Content
  - Add-Content
  ScriptBlockText|contains|all:
  - 'Get-ADComputer '
  - ' -Filter \*'
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
- **Date:** 2022-11-17
- **Rule ID:** `db885529-903f-4c5d-9864-28fe199e6370`
- **Source file:** `windows/powershell/powershell_script/posh_ps_computer_discovery_get_adcomputer.yml`
