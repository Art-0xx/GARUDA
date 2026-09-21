---
mitre_data:
  id: T1505
  linker_tags:
  - mitre/attack/linker/persistence/server_software_component
  name: Server Software Component
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Server Software Component (`T1505`)

Adversaries may abuse legitimate extensible development features of servers to establish persistent access to systems. Enterprise server applications may include features that allow developers to write and install software or scripts to extend the functionality of the main application. Adversaries may install malicious components to extend and abuse server applications.[^fn1]


# Platform(s)

- Windows
- Linux
- macOS
- Network Devices
- ESXi

# Sub-Technique(s)

- [[../Techniques/Transport Agent (T1505.002)|Transport Agent]]
- [[../Techniques/Terminal Services DLL (T1505.005)|Terminal Services DLL]]
- [[../Techniques/Web Shell (T1505.003)|Web Shell]]
- [[../Techniques/IIS Components (T1505.004)|IIS Components]]
- [[../Techniques/vSphere Installation Bundles (T1505.006)|vSphere Installation Bundles]]
- [[../Techniques/SQL Stored Procedures (T1505.001)|SQL Stored Procedures]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1505](https://attack.mitre.org/techniques/T1505)
- [US-CERT. (2015, November 13). Compromised Web Servers and Web Shells - Threat Awareness and Guidance. Retrieved June 8, 2016.](https://www.us-cert.gov/ncas/alerts/TA15-314A)

[^fn1]: [Adair, S., Lancaster, T., Volexity Threat Research. (2022, June 15). DriftingCloud: Zero-Day Sophos Firewall Exploitation and an Insidious Breach. Retrieved July 1, 2022.](https://www.volexity.com/blog/2022/06/15/driftingcloud-zero-day-sophos-firewall-exploitation-and-an-insidious-breach/)