---
mitre_data:
  id: T1526
  linker_tags:
  - mitre/attack/linker/discovery/cloud_service_discovery
  name: Cloud Service Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Cloud Service Discovery (`T1526`)

An adversary may attempt to enumerate the cloud services running on a system after gaining access. These methods can differ from platform-as-a-service (PaaS), to infrastructure-as-a-service (IaaS), or software-as-a-service (SaaS). Many services exist throughout the various cloud providers and can include Continuous Integration and Continuous Delivery (CI/CD), Lambda Functions, Entra ID, etc. They may also include security services, such as AWS GuardDuty and Microsoft Defender for Cloud, and logging services, such as AWS CloudTrail and Google Cloud Audit Logs.

Adversaries may attempt to discover information about the services enabled throughout the environment. Azure tools and APIs, such as the Microsoft Graph API and Azure Resource Manager API, can enumerate resources and services, including applications, management groups, resources and policy definitions, and their relationships that are accessible by an identity.[^fn2][^fn1]

For example, Stormspotter is an open source tool for enumerating and constructing a graph for Azure resources and services, and Pacu is an open source AWS exploitation framework that supports several methods for discovering cloud services.[^fn3][^fn4]

Adversaries may use the information gained to shape follow-on behaviors, such as targeting data or credentials from enumerated services or evading identified defenses through [Disable or Modify Tools](https://attack.mitre.org/techniques/T1685) or [Disable or Modify Cloud Log](https://attack.mitre.org/techniques/T1685/002).


# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/ROADTools|ROADTools]]
- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1526](https://attack.mitre.org/techniques/T1526)

[^fn1]: [Microsoft. (2016, March 26). Operations overview | Graph API concepts. Retrieved June 18, 2020.](https://docs.microsoft.com/en-us/previous-versions/azure/ad/graph/howto/azure-ad-graph-api-operations-overview)
[^fn2]: [Microsoft. (2019, May 20). Azure Resource Manager. Retrieved June 17, 2020.](https://docs.microsoft.com/en-us/rest/api/resources/)
[^fn3]: [Microsoft. (2020). Azure Stormspotter GitHub. Retrieved June 17, 2020.](https://github.com/Azure/Stormspotter)
[^fn4]: [Rhino Security Labs. (2019, August 22). Pacu. Retrieved October 17, 2019.](https://github.com/RhinoSecurityLabs/pacu)