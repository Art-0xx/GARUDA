---
mitre_data:
  id: T1484.001
  linker_tags:
  - mitre/attack/linker/defense_impairment/group_policy_modification
  - mitre/attack/linker/privilege_escalation/group_policy_modification
  name: Group Policy Modification
  related_tactics:
  - defense_impairment
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Group Policy Modification (`T1484.001`)

Adversaries may modify Group Policy Objects (GPOs) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges on the domain. Group policy allows for centralized management of user and computer settings in Active Directory (AD). GPOs are containers for group policy settings made up of files stored within a predictable network path `\<DOMAIN>\SYSVOL\<DOMAIN>\Policies\`.[^fn7][^fn2] 

Like other objects in AD, GPOs have access controls associated with them. By default all user accounts in the domain have permission to read GPOs. It is possible to delegate GPO access control permissions, e.g. write access, to specific users or groups in the domain.

Malicious GPO modifications can be used to implement many other malicious behaviors such as [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053), [Disable or Modify Tools](https://attack.mitre.org/techniques/T1685), [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105), [Create Account](https://attack.mitre.org/techniques/T1136), [Service Execution](https://attack.mitre.org/techniques/T1569/002),  and more.[^fn2][^fn4][^fn5][^fn1][^fn3] Since GPOs can control so many user and machine settings in the AD environment, there are a great number of potential attacks that can stem from this GPO abuse.[^fn4]

For example, publicly available scripts such as <code>New-GPOImmediateTask</code> can be leveraged to automate the creation of a malicious [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053) by modifying GPO settings, in this case modifying <code>&lt;GPO_PATH&gt;\Machine\Preferences\ScheduledTasks\ScheduledTasks.xml</code>.[^fn4][^fn5] In some cases an adversary might modify specific user rights like SeEnableDelegationPrivilege, set in <code>&lt;GPO_PATH&gt;\MACHINE\Microsoft\Windows NT\SecEdit\GptTmpl.inf</code>, to achieve a subtle AD backdoor with complete control of the domain because the user account under the adversary's control would then be able to modify GPOs.[^fn6]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Domain or Tenant Policy Modification (T1484)|Domain or Tenant Policy Modification]]

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1484.001](https://attack.mitre.org/techniques/T1484/001)

[^fn1]: [Mandiant. (2016, February 25). Mandiant M-Trends 2016. Retrieved November 17, 2024.](https://web.archive.org/web/20211024160454/https://www.fireeye.com/content/dam/fireeye-www/current-threats/pdfs/rpt-mtrends-2016.pdf)
[^fn2]: [Metcalf, S. (2016, March 14). Sneaky Active Directory Persistence #17: Group Policy. Retrieved March 5, 2019.](https://adsecurity.org/?p=2716)
[^fn3]: [Microsoft Secure Team. (2016, June 1). Hacking Team Breach: A Cyber Jurassic Park. Retrieved March 5, 2019.](https://www.microsoft.com/security/blog/2016/06/01/hacking-team-breach-a-cyber-jurassic-park/)
[^fn4]: [Robbins, A. (2018, April 2). A Red Teamer’s Guide to GPOs and OUs. Retrieved March 5, 2019.](https://wald0.com/?p=179)
[^fn5]: [Schroeder, W. (2016, March 17). Abusing GPO Permissions. Retrieved September 23, 2024.](https://blog.harmj0y.net/redteaming/abusing-gpo-permissions/)
[^fn6]: [Schroeder, W. (2017, January 10). The Most Dangerous User Right You (Probably) Have Never Heard Of. Retrieved September 23, 2024.](https://blog.harmj0y.net/activedirectory/the-most-dangerous-user-right-you-probably-have-never-heard-of/)
[^fn7]: [srachui. (2012, February 13). Group Policy Basics – Part 1: Understanding the Structure of a Group Policy Object. Retrieved March 5, 2019.](https://blogs.technet.microsoft.com/musings_of_a_technical_tam/2012/02/13/group-policy-basics-part-1-understanding-the-structure-of-a-group-policy-object/)