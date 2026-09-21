---
mitre_data:
  id: T1584.006
  linker_tags:
  - mitre/attack/linker/resource_development/web_services
  name: Web Services
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Web Services (`T1584.006`)

Adversaries may compromise access to third-party web services that can be used during targeting. A variety of popular websites exist for legitimate users to register for web-based services, such as GitHub, Twitter, Dropbox, Google, SendGrid, etc. Adversaries may try to take ownership of a legitimate user's access to a web service and use that web service as infrastructure in support of cyber operations. Such web services can be abused during later stages of the adversary lifecycle, such as during Command and Control ([Web Service](https://attack.mitre.org/techniques/T1102)), [Exfiltration Over Web Service](https://attack.mitre.org/techniques/T1567), or [Phishing](https://attack.mitre.org/techniques/T1566).[^fn1] Using common services, such as those offered by Google or Twitter, makes it easier for adversaries to hide in expected noise. By utilizing a web service, particularly when access is stolen from legitimate users, adversaries can make it difficult to physically tie back operations to them. Additionally, leveraging compromised web-based email services may allow adversaries to leverage the trust associated with legitimate domains.


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Compromise Infrastructure (T1584)|Compromise Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1584.006](https://attack.mitre.org/techniques/T1584/006)
- [ThreatConnect. (2020, December 15). Infrastructure Research and Hunting: Boiling the Domain Ocean. Retrieved October 12, 2021.](https://threatconnect.com/blog/infrastructure-research-hunting/)

[^fn1]: [Insikt Group. (2020, March 12). Swallowing the Snake’s Tail: Tracking Turla Infrastructure. Retrieved September 16, 2024.](https://www.recordedfuture.com/research/turla-apt-infrastructure)