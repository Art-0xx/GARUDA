---
mitre_data:
  id: T1069.003
  linker_tags:
  - mitre/attack/linker/discovery/cloud_groups
  name: Cloud Groups
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Cloud Groups (`T1069.003`)

Adversaries may attempt to find cloud groups and permission settings. The knowledge of cloud permission groups can help adversaries determine the particular roles of users and groups within an environment, as well as which users are associated with a particular group.

With authenticated access there are several tools that can be used to find permissions groups. The <code>Get-MsolRole</code> PowerShell cmdlet can be used to obtain roles and permissions groups for Exchange and Office 365 accounts [^fn6][^fn7].

Azure CLI (AZ CLI) and the Google Cloud Identity Provider API also provide interfaces to obtain permissions groups. The command <code>az ad user get-member-groups</code> will list groups associated to a user account for Azure while the API endpoint <code>GET https://cloudidentity.googleapis.com/v1/groups</code> lists group resources available to a user for Google.[^fn5][^fn3][^fn4] In AWS, the commands `ListRolePolicies` and `ListAttachedRolePolicies` allow users to enumerate the policies attached to a role.[^fn2]

Adversaries may attempt to list ACLs for objects to determine the owner and other accounts with access to the object, for example, via the AWS <code>GetBucketAcl</code> API [^fn1]. Using this information an adversary can target accounts with permissions to a given object or leverage accounts they have already compromised to access the object.


# Platform(s)

- SaaS
- IaaS
- Office Suite
- Identity Provider

# Parent Technique(s)

- [[../Techniques/Permission Groups Discovery (T1069)|Permission Groups Discovery]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/ROADTools|ROADTools]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1069.003](https://attack.mitre.org/techniques/T1069/003)

[^fn1]: [Amazon Web Services. (n.d.). Retrieved May 28, 2021.](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html)
[^fn2]: [Dror Alon. (2022, December 8). Compromised Cloud Compute Credentials: Case Studies From the Wild. Retrieved March 9, 2023.](https://unit42.paloaltonetworks.com/compromised-cloud-compute-credentials/)
[^fn3]: [Felch, M.. (2018, August 31). Red Teaming Microsoft Part 1 Active Directory Leaks via Azure. Retrieved October 6, 2019.](https://www.blackhillsinfosec.com/red-teaming-microsoft-part-1-active-directory-leaks-via-azure/)
[^fn4]: [Google. (n.d.). Retrieved March 16, 2021.](https://cloud.google.com/identity/docs/reference/rest)
[^fn5]: [Microsoft. (n.d.). az ad user. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/cli/azure/ad/user?view=azure-cli-latest)
[^fn6]: [Microsoft. (n.d.). Get-MsolRole. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/powershell/module/msonline/get-msolrole?view=azureadps-1.0)
[^fn7]: [Stringer, M.. (2018, November 21). RainDance. Retrieved October 6, 2019.](https://github.com/True-Demon/raindance)