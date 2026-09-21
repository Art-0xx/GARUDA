---
mitre_data:
  id: T1199
  linker_tags:
  - mitre/attack/linker/initial_access/trusted_relationship
  name: Trusted Relationship
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Trusted Relationship (`T1199`)

Adversaries may breach or otherwise leverage organizations who have access to intended victims. Access through trusted third party relationship abuses an existing connection that may not be protected or receives less scrutiny than standard mechanisms of gaining access to a network.

Organizations often grant elevated access to second or third-party external providers in order to allow them to manage internal systems as well as cloud-based environments. Some examples of these relationships include IT services contractors, managed security providers, infrastructure contractors (e.g. HVAC, elevators, physical security). The third-party provider's access may be intended to be limited to the infrastructure being maintained, but may exist on the same network as the rest of the enterprise. As such, [Valid Accounts](https://attack.mitre.org/techniques/T1078) used by the other party for access to internal network systems may be compromised and used.[^fn1]

In Office 365 environments, organizations may grant Microsoft partners or resellers delegated administrator permissions. By compromising a partner or reseller account, an adversary may be able to leverage existing delegated administrator relationships or send new delegated administrator offers to clients in order to gain administrative control over the victim tenant.[^fn2]


# Platform(s)

- IaaS
- Identity Provider
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1199](https://attack.mitre.org/techniques/T1199)

[^fn1]: [CISA. (n.d.). APTs Targeting IT Service Provider Customers. Retrieved November 16, 2020.](https://us-cert.cisa.gov/APTs-Targeting-IT-Service-Provider-Customers)
[^fn2]: [Microsoft. (n.d.). Partners: Offer delegated administration. Retrieved May 27, 2022.](https://support.microsoft.com/en-us/topic/partners-offer-delegated-administration-26530dc0-ebba-415b-86b1-b55bc06b073e?ui=en-us&rs=en-us&ad=us)