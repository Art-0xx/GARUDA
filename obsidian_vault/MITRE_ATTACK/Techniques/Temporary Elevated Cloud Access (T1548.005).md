---
mitre_data:
  id: T1548.005
  linker_tags:
  - mitre/attack/linker/privilege_escalation/temporary_elevated_cloud_access
  name: Temporary Elevated Cloud Access
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Temporary Elevated Cloud Access (`T1548.005`)

Adversaries may abuse permission configurations that allow them to gain temporarily elevated access to cloud resources. Many cloud environments allow administrators to grant user or service accounts permission to request just-in-time access to roles, impersonate other accounts, pass roles onto resources and services, or otherwise gain short-term access to a set of privileges that may be distinct from their own. 

Just-in-time access is a mechanism for granting additional roles to cloud accounts in a granular, temporary manner. This allows accounts to operate with only the permissions they need on a daily basis, and to request additional permissions as necessary. Sometimes just-in-time access requests are configured to require manual approval, while other times the desired permissions are automatically granted.[^fn6]

Account impersonation allows user or service accounts to temporarily act with the permissions of another account. For example, in GCP users with the `iam.serviceAccountTokenCreator` role can create temporary access tokens or sign arbitrary payloads with the permissions of a service account, while service accounts with domain-wide delegation permission are permitted to impersonate Google Workspace accounts.[^fn4][^fn9][^fn3][^fn10] In Exchange Online, the `ApplicationImpersonation` role allows a service account to use the permissions associated with specified user accounts.[^fn5] 

Many cloud environments also include mechanisms for users to pass roles to resources that allow them to perform tasks and authenticate to other services. While the user that creates the resource does not directly assume the role they pass to it, they may still be able to take advantage of the role's access -- for example, by configuring the resource to perform certain actions with the permissions it has been granted. In AWS, users with the `PassRole` permission can allow a service they create to assume a given role, while in GCP, users with the `iam.serviceAccountUser` role can attach a service account to a resource.[^fn1][^fn4]

While users require specific role assignments in order to use any of these features, cloud administrators may misconfigure permissions. This could result in escalation paths that allow adversaries to gain access to resources beyond what was originally intended.[^fn8][^fn7]

**Note:** this technique is distinct from [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003), which involves assigning permanent roles to accounts rather than abusing existing permissions structures to gain temporarily elevated access to resources. However, adversaries that compromise a sufficiently privileged account may grant another account they control [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003) that would allow them to also abuse these features. This may also allow for greater stealth than would be had by directly using the highly privileged account, especially when logs do not clarify when role impersonation is taking place.[^fn2]


# Platform(s)

- IaaS
- Office Suite
- Identity Provider

# Parent Technique(s)

- [[../Techniques/Abuse Elevation Control Mechanism (T1548)|Abuse Elevation Control Mechanism]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1548.005](https://attack.mitre.org/techniques/T1548/005)

[^fn1]: [AWS. (n.d.). Granting a user permissions to pass a role to an AWS service. Retrieved July 10, 2023.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html)
[^fn2]: [CrowdStrike. (2022, January 27). Early Bird Catches the Wormhole: Observations from the StellarParticle Campaign. Retrieved February 7, 2022.](https://www.crowdstrike.com/blog/observations-from-the-stellarparticle-campaign/)
[^fn3]: [Google Cloud. (n.d.). Manage just-in-time privileged access to projects. Retrieved September 21, 2023.](https://cloud.google.com/architecture/manage-just-in-time-privileged-access-to-project)
[^fn4]: [Google Cloud. (n.d.). Roles for service account authentication. Retrieved July 10, 2023.](https://cloud.google.com/iam/docs/service-account-permissions)
[^fn5]: [Microsoft. (2022, September 13). Impersonation and EWS in Exchange. Retrieved July 10, 2023.](https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/impersonation-and-ews-in-exchange)
[^fn6]: [Microsoft. (2023, August 29). Configure and approve just-in-time access for Azure Managed Applications. Retrieved September 21, 2023.](https://learn.microsoft.com/en-us/azure/azure-resource-manager/managed-applications/approve-just-in-time-access)
[^fn7]: [Spencer Gietzen. (n.d.). AWS IAM Privilege Escalation – Methods and Mitigation. Retrieved May 27, 2022.](https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/)
[^fn8]: [Spencer Gietzen. (n.d.). Privilege Escalation in Google Cloud Platform – Part 1 (IAM). Retrieved September 21, 2023.](https://rhinosecuritylabs.com/gcp/privilege-escalation-google-cloud-platform-part-1/)
[^fn9]: [Yonatan Khanashvilli. (2023, November 28). DeleFriend: Severe design flaw in Domain Wide Delegation could leave Google Workspace vulnerable for takeover. Retrieved January 16, 2024.](https://www.hunters.security/en/blog/delefriend-a-newly-discovered-design-flaw-in-domain-wide-delegation-could-leave-google-workspace-vulnerable-for-takeover)
[^fn10]: [Zohar Zigdon. (2023, November 30). Exploring a Critical Risk in Google Workspace's Domain-Wide Delegation Feature. Retrieved January 16, 2024.](https://unit42.paloaltonetworks.com/critical-risk-in-google-workspace-delegation-feature/)