---
mitre_data:
  id: T1087.004
  linker_tags:
  - mitre/attack/linker/discovery/cloud_account
  name: Cloud Account
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Cloud Account (`T1087.004`)

Adversaries may attempt to get a listing of cloud accounts. Cloud accounts are those created and configured by an organization for use by users, remote support, services, or for administration of resources within a cloud service provider or SaaS application.

With authenticated access there are several tools that can be used to find accounts. The <code>Get-MsolRoleMember</code> PowerShell cmdlet can be used to obtain account names given a role or permissions group in Office 365.[^fn6][^fn7] The Azure CLI (AZ CLI) also provides an interface to obtain user accounts with authenticated access to a domain. The command <code>az ad user list</code> will list all users within a domain.[^fn5][^fn3] 

The AWS command <code>aws iam list-users</code> may be used to obtain a list of users in the current account while <code>aws iam list-roles</code> can obtain IAM roles that have a specified path prefix.[^fn1][^fn2] In GCP, <code>gcloud iam service-accounts list</code> and <code>gcloud projects get-iam-policy</code> may be used to obtain a listing of service accounts and users in a project.[^fn4]


# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS

# Parent Technique(s)

- [[../Techniques/Account Discovery (T1087)|Account Discovery]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/ROADTools|ROADTools]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1087.004](https://attack.mitre.org/techniques/T1087/004)

[^fn1]: [Amazon. (n.d.). List Roles. Retrieved August 11, 2020.](https://docs.aws.amazon.com/cli/latest/reference/iam/list-roles.html)
[^fn2]: [Amazon. (n.d.). List Users. Retrieved August 11, 2020.](https://docs.aws.amazon.com/cli/latest/reference/iam/list-users.html)
[^fn3]: [Felch, M.. (2018, August 31). Red Teaming Microsoft Part 1 Active Directory Leaks via Azure. Retrieved October 6, 2019.](https://www.blackhillsinfosec.com/red-teaming-microsoft-part-1-active-directory-leaks-via-azure/)
[^fn4]: [Google. (2020, June 23). gcloud iam service-accounts list. Retrieved August 4, 2020.](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/list)
[^fn5]: [Microsoft. (n.d.). az ad user. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/cli/azure/ad/user?view=azure-cli-latest)
[^fn6]: [Microsoft. (n.d.). Get-MsolRoleMember. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/powershell/module/msonline/get-msolrolemember?view=azureadps-1.0)
[^fn7]: [Stringer, M.. (2018, November 21). RainDance. Retrieved October 6, 2019.](https://github.com/True-Demon/raindance)