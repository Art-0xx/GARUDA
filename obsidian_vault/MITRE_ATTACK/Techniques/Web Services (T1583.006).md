---
mitre_data:
  id: T1583.006
  linker_tags:
  - mitre/attack/linker/resource_development/web_services
  name: Web Services
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Web Services (`T1583.006`)

Adversaries may register for web services that can be used during targeting. A variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during Command and Control ([Web Service](https://attack.mitre.org/techniques/T1102)), [Exfiltration Over Web Service](https://attack.mitre.org/techniques/T1567), or [Phishing](https://attack.mitre.org/techniques/T1566). Using common services, such as those offered by Google, GitHub, or Twitter, makes it easier for adversaries to hide in expected noise.[^fn2][^fn1] By utilizing a web service, adversaries can make it difficult to physically tie back operations to them.


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Acquire Infrastructure (T1583)|Acquire Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1583.006](https://attack.mitre.org/techniques/T1583/006)
- [ThreatConnect. (2020, December 15). Infrastructure Research and Hunting: Boiling the Domain Ocean. Retrieved October 12, 2021.](https://threatconnect.com/blog/infrastructure-research-hunting/)

[^fn1]: [Dvir Sasson. (2024, May 13). GitHub Abuse Flaw Shows Why We Can't Shrug Off Abuse Vulnerabilities in Security. Retrieved March 31, 2025.](https://thehackernews.com/expert-insights/2024/05/github-abuse-flaw-shows-why-we-cant.html)
[^fn2]: [FireEye Labs. (2015, July). HAMMERTOSS: Stealthy Tactics Define a Russian Cyber Threat Group. Retrieved November 17, 2024.](https://services.google.com/fh/files/misc/rpt-apt29-hammertoss-stealthy-tactics-define-en.pdf)