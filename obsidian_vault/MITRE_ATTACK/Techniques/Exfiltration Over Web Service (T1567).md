---
mitre_data:
  id: T1567
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_web_service
  name: Exfiltration Over Web Service
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Web Service (`T1567`)

Adversaries may use an existing, legitimate external Web service to exfiltrate data rather than their primary command and control channel. Popular Web services acting as an exfiltration mechanism may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to compromise. Firewall rules may also already exist to permit traffic to these services.

Web service providers also commonly use SSL/TLS encryption, giving adversaries an added level of protection.


# Platform(s)

- ESXi
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Exfiltration Over Webhook (T1567.004)|Exfiltration Over Webhook]]
- [[../Techniques/Exfiltration to Code Repository (T1567.001)|Exfiltration to Code Repository]]
- [[../Techniques/Exfiltration to Text Storage Sites (T1567.003)|Exfiltration to Text Storage Sites]]
- [[../Techniques/Exfiltration to Cloud Storage (T1567.002)|Exfiltration to Cloud Storage]]

# Tool(s)

- [[../Tools/ngrok|ngrok]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1567](https://attack.mitre.org/techniques/T1567)
