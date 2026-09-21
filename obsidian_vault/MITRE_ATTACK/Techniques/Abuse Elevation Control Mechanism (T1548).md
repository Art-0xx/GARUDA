---
mitre_data:
  id: T1548
  linker_tags:
  - mitre/attack/linker/privilege_escalation/abuse_elevation_control_mechanism
  name: Abuse Elevation Control Mechanism
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Abuse Elevation Control Mechanism (`T1548`)

Adversaries may circumvent mechanisms designed to control privilege elevation to gain higher-level permissions. Most modern systems contain native elevation control mechanisms that are intended to limit privileges that a user can perform on a machine. Authorization has to be granted to specific users in order to perform tasks that can be considered of higher risk.[^fn1][^fn4] An adversary can perform several methods to take advantage of built-in control mechanisms in order to escalate privileges on a system.[^fn2][^fn3]


# Platform(s)

- Linux
- macOS
- Windows
- IaaS
- Office Suite
- Identity Provider

# Sub-Technique(s)

- [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]
- [[../Techniques/Sudo and Sudo Caching (T1548.003)|Sudo and Sudo Caching]]
- [[../Techniques/Setuid and Setgid (T1548.001)|Setuid and Setgid]]
- [[../Techniques/Temporary Elevated Cloud Access (T1548.005)|Temporary Elevated Cloud Access]]
- [[../Techniques/Elevated Execution with Prompt (T1548.004)|Elevated Execution with Prompt]]
- [[../Techniques/TCC Manipulation (T1548.006)|TCC Manipulation]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1548](https://attack.mitre.org/techniques/T1548)

[^fn1]: [Lich, B. (2016, May 31). How User Account Control Works. Retrieved June 3, 2016.](https://technet.microsoft.com/en-us/itpro/windows/keep-secure/how-user-account-control-works)
[^fn2]: [Marc-Etienne M.Leveille. (2016, July 6). New OSX/Keydnap malware is hungry for credentials. Retrieved July 3, 2017.](https://www.welivesecurity.com/2016/07/06/new-osxkeydnap-malware-hungry-credentials/)
[^fn3]: [Salvio, J., Joven, R. (2016, December 16). Malicious Macro Bypasses UAC to Elevate Privilege for Fareit Malware. Retrieved December 27, 2016.](https://blog.fortinet.com/2016/12/16/malicious-macro-bypasses-uac-to-elevate-privilege-for-fareit-malware)
[^fn4]: [Todd C. Miller. (2018). Sudo Man Page. Retrieved March 19, 2018.](https://www.sudo.ws/)