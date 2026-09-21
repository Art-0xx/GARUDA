---
mitre_data:
  id: T1482
  linker_tags:
  - mitre/attack/linker/discovery/domain_trust_discovery
  name: Domain Trust Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Domain Trust Discovery (`T1482`)

Adversaries may attempt to gather information on domain trust relationships that may be used to identify lateral movement opportunities in Windows multi-domain/forest environments. Domain trusts provide a mechanism for a domain to allow access to resources based on the authentication procedures of another domain.[^fn3] Domain trusts allow the users of the trusted domain to access resources in the trusting domain. The information discovered may help the adversary conduct [SID-History Injection](https://attack.mitre.org/techniques/T1134/005), [Pass the Ticket](https://attack.mitre.org/techniques/T1550/003), and [Kerberoasting](https://attack.mitre.org/techniques/T1558/003).[^fn2][^fn5] Domain trusts can be enumerated using the `DSEnumerateDomainTrusts()` Win32 API call, .NET methods, and LDAP.[^fn5] The Windows utility [Nltest](https://attack.mitre.org/software/S0359) is known to be used by adversaries to enumerate domain trusts.[^fn1]


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]
- [[../Tools/dsquery|dsquery]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Nltest|Nltest]]
- [[../Tools/Rubeus|Rubeus]]
- [[../Tools/AdFind|AdFind]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1482](https://attack.mitre.org/techniques/T1482)
- [Microsoft. (n.d.). Domain.GetAllTrustRelationships Method. Retrieved February 14, 2019.](https://docs.microsoft.com/en-us/dotnet/api/system.directoryservices.activedirectory.domain.getalltrustrelationships?redirectedfrom=MSDN&view=netframework-4.7.2#System_DirectoryServices_ActiveDirectory_Domain_GetAllTrustRelationships)

[^fn1]: [Florio, E.. (2017, May 4). Windows Defender ATP thwarts Operation WilySupply software supply chain cyberattack. Retrieved February 14, 2019.](https://www.microsoft.com/security/blog/2017/05/04/windows-defender-atp-thwarts-operation-wilysupply-software-supply-chain-cyberattack/)
[^fn2]: [Metcalf, S. (2015, July 15). It’s All About Trust – Forging Kerberos Trust Tickets to Spoof Access across Active Directory Trusts. Retrieved February 14, 2019.](https://adsecurity.org/?p=1588)
[^fn3]: [Microsoft. (2009, October 7). Trust Technologies. Retrieved February 14, 2019.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc759554(v=ws.10))
[^fn5]: [Schroeder, W. (2017, October 30). A Guide to Attacking Domain Trusts. Retrieved February 14, 2019.](https://posts.specterops.io/a-guide-to-attacking-domain-trusts-971e52cb2944)