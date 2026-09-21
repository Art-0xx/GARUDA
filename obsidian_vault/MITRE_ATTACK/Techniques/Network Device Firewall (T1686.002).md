---
mitre_data:
  id: T1686.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/network_device_firewall
  name: Network Device Firewall
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Network Device Firewall (`T1686.002`)

Adversaries may disable network device-based firewall mechanisms entirely or add, delete, or modify particular rules in order to bypass controls limiting network usage.  

Adversaries may obtain access to devices such as routers, switches, or other perimeter/network devices and change access control lists (ACLs), security zones, or policy rules to permit otherwise blocked traffic. For example, adversaries may add new network firewall rules to allow access to all internal network subnets without restrictions. Allowing access to internal network subsets may enable unrestricted inbound/outbound connectivity or open paths for command and control and lateral movement.

Adversaries may obtain access to network device management interfaces via [Valid Accounts](https://attack.mitre.org/techniques/T1078) or by exploiting vulnerabilities. In some cases, threat actors may target firewalls and other network infrastructure that are exposed to the internet by leveraging weaknesses in public-facing applications ([Exploit Public-Facing Application](https://attack.mitre.org/techniques/T1190)).[^fn1]

Adversaries may also modify host networking configurations that indirectly manipulate system firewalls, such as adjusting interface bandwidth or network connection request thresholds. 


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Disable or Modify System Firewall (T1686)|Disable or Modify System Firewall]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1686.002](https://attack.mitre.org/techniques/T1686/002)

[^fn1]: [NIST NVD. (2025, January 22). Retrieved September 22, 2025.](https://nvd.nist.gov/vuln/detail/CVE-2024-55591)