---
mitre_data:
  id: T1078
  linker_tags:
  - mitre/attack/linker/stealth/valid_accounts
  - mitre/attack/linker/persistence/valid_accounts
  - mitre/attack/linker/privilege_escalation/valid_accounts
  - mitre/attack/linker/initial_access/valid_accounts
  name: Valid Accounts
  related_tactics:
  - stealth
  - persistence
  - privilege_escalation
  - initial_access
tags:
- mitre/attack/technique
---



# Valid Accounts (`T1078`)

Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as VPNs, Outlook Web Access, network devices, and remote desktop.[^fn1] Compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. Adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.

In some cases, adversaries may abuse inactive accounts: for example, those belonging to individuals who are no longer part of an organization. Using these accounts may allow the adversary to evade detection, as the original account user will not be present to identify any anomalous activity taking place on their account.[^fn2]

The overlap of permissions for local, domain, and cloud accounts across a network of systems is of concern because the adversary may be able to pivot across accounts and systems to reach a high level of access (i.e., domain or enterprise administrator) to bypass access controls set within the enterprise.[^fn3]


# Platform(s)

- Containers
- ESXi
- IaaS
- Identity Provider
- Linux
- macOS
- Network Devices
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Default Accounts (T1078.001)|Default Accounts]]
- [[../Techniques/Domain Accounts (T1078.002)|Domain Accounts]]
- [[../Techniques/Cloud Accounts (T1078.004)|Cloud Accounts]]
- [[../Techniques/Local Accounts (T1078.003)|Local Accounts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1078](https://attack.mitre.org/techniques/T1078)

[^fn1]: [Adair, S., Lancaster, T., Volexity Threat Research. (2022, June 15). DriftingCloud: Zero-Day Sophos Firewall Exploitation and an Insidious Breach. Retrieved July 1, 2022.](https://www.volexity.com/blog/2022/06/15/driftingcloud-zero-day-sophos-firewall-exploitation-and-an-insidious-breach/)
[^fn2]: [Cybersecurity and Infrastructure Security Agency. (2022, March 15). Russian State-Sponsored Cyber Actors Gain Network Access by Exploiting Default Multifactor Authentication Protocols and “PrintNightmare” Vulnerability. Retrieved March 16, 2022.](https://www.cisa.gov/uscert/ncas/alerts/aa22-074a)
[^fn3]: [Microsoft. (2016, April 15). Attractive Accounts for Credential Theft. Retrieved June 3, 2016.](https://technet.microsoft.com/en-us/library/dn535501.aspx)