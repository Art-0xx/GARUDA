---
mitre_data:
  id: T1547.014
  linker_tags:
  - mitre/attack/linker/persistence/active_setup
  - mitre/attack/linker/privilege_escalation/active_setup
  name: Active Setup
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Active Setup (`T1547.014`)

Adversaries may achieve persistence by adding a Registry key to the Active Setup of the local machine. Active Setup is a Windows mechanism that is used to execute programs when a user logs in. The value stored in the Registry key will be executed after a user logs into the computer.[^fn4] These programs will be executed under the context of the user and will have the account's associated permissions level.

Adversaries may abuse Active Setup by creating a key under <code> HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\</code> and setting a malicious value for <code>StubPath</code>. This value will serve as the program that will be executed when a user logs into the computer.[^fn2][^fn7][^fn3][^fn1][^fn5]

Adversaries can abuse these components to execute malware, such as remote access tools, to maintain persistence through system reboots. Adversaries may also use [Masquerading](https://attack.mitre.org/techniques/T1036) to make the Registry entries look as if they are associated with legitimate programs.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.014](https://attack.mitre.org/techniques/T1547/014)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Baumgartner, K., Guerrero-Saade, J. (2015, March 4). Who’s Really Spreading through the Bright Star?. Retrieved December 18, 2020.](https://securelist.com/whos-really-spreading-through-the-bright-star/68978/)
[^fn2]: [Glyer, C. (2010). Examples of Recent APT Persistence Mechanism. Retrieved December 18, 2020.](https://digital-forensics.sans.org/summit-archives/2010/35-glyer-apt-persistence-mechanisms.pdf)
[^fn3]: [Kindlund, D. (2012, December 30). CFR Watering Hole Attack Details. Retrieved November 17, 2024.](https://web.archive.org/web/20201024230407/https://www.fireeye.com/blog/threat-research/2012/12/council-foreign-relations-water-hole-attack-details.html)
[^fn4]: [Klein, H. (2010, April 22). Active Setup Explained. Retrieved December 18, 2020.](https://helgeklein.com/blog/2010/04/active-setup-explained/)
[^fn5]: [Ray, V., et al. (2016, November 22). Tropic Trooper Targets Taiwanese Government and Fossil Fuel Provider With Poison Ivy. Retrieved December 18, 2020.](https://unit42.paloaltonetworks.com/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/)
[^fn7]: [Scott-Railton, J., et al. (2015, December 8). Packrat. Retrieved December 18, 2020.](https://citizenlab.ca/2015/12/packrat-report/)