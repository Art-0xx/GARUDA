---
mitre_data:
  id: T1584.008
  linker_tags:
  - mitre/attack/linker/resource_development/network_devices
  name: Network Devices
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Network Devices (`T1584.008`)

Adversaries may compromise third-party network devices that can be used during targeting. Network devices, such as small office/home office (SOHO) routers, may be compromised where the adversary's ultimate goal is not [Initial Access](https://attack.mitre.org/tactics/TA0001) to that environment, but rather to leverage these devices to support additional targeting.

Once an adversary has control, compromised network devices can be used to launch additional operations, such as hosting payloads for [Phishing](https://attack.mitre.org/techniques/T1566) campaigns (i.e., [Link Target](https://attack.mitre.org/techniques/T1608/005)) or enabling the required access to execute [Content Injection](https://attack.mitre.org/techniques/T1659) operations. Adversaries may also be able to harvest reusable credentials (i.e., [Valid Accounts](https://attack.mitre.org/techniques/T1078)) from compromised network devices.

Adversaries often target Internet-facing edge devices and related network appliances that specifically do not support robust host-based defenses.[^fn2][^fn1]

Compromised network devices may be used to support subsequent [Command and Control](https://attack.mitre.org/tactics/TA0011) activity, such as [Hide Infrastructure](https://attack.mitre.org/techniques/T1665) through an established [Proxy](https://attack.mitre.org/techniques/T1090) and/or [Botnet](https://attack.mitre.org/techniques/T1584/005) network.[^fn3]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Compromise Infrastructure (T1584)|Compromise Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1584.008](https://attack.mitre.org/techniques/T1584/008)

[^fn1]: [Greenberg, A. (2022, November 10). Russia’s New Cyberwarfare in Ukraine Is Fast, Dirty, and Relentless. Retrieved March 22, 2023.](https://www.wired.com/story/russia-ukraine-cyberattacks-mandiant/)
[^fn2]: [Marvi, A. et al.. (2023, March 16). Fortinet Zero-Day and Custom Malware Used by Suspected Chinese Actor in Espionage Operation. Retrieved March 22, 2023.](https://www.mandiant.com/resources/blog/fortinet-malware-ecosystem)
[^fn3]: [Office of Public Affairs. (2024, February 15). Justice Department Conducts Court-Authorized Disruption of Botnet Controlled by the Russian Federation’s Main Intelligence Directorate of the General Staff (GRU). Retrieved March 28, 2024.](https://www.justice.gov/opa/pr/justice-department-conducts-court-authorized-disruption-botnet-controlled-russian)