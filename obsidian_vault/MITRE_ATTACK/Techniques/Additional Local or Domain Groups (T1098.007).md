---
mitre_data:
  id: T1098.007
  linker_tags:
  - mitre/attack/linker/persistence/additional_local_or_domain_groups
  - mitre/attack/linker/privilege_escalation/additional_local_or_domain_groups
  name: Additional Local or Domain Groups
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Additional Local or Domain Groups (`T1098.007`)

An adversary may add additional local or domain groups to an adversary-controlled account to maintain persistent access to a system or domain.

On Windows, accounts may use the `net localgroup` and `net group` commands to add existing users to local and domain groups.[^fn4][^fn3] On Linux, adversaries may use the `usermod` command for the same purpose.[^fn2]

For example, accounts may be added to the local administrators group on Windows devices to maintain elevated privileges. They may also be added to the Remote Desktop Users group, which allows them to leverage [Remote Desktop Protocol](https://attack.mitre.org/techniques/T1021/001) to log into the endpoints in the future.[^fn5] Adversaries may also add accounts to VPN user groups to gain future persistence on the network.[^fn1] On Linux, accounts may be added to the sudoers group, allowing them to persistently leverage [Sudo and Sudo Caching](https://attack.mitre.org/techniques/T1548/003) for elevated privileges. 

In Windows environments, machine accounts may also be added to domain groups. This allows the local SYSTEM account to gain privileges on the domain.[^fn6]


# Platform(s)

- Windows
- macOS
- Linux

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tool(s)

- [[../Tools/Net|Net]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.007](https://attack.mitre.org/techniques/T1098/007)

[^fn1]: [Kaaviya. (n.d.). SuperBlack Actors Exploiting Two Fortinet Vulnerabilities to Deploy Ransomware. Retrieved September 22, 2025.](https://cybersecuritynews.com/superblack-actors-exploiting-two-fortinet-vulnerabilities/)
[^fn2]: [Man7. (n.d.). Usermod. Retrieved August 5, 2024.](https://www.man7.org/linux/man-pages/man8/usermod.8.html)
[^fn3]: [Microsoft. (2016, August 31). Net group. Retrieved August 5, 2024.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc754051(v=ws.11))
[^fn4]: [Microsoft. (2016, August 31). Net Localgroup. Retrieved August 5, 2024.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc725622(v=ws.11))
[^fn5]: [Microsoft. (2017, April 9). Allow log on through Remote Desktop Services. Retrieved August 5, 2024.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/allow-log-on-through-remote-desktop-services)
[^fn6]: [Scarred Monk. (2022, May 6). Real-time detection scenarios in Active Directory environments. Retrieved August 5, 2024.](https://rootdse.org/posts/monitoring-realtime-activedirectory-domain-scenarios)