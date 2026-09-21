---
mitre_data:
  id: T1651
  linker_tags:
  - mitre/attack/linker/execution/cloud_administration_command
  name: Cloud Administration Command
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Cloud Administration Command (`T1651`)

Adversaries may abuse cloud management services to execute commands within virtual machines. Resources such as AWS Systems Manager, Azure RunCommand, and Runbooks allow users to remotely run scripts in virtual machines by leveraging installed virtual machine agents. [^fn1][^fn3]

If an adversary gains administrative access to a cloud environment, they may be able to abuse cloud management services to execute commands in the environment’s virtual machines. Additionally, an adversary that compromises a service provider or delegated administrator account may similarly be able to leverage a [Trusted Relationship](https://attack.mitre.org/techniques/T1199) to execute commands in connected virtual machines.[^fn2]


# Platform(s)

- IaaS

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1651](https://attack.mitre.org/techniques/T1651)

[^fn1]: [AWS. (n.d.). AWS Systems Manager Run Command. Retrieved March 13, 2023.](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html)
[^fn2]: [Microsoft Threat Intelligence Center. (2021, October 25). NOBELIUM targeting delegated administrative privileges to facilitate broader attacks. Retrieved March 25, 2022.](https://www.microsoft.com/security/blog/2021/10/25/nobelium-targeting-delegated-administrative-privileges-to-facilitate-broader-attacks/)
[^fn3]: [Microsoft. (2023, March 10). Run scripts in your VM by using Run Command. Retrieved March 13, 2023.](https://learn.microsoft.com/en-us/azure/virtual-machines/run-command-overview)