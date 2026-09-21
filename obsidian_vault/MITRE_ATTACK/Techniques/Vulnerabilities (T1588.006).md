---
mitre_data:
  id: T1588.006
  linker_tags:
  - mitre/attack/linker/resource_development/vulnerabilities
  name: Vulnerabilities
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Vulnerabilities (`T1588.006`)

Adversaries may acquire information about vulnerabilities that can be used during targeting. A vulnerability is a weakness in computer hardware or software that can, potentially, be exploited by an adversary to cause unintended or unanticipated behavior to occur. Adversaries may find vulnerability information by searching open databases or gaining access to closed vulnerability databases.[^fn1]

An adversary may monitor vulnerability disclosures/databases to understand the state of existing, as well as newly discovered, vulnerabilities. There is usually a delay between when a vulnerability is discovered and when it is made public. An adversary may target the systems of those known to conduct vulnerability research (including commercial vendors). Knowledge of a vulnerability may cause an adversary to search for an existing exploit (i.e. [Exploits](https://attack.mitre.org/techniques/T1588/005)) or to attempt to develop one themselves (i.e. [Exploits](https://attack.mitre.org/techniques/T1587/004)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Obtain Capabilities (T1588)|Obtain Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1588.006](https://attack.mitre.org/techniques/T1588/006)

[^fn1]: [National Vulnerability Database. (n.d.). National Vulnerability Database. Retrieved October 15, 2020.](https://nvd.nist.gov/)