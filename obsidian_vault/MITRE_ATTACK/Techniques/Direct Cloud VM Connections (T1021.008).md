---
mitre_data:
  id: T1021.008
  linker_tags:
  - mitre/attack/linker/lateral_movement/direct_cloud_vm_connections
  name: Direct Cloud VM Connections
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Direct Cloud VM Connections (`T1021.008`)

Adversaries may leverage [Valid Accounts](https://attack.mitre.org/techniques/T1078) to log directly into accessible cloud hosted compute infrastructure through cloud native methods. Many cloud providers offer interactive connections to virtual infrastructure that can be accessed through the [Cloud API](https://attack.mitre.org/techniques/T1059/009), such as Azure Serial Console[^fn5], AWS EC2 Instance Connect[^fn1][^fn3], and AWS System Manager.[^fn2].

Methods of authentication for these connections can include passwords, application access tokens, or SSH keys. These cloud native methods may, by default, allow for privileged access on the host with SYSTEM or root level access. 

Adversaries may utilize these cloud native methods to directly access virtual infrastructure and pivot through an environment.[^fn4] These connections typically provide direct console access to the VM rather than the execution of scripts (i.e., [Cloud Administration Command](https://attack.mitre.org/techniques/T1651)).


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Remote Services (T1021)|Remote Services]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021.008](https://attack.mitre.org/techniques/T1021/008)

[^fn1]: [AWS. (2023, June 2). Connect using EC2 Instance Connect. Retrieved June 2, 2023.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-connect-methods.html)
[^fn2]: [AWS. (2023, June 2). What is AWS System Manager?. Retrieved June 2, 2023.](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)
[^fn3]: [Ian Ahl. (2023, September 20). LUCR-3: Scattered Spider Getting SaaS-y In The Cloud. Retrieved September 20, 2023.](https://permiso.io/blog/lucr-3-scattered-spider-getting-saas-y-in-the-cloud)
[^fn4]: [Mandiant Intelligence. (2023, May 16). SIM Swapping and Abuse of the Microsoft Azure Serial Console: Serial Is Part of a Well Balanced Attack. Retrieved June 2, 2023.](https://www.mandiant.com/resources/blog/sim-swapping-abuse-azure-serial)
[^fn5]: [Microsoft. (2022, October 17). Azure Serial Console. Retrieved June 2, 2023.](https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/serial-console-overview)