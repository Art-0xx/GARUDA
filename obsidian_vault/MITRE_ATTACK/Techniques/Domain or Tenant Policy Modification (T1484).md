---
mitre_data:
  id: T1484
  linker_tags:
  - mitre/attack/linker/defense_impairment/domain_or_tenant_policy_modification
  - mitre/attack/linker/privilege_escalation/domain_or_tenant_policy_modification
  name: Domain or Tenant Policy Modification
  related_tactics:
  - defense_impairment
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Domain or Tenant Policy Modification (`T1484`)

Adversaries may modify the configuration settings of a domain or identity tenant to evade defenses and/or escalate privileges in centrally managed environments. Such services provide a centralized means of managing identity resources such as devices and accounts, and often include configuration settings that may apply between domains or tenants such as trust relationships, identity syncing, or identity federation.

Modifications to domain or tenant settings may include altering domain Group Policy Objects (GPOs) in Microsoft Active Directory (AD) or changing trust settings for domains, including federation trusts relationships between domains or tenants.

With sufficient permissions, adversaries can modify domain or tenant policy settings. Since configuration settings for these services apply to a large number of identity resources, there are a great number of potential attacks malicious outcomes that can stem from this abuse. Examples of such abuse include:  

* modifying GPOs to push a malicious [Scheduled Task](https://attack.mitre.org/techniques/T1053/005) to computers throughout the domain environment[^fn1][^fn4][^fn5]
* modifying domain trusts to include an adversary-controlled domain, allowing adversaries to  forge access tokens that will subsequently be accepted by victim domain resources[^fn2]
* changing configuration settings within the AD environment to implement a [Rogue Domain Controller](https://attack.mitre.org/techniques/T1207).
* adding new, adversary-controlled federated identity providers to identity tenants, allowing adversaries to authenticate as any user managed by the victim tenant [^fn3]

Adversaries may temporarily modify domain or tenant policy, carry out a malicious action(s), and then revert the change to remove suspicious indicators.


# Platform(s)

- Windows
- Identity Provider

# Sub-Technique(s)

- [[../Techniques/Trust Modification (T1484.002)|Trust Modification]]
- [[../Techniques/Group Policy Modification (T1484.001)|Group Policy Modification]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1484](https://attack.mitre.org/techniques/T1484)

[^fn1]: [Metcalf, S. (2016, March 14). Sneaky Active Directory Persistence #17: Group Policy. Retrieved March 5, 2019.](https://adsecurity.org/?p=2716)
[^fn2]: [MSRC. (2020, December 13). Customer Guidance on Recent Nation-State Cyber Attacks. Retrieved December 30, 2020.](https://msrc-blog.microsoft.com/2020/12/13/customer-guidance-on-recent-nation-state-cyber-attacks/)
[^fn3]: [Okta Defensive Cyber Operations. (2023, August 31). Cross-Tenant Impersonation: Prevention and Detection. Retrieved February 15, 2024.](https://sec.okta.com/articles/2023/08/cross-tenant-impersonation-prevention-and-detection)
[^fn4]: [Robbins, A. (2018, April 2). A Red Teamer’s Guide to GPOs and OUs. Retrieved March 5, 2019.](https://wald0.com/?p=179)
[^fn5]: [Schroeder, W. (2016, March 17). Abusing GPO Permissions. Retrieved September 23, 2024.](https://blog.harmj0y.net/redteaming/abusing-gpo-permissions/)