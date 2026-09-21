---
mitre_data:
  id: T1578.005
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_cloud_compute_configurations
  name: Modify Cloud Compute Configurations
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Modify Cloud Compute Configurations (`T1578.005`)

Adversaries may modify settings that directly affect the size, locations, and resources available to cloud compute infrastructure in order to evade defenses. These settings may include service quotas, subscription associations, tenant-wide policies, or other configurations that impact available compute. Such modifications may allow adversaries to abuse the victim’s compute resources to achieve their goals, potentially without affecting the execution of running instances and/or revealing their activities to the victim.

For example, cloud providers often limit customer usage of compute resources via quotas. Customers may request adjustments to these quotas to support increased computing needs, though these adjustments may require approval from the cloud provider. Adversaries who compromise a cloud environment may similarly request quota adjustments in order to support their activities, such as enabling additional [Resource Hijacking](https://attack.mitre.org/techniques/T1496) without raising suspicion by using up a victim’s entire quota.[^fn1] Adversaries may also increase allowed resource usage by modifying any tenant-wide policies that limit the sizes of deployed virtual machines.[^fn2]

Adversaries may also modify settings that affect where cloud resources can be deployed, such as enabling [Unused/Unsupported Cloud Regions](https://attack.mitre.org/techniques/T1535). 


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Modify Cloud Compute Infrastructure (T1578)|Modify Cloud Compute Infrastructure]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1578.005](https://attack.mitre.org/techniques/T1578/005)

[^fn1]: [Microsoft Threat Intelligence. (2023, July 25). Cryptojacking: Understanding and defending against cloud compute resource abuse. Retrieved September 5, 2023.](https://www.microsoft.com/en-us/security/blog/2023/07/25/cryptojacking-understanding-and-defending-against-cloud-compute-resource-abuse/)
[^fn2]: [Microsoft. (2023, August 30). Azure Policy built-in policy definitions. Retrieved September 5, 2023.](https://learn.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies#compute)