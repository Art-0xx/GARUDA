---
mitre_data:
  id: T1072
  linker_tags:
  - mitre/attack/linker/execution/software_deployment_tools
  - mitre/attack/linker/lateral_movement/software_deployment_tools
  name: Software Deployment Tools
  related_tactics:
  - execution
  - lateral_movement
tags:
- mitre/attack/technique
---



# Software Deployment Tools (`T1072`)

Adversaries may gain access to and use centralized software suites installed within an enterprise to execute commands and move laterally through the network. Configuration management and software deployment applications may be used in an enterprise network or cloud environment for routine administration purposes. These systems may also be integrated into CI/CD pipelines. Examples of such solutions include: SCCM, HBSS, Altiris, AWS Systems Manager, Microsoft Intune, Azure Arc, and GCP Deployment Manager.  

Access to network-wide or enterprise-wide endpoint management software may enable an adversary to achieve remote code execution on all connected systems. The access may be used to laterally move to other systems, gather information, or cause a specific effect, such as wiping the hard drives on all endpoints.

SaaS-based configuration management services may allow for broad [Cloud Administration Command](https://attack.mitre.org/techniques/T1651) on cloud-hosted instances, as well as the execution of arbitrary commands on on-premises endpoints. For example, Microsoft Configuration Manager allows Global or Intune Administrators to run scripts as SYSTEM on on-premises devices joined to Entra ID.[^fn2] Such services may also utilize [Web Protocols](https://attack.mitre.org/techniques/T1071/001) to communicate back to adversary owned infrastructure.[^fn3]

Network infrastructure devices may also have configuration management tools that can be similarly abused by adversaries.[^fn1]

The permissions required for this action vary by system configuration; local credentials may be sufficient with direct access to the third-party system, or specific domain credentials may be required. However, the system may require an administrative account to log in or to access specific functionality.


# Platform(s)

- Linux
- macOS
- Network Devices
- SaaS
- Windows

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]
- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1072](https://attack.mitre.org/techniques/T1072)

[^fn1]: [ALEXANDER MARVI, BRAD SLAYBAUGH, DAN EBREO, TUFAIL AHMED, MUHAMMAD UMAIR, TINA JOHNSON. (2023, March 16). Fortinet Zero-Day and Custom Malware Used by Suspected Chinese Actor in Espionage Operation. Retrieved May 15, 2023.](https://www.mandiant.com/resources/blog/fortinet-malware-ecosystem)
[^fn2]: [Andy Robbins. (2020, August 17). Death from Above: Lateral Movement from Azure to On-Prem AD. Retrieved March 13, 2023.](https://posts.specterops.io/death-from-above-lateral-movement-from-azure-to-on-prem-ad-d18cb3959d4d)
[^fn3]: [Ariel Szarf, Or Aspir. (n.d.). Mitiga Security Advisory: Abusing the SSM Agent as a Remote Access Trojan. Retrieved January 31, 2024.](https://www.mitiga.io/blog/mitiga-security-advisory-abusing-the-ssm-agent-as-a-remote-access-trojan)