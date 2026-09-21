---
mitre_data:
  id: T1584.005
  linker_tags:
  - mitre/attack/linker/resource_development/botnet
  name: Botnet
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Botnet (`T1584.005`)

Adversaries may compromise numerous third-party systems to form a botnet that can be used during targeting. A botnet is a network of compromised systems that can be instructed to perform coordinated tasks.[^fn3] Instead of purchasing/renting a botnet from a booter/stresser service, adversaries may build their own botnet by compromising numerous third-party systems.[^fn2] Adversaries may also conduct a takeover of an existing botnet, such as redirecting bots to adversary-controlled C2 servers.[^fn1] With a botnet at their disposal, adversaries may perform follow-on activity such as large-scale [Phishing](https://attack.mitre.org/techniques/T1566) or Distributed Denial of Service (DDoS).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Compromise Infrastructure (T1584)|Compromise Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1584.005](https://attack.mitre.org/techniques/T1584/005)

[^fn1]: [Dell SecureWorks Counter Threat Unit Threat Intelligence. (2015, October 13). Dridex (Bugat v5) Botnet Takeover Operation. Retrieved May 31, 2019.](https://www.secureworks.com/research/dridex-bugat-v5-botnet-takeover-operation)
[^fn2]: [Imperva. (n.d.). Booters, Stressers and DDoSers. Retrieved October 4, 2020.](https://www.imperva.com/learn/ddos/booters-stressers-ddosers/)
[^fn3]: [Norton. (n.d.). What is a botnet?. Retrieved October 4, 2020.](https://us.norton.com/internetsecurity-malware-what-is-a-botnet.html)