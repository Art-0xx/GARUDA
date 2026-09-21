---
mitre_data:
  id: T1136.003
  linker_tags:
  - mitre/attack/linker/persistence/cloud_account
  name: Cloud Account
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Cloud Account (`T1136.003`)

Adversaries may create a cloud account to maintain access to victim systems. With a sufficient level of access, such accounts may be used to establish secondary credentialed access that does not require persistent remote access tools to be deployed on the system.[^fn1][^fn9][^fn2][^fn5][^fn7]

In addition to user accounts, cloud accounts may be associated with services. Cloud providers handle the concept of service accounts in different ways. In Azure, service accounts include service principals and managed identities, which can be linked to various resources such as OAuth applications, serverless functions, and virtual machines in order to grant those resources permissions to perform various activities in the environment.[^fn8] In GCP, service accounts can also be linked to specific resources, as well as be impersonated by other accounts for [Temporary Elevated Cloud Access](https://attack.mitre.org/techniques/T1548/005).[^fn6] While AWS has no specific concept of service accounts, resources can be directly granted permission to assume roles.[^fn4][^fn3]

Adversaries may create accounts that only have access to specific cloud services, which can reduce the chance of detection.

Once an adversary has created a cloud account, they can then manipulate that account to ensure persistence and allow access to additional resources - for example, by adding [Additional Cloud Credentials](https://attack.mitre.org/techniques/T1098/001) or assigning [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003).


# Platform(s)

- IaaS
- SaaS
- Office Suite
- Identity Provider

# Parent Technique(s)

- [[../Techniques/Create Account (T1136)|Create Account]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1136.003](https://attack.mitre.org/techniques/T1136/003)

[^fn1]: [Ako-Adjei, K., Dickhaus, M., Baumgartner, P., Faigel, D., et. al.. (2019, October 8). About admin roles. Retrieved October 18, 2019.](https://docs.microsoft.com/en-us/office365/admin/add-users/about-admin-roles?view=o365-worldwide)
[^fn2]: [AWS. (n.d.). Creating an IAM User in Your AWS Account. Retrieved January 29, 2020.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
[^fn3]: [AWS. (n.d.). Lambda execution role. Retrieved February 28, 2024.](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html)
[^fn4]: [AWS. (n.d.). Using instance profiles. Retrieved February 28, 2024.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html)
[^fn5]: [Google. (n.d.). Create Cloud Identity user accounts. Retrieved January 29, 2020.](https://support.google.com/cloudidentity/answer/7332836?hl=en&ref_topic=7558554)
[^fn6]: [Google. (n.d.). Service Accounts Overview. Retrieved February 28, 2024.](https://cloud.google.com/iam/docs/service-account-overview)
[^fn7]: [Microsoft. (2019, November 11). Add or delete users using Azure Active Directory. Retrieved January 30, 2020.](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/add-users-azure-active-directory)
[^fn8]: [Microsoft. (2023, December 15). Application and service principal objects in Microsoft Entra ID. Retrieved February 28, 2024.](https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals?tabs=browser)
[^fn9]: [Microsoft. (n.d.). Add Another Admin. Retrieved October 18, 2019.](https://support.office.com/en-us/article/add-another-admin-f693489f-9f55-4bd0-a637-a81ce93de22d)