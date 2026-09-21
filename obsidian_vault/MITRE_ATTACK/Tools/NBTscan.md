---
tags:
  - mitre/attack/tool
---

# NBTscan (`S0590`)

[NBTscan](https://attack.mitre.org/software/S0590) is an open source tool that has been used by state groups to conduct internal reconnaissance within a compromised network.[^fn1][^fn3][^fn4][^fn2]



# Platform(s)

- Windows
- Linux
- macOS

# Techniques Used

## System Owner/User Discovery

[NBTscan](https://attack.mitre.org/software/S0590) can list active users on the system.[\[Debian nbtscan Nov 2019\]](https://manpages.debian.org/testing/nbtscan/nbtscan.1.en.html)[\[SecTools nbtscan June 2003\]](https://sectools.org/tool/nbtscan/)	

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## System Network Configuration Discovery

[NBTscan](https://attack.mitre.org/software/S0590) can be used to collect MAC addresses.[\[Debian nbtscan Nov 2019\]](https://manpages.debian.org/testing/nbtscan/nbtscan.1.en.html)[\[SecTools nbtscan June 2003\]](https://sectools.org/tool/nbtscan/)	

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Network Sniffing

[NBTscan](https://attack.mitre.org/software/S0590) can dump and print whole packet content.[\[Debian nbtscan Nov 2019\]](https://manpages.debian.org/testing/nbtscan/nbtscan.1.en.html)[\[SecTools nbtscan June 2003\]](https://sectools.org/tool/nbtscan/)	

- *Technique:* [[../Techniques/Network Sniffing (T1040)|Network Sniffing]]

## Network Service Discovery

[NBTscan](https://attack.mitre.org/software/S0590) can be used to scan IP networks.[\[Debian nbtscan Nov 2019\]](https://manpages.debian.org/testing/nbtscan/nbtscan.1.en.html)[\[SecTools nbtscan June 2003\]](https://sectools.org/tool/nbtscan/)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Remote System Discovery

[NBTscan](https://attack.mitre.org/software/S0590) can list NetBIOS computer names.[\[Debian nbtscan Nov 2019\]](https://manpages.debian.org/testing/nbtscan/nbtscan.1.en.html)[\[SecTools nbtscan June 2003\]](https://sectools.org/tool/nbtscan/)	

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]


# External References(s)

- [S0590](https://attack.mitre.org/software/S0590)

[^fn1]: [Bezroutchko, A. (2019, November 19). NBTscan man page. Retrieved March 17, 2021.](https://manpages.debian.org/testing/nbtscan/nbtscan.1.en.html)
[^fn2]: [Hawley et al. (2019, January 29). APT39: An Iranian Cyber Espionage Group Focused on Personal Information. Retrieved February 19, 2019.](https://www.fireeye.com/blog/threat-research/2019/01/apt39-iranian-cyber-espionage-group-focused-on-personal-information.html)
[^fn3]: [SecTools. (2003, June 11). NBTscan. Retrieved March 17, 2021.](https://sectools.org/tool/nbtscan/)
[^fn4]: [Symantec DeepSight Adversary Intelligence Team. (2019, June 20). Waterbug: Espionage Group Rolls Out Brand-New Toolset in Attacks Against Governments. Retrieved July 8, 2019.](https://www.symantec.com/blogs/threat-intelligence/waterbug-espionage-governments)