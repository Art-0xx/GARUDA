---
mitre_data:
  id: T1098.001
  linker_tags:
  - mitre/attack/linker/persistence/additional_cloud_credentials
  - mitre/attack/linker/privilege_escalation/additional_cloud_credentials
  name: Additional Cloud Credentials
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Additional Cloud Credentials (`T1098.001`)

Adversaries may add adversary-controlled credentials to a cloud account to maintain persistent access to victim accounts and instances within the environment.

For example, adversaries may add credentials for Service Principals and Applications in addition to existing legitimate credentials in Azure / Entra ID.[^fn11][^fn9][^fn8] These credentials include both x509 keys and passwords.[^fn11] With sufficient permissions, there are a variety of ways to add credentials including the Azure Portal, Azure command line interface, and Azure or Az PowerShell modules.[^fn4]

In infrastructure-as-a-service (IaaS) environments, after gaining access through [Cloud Accounts](https://attack.mitre.org/techniques/T1078/004), adversaries may generate or import their own SSH keys using either the <code>CreateKeyPair</code> or <code>ImportKeyPair</code> API in AWS or the <code>gcloud compute os-login ssh-keys add</code> command in GCP.[^fn6] This allows persistent access to instances within the cloud environment without further usage of the compromised cloud accounts.[^fn2][^fn13]

Adversaries may also use the <code>CreateAccessKey</code> API in AWS or the <code>gcloud iam service-accounts keys create</code> command in GCP to add access keys to an account. Alternatively, they may use the <code>CreateLoginProfile</code> API in AWS to add a password that can be used to log into the AWS Management Console for [Cloud Service Dashboard](https://attack.mitre.org/techniques/T1538).[^fn7][^fn5] If the target account has different permissions from the requesting account, the adversary may also be able to escalate their privileges in the environment (i.e. [Cloud Accounts](https://attack.mitre.org/techniques/T1078/004)).[^fn15][^fn14] For example, in Entra ID environments, an adversary with the Application Administrator role can add a new set of credentials to their application's service principal. In doing so the adversary would be able to access the service principal’s roles and permissions, which may be different from those of the Application Administrator.[^fn3] 

In AWS environments, adversaries with the appropriate permissions may also use the `sts:GetFederationToken` API call to create a temporary set of credentials to [Forge Web Credentials](https://attack.mitre.org/techniques/T1606) tied to the permissions of the original user account. These temporary credentials may remain valid for the duration of their lifetime even if the original account’s API credentials are deactivated.
[^fn1]

In Entra ID environments with the app password feature enabled, adversaries may be able to add an app password to a user account.[^fn12] As app passwords are intended to be used with legacy devices that do not support multi-factor authentication (MFA), adding an app password can allow an adversary to bypass MFA requirements. Additionally, app passwords may remain valid even if the user’s primary password is reset.[^fn10]


# Platform(s)

- IaaS
- Identity Provider
- SaaS

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.001](https://attack.mitre.org/techniques/T1098/001)

[^fn1]: [ Vaishnav Murthy and Joel Eng. (2023, January 30). How Adversaries Can Persist with AWS User Federation. Retrieved March 10, 2023.](https://www.crowdstrike.com/blog/how-adversaries-persist-with-aws-user-federation/)
[^fn2]: [A. Randazzo, B. Manahan and S. Lipton. (2020, April 28). Finding Evil in AWS. Retrieved June 25, 2020.](https://expel.io/blog/finding-evil-in-aws/)
[^fn3]: [Andy Robbins. (2021, October 12). Azure Privilege Escalation via Service Principal Abuse. Retrieved April 1, 2022.](https://posts.specterops.io/azure-privilege-escalation-via-service-principal-abuse-210ae2be2a5)
[^fn4]: [Bellavance, Ned. (2019, July 16). Demystifying Azure AD Service Principals. Retrieved January 19, 2020.](https://nedinthecloud.com/2019/07/16/demystifying-azure-ad-service-principals/)
[^fn5]: [Detecting AI resource-hijacking with Composite Alerts. (2024, June 6). Lacework Labs. Retrieved July 1, 2024.](https://www.lacework.com/blog/detecting-ai-resource-hijacking-with-composite-alerts)
[^fn6]: [Google. (n.d.). gcloud compute os-login ssh-keys add. Retrieved October 1, 2020.](https://cloud.google.com/sdk/gcloud/reference/compute/os-login/ssh-keys/add)
[^fn7]: [Ian Ahl. (2023, September 20). LUCR-3: SCATTERED SPIDER GETTING SAAS-Y IN THE CLOUD. Retrieved September 25, 2023.](https://permiso.io/blog/lucr-3-scattered-spider-getting-saas-y-in-the-cloud)
[^fn8]: [Kunz, Bruce. (2018, October 14). Blue Cloud of Death: Red Teaming Azure. Retrieved November 21, 2019.](https://www.youtube.com/watch?v=wQ1CuAPnrLM&feature=youtu.be&t=2815)
[^fn9]: [Kunz, Bryce. (2018, May 11). Blue Cloud of Death: Red Teaming Azure. Retrieved October 23, 2019.](https://speakerdeck.com/tweekfawkes/blue-cloud-of-death-red-teaming-azure-1)
[^fn10]: [Microsoft. (2023, October 23). Enforce Microsoft Entra multifactor authentication with legacy applications using app passwords. Retrieved May 28, 2024.](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-mfa-app-passwords)
[^fn11]: [MSRC. (2020, December 13). Customer Guidance on Recent Nation-State Cyber Attacks. Retrieved December 17, 2020.](https://msrc-blog.microsoft.com/2020/12/13/customer-guidance-on-recent-nation-state-cyber-attacks/)
[^fn12]: [Ofir Rozmann, Asli Koksal, Adrian Hernandez, Sarah Bock, and Jonathan Leathery. (2024, May 1). Uncharmed: Untangling Iran's APT42 Operations. Retrieved May 28, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/untangling-iran-apt42-operations)
[^fn13]: [S. Lipton, L. Easterly, A. Randazzo and J. Hencinski. (2020, July 28). Behind the scenes in the Expel SOC: Alert-to-fix in AWS. Retrieved October 1, 2020.](https://expel.io/blog/behind-the-scenes-expel-soc-alert-aws/)
[^fn14]: [SCARLETEEL 2.0: Fargate, Kubernetes, and Crypto. (2023, July 11). SCARLETEEL 2.0: Fargate, Kubernetes, and Crypto. Retrieved July 12, 2023.](https://sysdig.com/blog/scarleteel-2-0/)
[^fn15]: [Spencer Gietzen. (n.d.). AWS IAM Privilege Escalation – Methods and Mitigation. Retrieved May 27, 2022.](https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/)