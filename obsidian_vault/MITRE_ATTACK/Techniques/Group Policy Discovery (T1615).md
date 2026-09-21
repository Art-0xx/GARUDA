---
mitre_data:
  id: T1615
  linker_tags:
  - mitre/attack/linker/discovery/group_policy_discovery
  name: Group Policy Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Group Policy Discovery (`T1615`)

Adversaries may gather information on Group Policy settings to identify paths for privilege escalation, security measures applied within a domain, and to discover patterns in domain objects that can be manipulated or used to blend in the environment. Group Policy allows for centralized management of user and computer settings in Active Directory (AD). Group policy objects (GPOs) are containers for group policy settings made up of files stored within a predictable network path `\<DOMAIN>\SYSVOL\<DOMAIN>\Policies\`.[^fn4][^fn1]

Adversaries may use commands such as <code>gpresult</code> or various publicly available PowerShell functions, such as <code>Get-DomainGPO</code> and <code>Get-DomainGPOLocalGroup</code>, to gather information on Group Policy settings.[^fn2][^fn3] Adversaries may use this information to shape follow-on behaviors, including determining potential attack paths within the target network as well as opportunities to manipulate Group Policy settings (i.e. [Domain or Tenant Policy Modification](https://attack.mitre.org/techniques/T1484)) for their benefit.


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1615](https://attack.mitre.org/techniques/T1615)

[^fn1]: [Metcalf, S. (2016, March 14). Sneaky Active Directory Persistence #17: Group Policy. Retrieved March 5, 2019.](https://adsecurity.org/?p=2716)
[^fn2]: [Microsoft. (2017, October 16). gpresult. Retrieved August 6, 2021.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/gpresult)
[^fn3]: [Schroeder, W., Warner, J., Nelson, M. (n.d.). Github PowerShellEmpire. Retrieved April 28, 2016.](https://github.com/PowerShellEmpire/Empire)
[^fn4]: [srachui. (2012, February 13). Group Policy Basics – Part 1: Understanding the Structure of a Group Policy Object. Retrieved March 5, 2019.](https://blogs.technet.microsoft.com/musings_of_a_technical_tam/2012/02/13/group-policy-basics-part-1-understanding-the-structure-of-a-group-policy-object/)