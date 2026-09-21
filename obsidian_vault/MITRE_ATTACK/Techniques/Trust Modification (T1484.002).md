---
mitre_data:
  id: T1484.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/trust_modification
  - mitre/attack/linker/privilege_escalation/trust_modification
  name: Trust Modification
  related_tactics:
  - defense_impairment
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Trust Modification (`T1484.002`)

Adversaries may add new domain trusts, modify the properties of existing domain trusts, or otherwise change the configuration of trust relationships between domains and tenants to evade defenses and/or elevate privileges.Trust details, such as whether or not user identities are federated, allow authentication and authorization properties to apply between domains or tenants for the purpose of accessing shared resources.[^fn3] These trust objects may include accounts, credentials, and other authentication material applied to servers, tokens, and domains.

Manipulating these trusts may allow an adversary to escalate privileges and/or evade defenses by modifying settings to add objects which they control. For example, in Microsoft Active Directory (AD) environments, this may be used to forge [SAML Tokens](https://attack.mitre.org/techniques/T1606/002) without the need to compromise the signing certificate to forge new credentials. Instead, an adversary can manipulate domain trusts to add their own signing certificate. An adversary may also convert an AD domain to a federated domain using Active Directory Federation Services (AD FS), which may enable malicious trust modifications such as altering the claim issuance rules to log in any valid set of credentials as a specified user.[^fn2] 

An adversary may also add a new federated identity provider to an identity tenant such as Okta or AWS IAM Identity Center, which may enable the adversary to authenticate as any user of the tenant.[^fn4] This may enable the threat actor to gain broad access into a variety of cloud-based services that leverage the identity tenant. For example, in AWS environments, an adversary that creates a new identity provider for an AWS Organization will be able to federate into all of the AWS Organization member accounts without creating identities for each of the member accounts.[^fn1]


# Platform(s)

- Identity Provider
- Windows

# Parent Technique(s)

- [[../Techniques/Domain or Tenant Policy Modification (T1484)|Domain or Tenant Policy Modification]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1484.002](https://attack.mitre.org/techniques/T1484/002)

[^fn1]: [AWS re Inforce. (2024, June). Retrieved April 15, 2026.](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/events/approved/reinforce-2025/reinforce/2024/slides/TDR432_New-tactics-and-techniques-for-proactive-threat-detection.pdf)
[^fn2]: [Dr. Nestori Syynimaa. (2017, November 16). Security vulnerability in Azure AD & Office 365 identity federation. Retrieved September 28, 2022.](https://o365blog.com/post/federation-vulnerability/)
[^fn3]: [Microsoft. (2018, November 28). What is federation with Azure AD?. Retrieved December 30, 2020.](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/whatis-fed)
[^fn4]: [Okta Defensive Cyber Operations. (2023, August 31). Cross-Tenant Impersonation: Prevention and Detection. Retrieved February 15, 2024.](https://sec.okta.com/articles/2023/08/cross-tenant-impersonation-prevention-and-detection)