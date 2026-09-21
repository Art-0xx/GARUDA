---
mitre_data:
  id: T1087.002
  linker_tags:
  - mitre/attack/linker/discovery/domain_account
  name: Domain Account
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Domain Account (`T1087.002`)

Adversaries may attempt to get a listing of domain accounts. This information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.

Commands such as <code>net user /domain</code> and <code>net group /domain</code> of the [Net](https://attack.mitre.org/software/S0039) utility, <code>dscacheutil -q group</code> on macOS, and <code>ldapsearch</code> on Linux can list domain users and groups. [PowerShell](https://attack.mitre.org/techniques/T1059/001) cmdlets including <code>Get-ADUser</code> and <code>Get-ADGroupMember</code> may enumerate members of Active Directory groups.[^fn1]  


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Account Discovery (T1087)|Account Discovery]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/dsquery|dsquery]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/AdFind|AdFind]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1087.002](https://attack.mitre.org/techniques/T1087/002)

[^fn1]: [CrowdStrike. (2022, January 27). Early Bird Catches the Wormhole: Observations from the StellarParticle Campaign. Retrieved February 7, 2022.](https://www.crowdstrike.com/blog/observations-from-the-stellarparticle-campaign/)