---
mitre_data:
  id: T1489
  linker_tags:
  - mitre/attack/linker/impact/service_stop
  name: Service Stop
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Service Stop (`T1489`)

Adversaries may stop or disable services on a system to render those services unavailable to legitimate users. Stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.[^fn4][^fn6] 

Adversaries may accomplish this by disabling individual services of high importance to an organization, such as <code>MSExchangeIS</code>, which will make Exchange content inaccessible.[^fn6] In some cases, adversaries may stop or disable many or all services to render systems unusable.[^fn4] Services or processes may not allow for modification of their data stores while running. Adversaries may stop services or processes in order to conduct [Data Destruction](https://attack.mitre.org/techniques/T1485) or [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486) on the data stores of services like Exchange and SQL Server, or on virtual machines hosted on ESXi infrastructure.[^fn2][^fn5]

Threat actors may also disable or stop service in cloud environments. For example, by leveraging the `DisableAPIServiceAccess` API in AWS, a threat actor may prevent the service from creating service-linked roles on new accounts in the AWS Organization.[^fn3][^fn1]


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1489](https://attack.mitre.org/techniques/T1489)

[^fn1]: [AWS. (n.d.). DisableAWSServiceAccess. Retrieved May 22, 2025.](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html)
[^fn2]: [Counter Threat Unit Research Team. (2017, May 18). WCry Ransomware Analysis. Retrieved March 26, 2019.](https://www.secureworks.com/research/wcry-ransomware-analysis)
[^fn3]: [Martin McCloskey. (2025, May 13). Tales from the cloud trenches: The Attacker doth persist too much, methinks. Retrieved May 22, 2025.](https://securitylabs.datadoghq.com/articles/tales-from-the-cloud-trenches-the-attacker-doth-persist-too-much/)
[^fn4]: [Mercer, W. and Rascagneres, P. (2018, February 12). Olympic Destroyer Takes Aim At Winter Olympics. Retrieved March 14, 2019.](https://blog.talosintelligence.com/2018/02/olympic-destroyer.html)
[^fn5]: [Michael Dawson. (2021, August 30). Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware. Retrieved March 26, 2025.](https://www.crowdstrike.com/en-us/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/)
[^fn6]: [Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Unraveling the Long Thread of the Sony Attack. Retrieved February 25, 2016.](https://web.archive.org/web/20160226161828/https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Report.pdf)