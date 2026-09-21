---
mitre_data:
  id: T1499.003
  linker_tags:
  - mitre/attack/linker/impact/application_exhaustion_flood
  name: Application Exhaustion Flood
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Application Exhaustion Flood (`T1499.003`)

Adversaries may target resource intensive features of applications to cause a denial of service (DoS), denying availability to those applications. For example, specific features in web applications may be highly resource intensive. Repeated requests to those features may be able to exhaust system resources and deny access to the application or the server itself.[^fn2]


# Platform(s)

- Windows
- IaaS
- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Endpoint Denial of Service (T1499)|Endpoint Denial of Service]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1499.003](https://attack.mitre.org/techniques/T1499/003)
- [Cisco. (n.d.). Detecting and Analyzing Network Threats With NetFlow. Retrieved April 25, 2019.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/netflow/configuration/15-mt/nf-15-mt-book/nf-detct-analy-thrts.pdf)

[^fn2]: [Philippe Alcoy, Steinthor Bjarnason, Paul Bowen, C.F. Chui, Kirill Kasavchnko, and Gary Sockrider of Netscout Arbor. (2018, January). Insight into the Global Threat Landscape - Netscout Arbor's 13th Annual Worldwide Infrastructure Security Report. Retrieved April 22, 2019.](https://pages.arbornetworks.com/rs/082-KNA-087/images/13th_Worldwide_Infrastructure_Security_Report.pdf)