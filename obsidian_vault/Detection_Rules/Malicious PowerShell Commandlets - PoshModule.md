---
type: detection_rule
title: "Malicious PowerShell Commandlets - PoshModule"
rule_id: 7d0d0329-0ef1-4e84-a9f5-49500f9d7c6c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1482, attack.t1087, attack.t1087.001, attack.t1087.002, attack.t1069.001, attack.t1069.002, attack.t1069, attack.t1059.001]
---

# Malicious PowerShell Commandlets - PoshModule

## Description
Detects Commandlet names from well-known PowerShell exploitation frameworks

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Payload|contains:
  - Add-Exfiltration
  - Add-Persistence
  - Add-RegBackdoor
  - Add-RemoteRegBackdoor
  - Add-ScrnSaveBackdoor
  - BadSuccessor
  - Check-VM
  - ConvertTo-Rc4ByteStream
  - Decrypt-Hash
  - Disable-ADIDNSNode
  - Disable-MachineAccount
  - Do-Exfiltration
  - Enable-ADIDNSNode
  - Enable-MachineAccount
  - Enabled-DuplicateToken
  - Exploit-Jboss
  - Export-ADR
  - Export-ADRCSV
  - Export-ADRExcel
  - Export-ADRHTML
  - Export-ADRJSON
  - Export-ADRXML
  - Find-Fruit
  - Find-GPOLocation
  - Find-TrustedDocuments
  - Get-ADIDNS
  - Get-ApplicationHost
  - Get-ChromeDump
  - Get-ClipboardContents
  - Get-FoxDump
  - Get-GPPPassword
  - Get-IndexedItem
  - Get-KerberosAESKey
  - Get-Keystrokes
  - Get-LSASecret
  - Get-MachineAccountAttribute
  - Get-MachineAccountCreator
  - Get-PassHashes
  - Get-RegAlwaysInstallElevated
  - Get-RegAutoLogon
  - Get-RemoteBootKey
  - Get-RemoteCachedCredential
  - Get-RemoteLocalAccountHash
  - Get-RemoteLSAKey
  - Get-RemoteMachineAccountHash
  - Get-RemoteNLKMKey
  - Get-RickAstley
  - Get-Screenshot
  - Get-SecurityPackages
  - Get-ServiceFilePermission
  - Get-ServicePermission
  - Get-ServiceUnquoted
  - Get-SiteListPassword
  - Get-System
  - Get-TimedScreenshot
  - Get-UnattendedInstallFile
  - Get-Unconstrained
  - Get-USBKeystrokes
  - Get-VaultCredential
  - Get-VulnAutoRun
  - Get-VulnSchTask
  - Grant-ADIDNSPermission
  - Gupt-Backdoor
  - HTTP-Login
  - Install-ServiceBinary
  - Install-SSP
  - Invoke-ACLScanner
  - Invoke-ADRecon
  - Invoke-ADSBackdoor
  - Invoke-AgentSmith
  - Invoke-AllChecks
  - Invoke-ARPScan
  - Invoke-AzureHound
  - Invoke-BackdoorLNK
  - Invoke-BadPotato
  - Invoke-BetterSafetyKatz
  - Invoke-BypassUAC
  - Invoke-Carbuncle
  - Invoke-Certify
  - Invoke-ConPtyShell
  - Invoke-CredentialInjection
  - Invoke-DAFT
  - Invoke-DCSync
  - Invoke-DinvokeKatz
  - Invoke-DllInjection
  - Invoke-DNSUpdate
  - Invoke-DNSExfiltrator
  - Invoke-DomainPasswordSpray
  - Invoke-DowngradeAccount
  - Invoke-EgressCheck
  - Invoke-Eyewitness
  - Invoke-FakeLogonScreen
  - Invoke-Farmer
  - Invoke-Get-RBCD-Threaded
  - Invoke-Gopher
  - Invoke-Grouper
  - Invoke-HandleKatz
  - Invoke-ImpersonatedProcess
  - Invoke-ImpersonateSystem
  - Invoke-InteractiveSystemPowerShell
  - Invoke-Internalmonologue
  - Invoke-Inveigh
  - Invoke-InveighRelay
  - Invoke-KrbRelay
  - Invoke-LdapSignCheck
  - Invoke-Lockless
  - Invoke-MalSCCM
  - Invoke-Mimikatz
  - Invoke-Mimikittenz
  - Invoke-MITM6
  - Invoke-NanoDump
  - Invoke-NetRipper
  - Invoke-Nightmare
  - Invoke-NinjaCopy
  - Invoke-OfficeScrape
  - Invoke-OxidResolver
  - Invoke-P0wnedshell
  - Invoke-Paranoia
  - Invoke-PortScan
  - Invoke-PoshRatHttp
  - Invoke-PostExfil
  - Invoke-PowerDump
  - Invoke-PowerDPAPI
  - Invoke-PowerShellTCP
  - Invoke-PowerShellWMI
  - Invoke-PPLDump
  - Invoke-PsExec
  - Invoke-PSInject
  - Invoke-PsUaCme
  - Invoke-ReflectivePEInjection
  - Invoke-ReverseDNSLookup
  - Invoke-Rubeus
  - Invoke-RunAs
  - Invoke-SafetyKatz
  - Invoke-SauronEye
  - Invoke-SCShell
  - Invoke-Seatbelt
  - Invoke-ServiceAbuse
  - Invoke-ShadowSpray
  - Invoke-Sharp
  - Invoke-Shellcode
  - Invoke-SMBScanner
  - Invoke-Snaffler
  - Invoke-Spoolsample
  - Invoke-SpraySinglePassword
  - Invoke-SSHCommand
  - Invoke-StandIn
  - Invoke-StickyNotesExtract
  - Invoke-SystemCommand
  - Invoke-Tasksbackdoor
  - Invoke-Tater
  - Invoke-Thunderfox
  - Invoke-ThunderStruck
  - Invoke-TokenManipulation
  - Invoke-Tokenvator
  - Invoke-TotalExec
  - Invoke-UrbanBishop
  - Invoke-UserHunter
  - Invoke-VoiceTroll
  - Invoke-Whisker
  - Invoke-WinEnum
  - Invoke-winPEAS
  - Invoke-WireTap
  - Invoke-WmiCommand
  - Invoke-WMIExec
  - Invoke-WScriptBypassUAC
  - Invoke-Zerologon
  - MailRaider
  - New-ADIDNSNode
  - New-DNSRecordArray
  - New-HoneyHash
  - New-InMemoryModule
  - New-MachineAccount
  - New-SOASerialNumberArray
  - Out-Minidump
  - Port-Scan
  - PowerBreach
  - 'powercat '
  - PowerUp
  - PowerView
  - Remove-ADIDNSNode
  - Remove-MachineAccount
  - Remove-Update
  - Rename-ADIDNSNode
  - Revoke-ADIDNSPermission
  - Set-ADIDNSNode
  - Set-MacAttribute
  - Set-MachineAccountAttribute
  - Set-Wallpaper
  - Show-TargetScreen
  - Start-CaptureServer
  - Start-Dnscat2
  - Start-WebcamRecorder
  - Veeam-Get-Creds
  - VolumeShadowCopyTools
```

## MITRE ATT&CK
- T1482
- T1087
- T1087.001
- T1087.002
- T1069.001
- T1069.002
- T1069
- T1059.001

## False Positives
- Unknown

## References
- https://adsecurity.org/?p=2921
- https://github.com/S3cur3Th1sSh1t/PowerSharpPack/tree/master/PowerSharpBinaries
- https://github.com/BC-SECURITY/Invoke-ZeroLogon/blob/111d17c7fec486d9bb23387e2e828b09a26075e4/Invoke-ZeroLogon.ps1
- https://github.com/xorrior/RandomPS-Scripts/blob/848c919bfce4e2d67b626cbcf4404341cfe3d3b6/Get-DXWebcamVideo.ps1
- https://github.com/rvrsh3ll/Misc-Powershell-Scripts/blob/6f23bb41f9675d7e2d32bacccff75e931ae00554/OfficeMemScraper.ps1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-20
- **Rule ID:** `7d0d0329-0ef1-4e84-a9f5-49500f9d7c6c`
- **Source file:** `windows/powershell/powershell_module/posh_pm_malicious_commandlets.yml`
