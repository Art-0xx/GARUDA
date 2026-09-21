---
mitre_data:
  id: T1018
  linker_tags:
  - mitre/attack/linker/discovery/remote_system_discovery
  name: Remote System Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Remote System Discovery (`T1018`)

Adversaries may attempt to get a listing of other systems by IP address, hostname, or other logical identifier on a network that may be used for Lateral Movement from the current system. Functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  [Ping](https://attack.mitre.org/software/S0097), <code>net view</code> using [Net](https://attack.mitre.org/software/S0039), or, on ESXi servers, `esxcli network diag ping`.

Adversaries may also analyze data from local host files (ex: <code>C:\Windows\System32\Drivers\etc\hosts</code> or <code>/etc/hosts</code>) or other passive means (such as local [Arp](https://attack.mitre.org/software/S0099) cache entries) in order to discover the presence of remote systems in an environment.

Adversaries may also target discovery of network infrastructure as well as leverage [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands on network devices to gather detailed information about systems within a network (e.g. <code>show cdp neighbors</code>, <code>show arp</code>).[^fn3][^fn1]  



# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Arp|Arp]]
- [[../Tools/ROADTools|ROADTools]]
- [[../Tools/Nltest|Nltest]]
- [[../Tools/NBTscan|NBTscan]]
- [[../Tools/Ping|Ping]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/AdFind|AdFind]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1018](https://attack.mitre.org/techniques/T1018)
- [Stepanic, D.. (2020, January 13). Embracing offensive tooling: Building detections against Koadic using EQL. Retrieved November 17, 2024.](https://www.elastic.co/security-labs/embracing-offensive-tooling-building-detections-against-koadic-using-eql)

[^fn1]: [CISA. (2021, May 6). Analysis Report (AR21-126A) FiveHands Ransomware. Retrieved June 7, 2021.](https://us-cert.cisa.gov/ncas/analysis-reports/ar21-126a)
[^fn3]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)