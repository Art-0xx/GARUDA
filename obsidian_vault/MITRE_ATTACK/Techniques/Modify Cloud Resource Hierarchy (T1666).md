---
mitre_data:
  id: T1666
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_cloud_resource_hierarchy
  name: Modify Cloud Resource Hierarchy
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Modify Cloud Resource Hierarchy (`T1666`)

Adversaries may attempt to modify hierarchical structures in infrastructure-as-a-service (IaaS) environments in order to evade defenses.  

IaaS environments often group resources into a hierarchy, enabling improved resource management and application of policies to relevant groups. Hierarchical structures differ among cloud providers. For example, in AWS environments, multiple accounts can be grouped under a single organization, while in Azure environments, multiple subscriptions can be grouped under a single management group.[^fn2][^fn4]

Adversaries may add, delete, or otherwise modify resource groups within an IaaS hierarchy. For example, in Azure environments, an adversary who has gained access to a Global Administrator account may create new subscriptions in which to deploy resources. They may also engage in subscription hijacking by transferring an existing pay-as-you-go subscription from a victim tenant to an adversary-controlled tenant. This will allow the adversary to use the victim’s compute resources without generating logs on the victim tenant.[^fn5][^fn3]

In AWS environments, adversaries with appropriate permissions in a given account may call the `LeaveOrganization` API, causing the account to be severed from the AWS Organization to which it was tied and removing any Service Control Policies, guardrails, or restrictions imposed upon it by its former Organization. Alternatively, adversaries may call the `CreateAccount` API in order to create a new account within an AWS Organization. This account will use the same payment methods registered to the payment account but may not be subject to existing detections or Service Control Policies.[^fn1]


# Platform(s)

- IaaS

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1666](https://attack.mitre.org/techniques/T1666)

[^fn1]: [AWS re Inforce. (2024, June). Retrieved April 15, 2026.](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/events/approved/reinforce-2025/reinforce/2024/slides/TDR432_New-tactics-and-techniques-for-proactive-threat-detection.pdf)
[^fn2]: [AWS. (n.d.). Terminology and concepts for AWS Organizations. Retrieved September 25, 2024.](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html)
[^fn3]: [Dor Edry. (2022, August 24). Hunt for compromised Azure subscriptions using Microsoft Defender for Cloud Apps. Retrieved September 5, 2023.](https://techcommunity.microsoft.com/t5/microsoft-365-defender-blog/hunt-for-compromised-azure-subscriptions-using-microsoft/ba-p/3607121)
[^fn4]: [Microsoft Azure. (2024, May 31). Organize your Azure resources effectively. Retrieved September 25, 2024.](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources)
[^fn5]: [Microsoft Threat Intelligence. (2023, September 14). Peach Sandstorm password spray campaigns enable intelligence collection at high-value targets. Retrieved September 18, 2023.](https://www.microsoft.com/en-us/security/blog/2023/09/14/peach-sandstorm-password-spray-campaigns-enable-intelligence-collection-at-high-value-targets/)