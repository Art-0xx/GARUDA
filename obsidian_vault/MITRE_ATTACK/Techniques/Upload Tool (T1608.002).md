---
mitre_data:
  id: T1608.002
  linker_tags:
  - mitre/attack/linker/resource_development/upload_tool
  name: Upload Tool
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Upload Tool (`T1608.002`)

Adversaries may upload tools to third-party or adversary controlled infrastructure to make it accessible during targeting. Tools can be open or closed source, free or commercial. Tools can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: [PsExec](https://attack.mitre.org/software/S0029)). Adversaries may upload tools to support their operations, such as making a tool available to a victim network to enable [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105) by placing it on an Internet accessible web server.

Tools may be placed on infrastructure that was previously purchased/rented by the adversary ([Acquire Infrastructure](https://attack.mitre.org/techniques/T1583)) or was otherwise compromised by them ([Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)).[^fn1] Tools can also be staged on web services, such as an adversary controlled GitHub repo, or on Platform-as-a-Service offerings that enable users to easily provision applications.[^fn3][^fn2][^fn4]

Adversaries can avoid the need to upload a tool by having compromised victim machines download the tool directly from a third-party hosting location (ex: a non-adversary controlled GitHub repo), including the original hosting site of the tool.


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Stage Capabilities (T1608)|Stage Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1608.002](https://attack.mitre.org/techniques/T1608/002)

[^fn1]: [Dell SecureWorks Counter Threat Unit Threat Intelligence. (2015, August 5). Threat Group-3390 Targets Organizations for Cyberespionage. Retrieved August 18, 2018.](https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage)
[^fn2]: [Jérôme Segura. (2019, December 4). There's an app for that: web skimmers found on PaaS Heroku. Retrieved August 18, 2022.](https://www.malwarebytes.com/blog/news/2019/12/theres-an-app-for-that-web-skimmers-found-on-paas-heroku)
[^fn3]: [Kent Backman. (2021, May 18). When Intrusions Don’t Align: A New Water Watering Hole and Oldsmar. Retrieved August 18, 2022.](https://www.dragos.com/blog/industry-news/a-new-water-watering-hole/)
[^fn4]: [Paul Litvak. (2020, October 8). Kud I Enter Your Server? New Vulnerabilities in Microsoft Azure. Retrieved August 18, 2022.](https://www.intezer.com/blog/malware-analysis/kud-i-enter-your-server-new-vulnerabilities-in-microsoft-azure/)