---
mitre_data:
  id: T1668
  linker_tags:
  - mitre/attack/linker/persistence/exclusive_control
  name: Exclusive Control
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Exclusive Control (`T1668`)

Adversaries who successfully compromise a system may attempt to maintain persistence by “closing the door” behind them  – in other words, by preventing other threat actors from initially accessing or maintaining a foothold on the same system. 

For example, adversaries may patch a vulnerable, compromised system[^fn5][^fn2] to prevent other threat actors from leveraging that vulnerability in the future. They may “close the door” in other ways, such as disabling vulnerable services[^fn4], stripping privileges from accounts[^fn1], or removing other malware already on the compromised device.[^fn3]

Hindering other threat actors may allow an adversary to maintain sole access to a compromised system or network. This prevents the threat actor from needing to compete with or even being removed themselves by other threat actors. It also reduces the “noise” in the environment, lowering the possibility of being caught and evicted by defenders. Finally, in the case of [Resource Hijacking](https://attack.mitre.org/techniques/T1496), leveraging a compromised device’s full power allows the threat actor to maximize profit.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1668](https://attack.mitre.org/techniques/T1668)

[^fn1]: [Assaf Morag. (2024, August 19). PG_MEM: A Malware Hidden in the Postgres Processes. Retrieved January 31, 2025.](https://www.aquasec.com/blog/pg_mem-a-malware-hidden-in-the-postgres-processes/)
[^fn2]: [CERT Austria. (2025, March 20). Ransomware-Gruppen nutzen weiterhin kritische Fortinet-Schwachstellen - Warnung vor gepatchten, aber bereits kompromittierten Geräten. Retrieved March 31, 2025.](https://www.cert.at/de/warnungen/2025/3/ransomware-gruppen-nutzen-weiterhin-kritische-fortinet-schwachstellen-warnung-vor-gepatchten-aber-bereits-kompromittierten-geraten)
[^fn3]: [F-Secure. (2004). Worm:W32/NetSky.H. Retrieved January 31, 2025.](https://www.f-secure.com/v-descs/netsky-h.shtml)
[^fn4]: [Matt Wixey. (2022, August 9). Multiple attackers increase pressure on victims, complicate incident response. Retrieved January 31, 2025.](https://news.sophos.com/en-us/2022/08/09/multiple-attackers-increase-pressure-on-victims-complicate-incident-response/#:~:text=While%20some%20threat%20actors%20are%20interdependent%20%28e.g.%2C%20IABs,vulnerabilities%20or%20disabling%20vulnerable%20services%20after%20gaining%20access)
[^fn5]: [Michael Raggi, Adam Aprahamian, Dan Kelly, Mathew Potaczek, Marcin Siedlarz, Austin Larsen. (2024, March 21). Bringing Access Back — Initial Access Brokers Exploit F5 BIG-IP (CVE-2023-46747) and ScreenConnect. Retrieved January 31, 2025.](https://cloud.google.com/blog/topics/threat-intelligence/initial-access-brokers-exploit-f5-screenconnect)