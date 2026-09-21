---
mitre_data:
  id: T1650
  linker_tags:
  - mitre/attack/linker/resource_development/acquire_access
  name: Acquire Access
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Acquire Access (`T1650`)

Adversaries may purchase or otherwise acquire an existing access to a target system or network. A variety of online services and initial access broker networks are available to sell access to previously compromised systems.[^fn4][^fn2][^fn1] In some cases, adversary groups may form partnerships to share compromised systems with each other.[^fn3]

Footholds to compromised systems may take a variety of forms, such as access to planted backdoors (e.g., [Web Shell](https://attack.mitre.org/techniques/T1505/003)) or established access via [External Remote Services](https://attack.mitre.org/techniques/T1133). In some cases, access brokers will implant compromised systems with a “load” that can be used to install additional malware for paying customers.[^fn4]

By leveraging existing access broker networks rather than developing or obtaining their own initial access capabilities, an adversary can potentially reduce the resources required to gain a foothold on a target network and focus their efforts on later stages of compromise. Adversaries may prioritize acquiring access to systems that have been determined to lack security monitoring or that have high privileges, or systems that belong to organizations in a particular sector.[^fn4][^fn2]

In some cases, purchasing access to an organization in sectors such as IT contracting, software development, or telecommunications may allow an adversary to compromise additional victims via a [Trusted Relationship](https://attack.mitre.org/techniques/T1199), [Multi-Factor Authentication Interception](https://attack.mitre.org/techniques/T1111), or even [Supply Chain Compromise](https://attack.mitre.org/techniques/T1195).

**Note:** while this technique is distinct from other behaviors such as [Purchase Technical Data](https://attack.mitre.org/techniques/T1597/002) and [Credentials](https://attack.mitre.org/techniques/T1589/001), they may often be used in conjunction (especially where the acquired foothold requires [Valid Accounts](https://attack.mitre.org/techniques/T1078)).


# Platform(s)

- PRE

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1650](https://attack.mitre.org/techniques/T1650)

[^fn1]: [Brian Krebs. (2012, October 22). Service Sells Access to Fortune 500 Firms. Retrieved March 10, 2023.](https://krebsonsecurity.com/2012/10/service-sells-access-to-fortune-500-firms/)
[^fn2]: [CrowdStrike Intelligence Team. (2022, February 23). Access Brokers: Who Are the Targets, and What Are They Worth?. Retrieved March 10, 2023.](https://www.crowdstrike.com/blog/access-brokers-targets-and-worth/)
[^fn3]: [Cybersecurity Infrastructure and Defense Agency. (2022, June 2). Karakurt Data Extortion Group. Retrieved March 10, 2023.](https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-152a)
[^fn4]: [Microsoft. (2022, May 9). Ransomware as a service: Understanding the cybercrime gig economy and how to protect yourself. Retrieved March 10, 2023.](https://www.microsoft.com/en-us/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/)