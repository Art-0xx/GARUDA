---
mitre_data:
  id: T1614
  linker_tags:
  - mitre/attack/linker/discovery/system_location_discovery
  name: System Location Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Location Discovery (`T1614`)


Adversaries may gather information in an attempt to calculate the geographical location of a victim host. Adversaries may use the information from [System Location Discovery](https://attack.mitre.org/techniques/T1614) during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.

Adversaries may attempt to infer the location of a system using various system checks, such as time zone, keyboard layout, and/or language settings.[^fn4][^fn6][^fn1] Windows API functions such as <code>GetLocaleInfoW</code> can also be used to determine the locale of the host.[^fn4] In cloud environments, an instance's availability zone may also be discovered by accessing the instance metadata service from the instance.[^fn2][^fn5]

Adversaries may also attempt to infer the location of a victim host using IP addressing, such as via online geolocation IP-lookup services.[^fn3][^fn6]


# Platform(s)

- IaaS
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/System Language Discovery (T1614.001)|System Language Discovery]]

# Tool(s)

- [[../Tools/Remcos|Remcos]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1614](https://attack.mitre.org/techniques/T1614)

[^fn1]: [Abrams, L. (2020, October 23). New RAT malware gets commands via Discord, has ransomware feature. Retrieved April 1, 2021.](https://www.bleepingcomputer.com/news/security/new-rat-malware-gets-commands-via-discord-has-ransomware-feature/)
[^fn2]: [Amazon. (n.d.). Instance identity documents. Retrieved April 2, 2021.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-identity-documents.html)
[^fn3]: [Dedola, G. (2020, August 20). Transparent Tribe: Evolution analysis, part 1. Retrieved April 1, 2021.](https://securelist.com/transparent-tribe-part-1/98127/)
[^fn4]: [FBI. (2020, November 19). Indicators of Compromise Associated with Ragnar Locker Ransomware. Retrieved September 12, 2024.](https://s3.documentcloud.org/documents/20413525/fbi-flash-indicators-of-compromise-ragnar-locker-ransomware-11192020-bc.pdf)
[^fn5]: [Microsoft. (2021, February 21). Azure Instance Metadata Service (Windows). Retrieved April 2, 2021.](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/instance-metadata-service?tabs=windows)
[^fn6]: [Wisniewski, C. (2016, May 3). Location-based threats: How cybercriminals target you based on where you live. Retrieved April 1, 2021.](https://news.sophos.com/en-us/2016/05/03/location-based-ransomware-threat-research/)