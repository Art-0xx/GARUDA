---
type: detection_rule
title: "PowerView PowerShell Cmdlets - ScriptBlock"
rule_id: dcd74b95-3f36-4ed9-9598-0490951643aa
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerView PowerShell Cmdlets - ScriptBlock

## Description
Detects Cmdlet names from PowerView of the PowerSploit exploitation framework.

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
  - Export-PowerViewCSV
  - Find-DomainLocalGroupMember
  - Find-DomainObjectPropertyOutlier
  - Find-DomainProcess
  - Find-DomainShare
  - Find-DomainUserEvent
  - Find-DomainUserLocation
  - Find-ForeignGroup
  - Find-ForeignUser
  - Find-GPOComputerAdmin
  - Find-GPOLocation
  - Find-InterestingDomain
  - Find-InterestingFile
  - Find-LocalAdminAccess
  - Find-ManagedSecurityGroups
  - Get-CachedRDPConnection
  - Get-DFSshare
  - Get-DomainDFSShare
  - Get-DomainDNSRecord
  - Get-DomainDNSZone
  - Get-DomainFileServer
  - Get-DomainGPOComputerLocalGroupMapping
  - Get-DomainGPOLocalGroup
  - Get-DomainGPOUserLocalGroupMapping
  - Get-LastLoggedOn
  - Get-LoggedOnLocal
  - Get-NetFileServer
  - Get-NetForest
  - Get-NetGPOGroup
  - Get-NetProcess
  - Get-NetRDPSession
  - Get-RegistryMountedDrive
  - Get-RegLoggedOn
  - Get-WMIRegCachedRDPConnection
  - Get-WMIRegLastLoggedOn
  - Get-WMIRegMountedDrive
  - Get-WMIRegProxy
  - Invoke-ACLScanner
  - Invoke-CheckLocalAdminAccess
  - Invoke-EnumerateLocalAdmin
  - Invoke-EventHunter
  - Invoke-FileFinder
  - Invoke-Kerberoast
  - Invoke-MapDomainTrust
  - Invoke-ProcessHunter
  - Invoke-RevertToSelf
  - Invoke-ShareFinder
  - Invoke-UserHunter
  - Invoke-UserImpersonation
  - Remove-RemoteConnection
  - Request-SPNTicket
  - Resolve-IPAddress
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://powersploit.readthedocs.io/en/stable/Recon/README
- https://github.com/PowerShellMafia/PowerSploit/tree/master/Recon
- https://thedfirreport.com/2020/10/08/ryuks-return
- https://adsecurity.org/?p=2277

## Metadata
- **Author:** Bhabesh Raj
- **Date:** 2021-05-18
- **Rule ID:** `dcd74b95-3f36-4ed9-9598-0490951643aa`
- **Source file:** `windows/powershell/powershell_script/posh_ps_powerview_malicious_commandlets.yml`
