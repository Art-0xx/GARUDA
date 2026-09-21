---
mitre_data:
  id: T1686.003
  linker_tags:
  - mitre/attack/linker/defense_impairment/windows_host_firewall
  name: Windows Host Firewall
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Windows Host Firewall (`T1686.003`)

Adversaries may disable or modify the Windows host firewall to bypass controls limiting network usage. This can include disabling the Windows host firewall entirely, suppressing specific profiles (domain, private, public), or adding, deleting, and modifying firewall rules to allow or restrict traffic.[^fn1]

Adversaries may perform these modifications through multiple mechanisms depending on the Windows operating system and access level. For example, adversaries may use command-line utilities (e.g., `netsh advfirewall` or PowerShell cmdlets like `Set-NetFirewallProfile`, `New-NetFirewallRule`), Windows Registry modifications (e.g., altering firewall states and rule configurations via registry keys), or the Windows Control Panel to modify firewall settings through the Windows Security interface.

By disabling or modifying Windows firewall services, adversaries may enable access to remote services, open ports for command and control traffic, or configure rules for further actions. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Disable or Modify System Firewall (T1686)|Disable or Modify System Firewall]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1686.003](https://attack.mitre.org/techniques/T1686/003)

[^fn1]: [Koessel, Sean. Adair, Steven. Lancaster, Tom. (2024, November 22). The Nearest Neighbor Attack: How A Russian APT Weaponized Nearby Wi-Fi Networks for Covert Access. Retrieved February 25, 2025.](https://www.volexity.com/blog/2024/11/22/the-nearest-neighbor-attack-how-a-russian-apt-weaponized-nearby-wi-fi-networks-for-covert-access/)