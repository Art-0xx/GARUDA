---
mitre_data:
  id: T1098.003
  linker_tags:
  - mitre/attack/linker/persistence/additional_cloud_roles
  - mitre/attack/linker/privilege_escalation/additional_cloud_roles
  name: Additional Cloud Roles
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Additional Cloud Roles (`T1098.003`)

An adversary may add additional roles or permissions to an adversary-controlled cloud account to maintain persistent access to a tenant. For example, adversaries may update IAM policies in cloud-based environments or add a new global administrator in Office 365 environments.[^fn3][^fn4][^fn6][^fn2] With sufficient permissions, a compromised account can gain almost unlimited access to data and settings (including the ability to reset the passwords of other admins).[^fn1]
[^fn2] 

This account modification may immediately follow [Create Account](https://attack.mitre.org/techniques/T1136) or other malicious account activity. Adversaries may also modify existing [Valid Accounts](https://attack.mitre.org/techniques/T1078) that they have compromised. This could lead to privilege escalation, particularly if the roles added allow for lateral movement to additional accounts.

For example, in AWS environments, an adversary with appropriate permissions may be able to use the <code>CreatePolicyVersion</code> API to define a new version of an IAM policy or the <code>AttachUserPolicy</code> API to attach an IAM policy with additional or distinct permissions to a compromised user account.[^fn7]

In some cases, adversaries may add roles to adversary-controlled accounts outside the victim cloud tenant. This allows these external accounts to perform actions inside the victim tenant without requiring the adversary to [Create Account](https://attack.mitre.org/techniques/T1136) or modify a victim-owned account.[^fn5]


# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.003](https://attack.mitre.org/techniques/T1098/003)

[^fn1]: [ Brian Bahtiarian, David Blanton, Britton Manahan and Kyle Pellett. (2022, April 5). Incident report: From CLI to console, chasing an attacker in AWS. Retrieved April 7, 2022.](https://expel.com/blog/incident-report-from-cli-to-console-chasing-an-attacker-in-aws/)
[^fn2]: [Ako-Adjei, K., Dickhaus, M., Baumgartner, P., Faigel, D., et. al.. (2019, October 8). About admin roles. Retrieved October 18, 2019.](https://docs.microsoft.com/en-us/office365/admin/add-users/about-admin-roles?view=o365-worldwide)
[^fn3]: [AWS. (n.d.). Policies and permissions in IAM. Retrieved April 1, 2022.](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)
[^fn4]: [Google Cloud. (2022, March 31). Understanding policies. Retrieved April 1, 2022.](https://cloud.google.com/iam/docs/policies)
[^fn5]: [Invictus Incident Response. (2024, January 31). The curious case of DangerDev@protonmail.me. Retrieved March 19, 2024.](https://www.invictus-ir.com/news/the-curious-case-of-dangerdev-protonmail-me)
[^fn6]: [Microsoft. (n.d.). Add Another Admin. Retrieved October 18, 2019.](https://support.office.com/en-us/article/add-another-admin-f693489f-9f55-4bd0-a637-a81ce93de22d)
[^fn7]: [Spencer Gietzen. (n.d.). AWS IAM Privilege Escalation – Methods and Mitigation. Retrieved May 27, 2022.](https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/)