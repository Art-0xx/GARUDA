---
mitre_data:
  id: T1119
  linker_tags:
  - mitre/attack/linker/collection/automated_collection
  name: Automated Collection
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Automated Collection (`T1119`)

Once established within a system or network, an adversary may use automated techniques for collecting internal data. Methods for performing this technique could include use of a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059) to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. 

In cloud-based environments, adversaries may also use cloud APIs, data pipelines, command line interfaces, or extract, transform, and load (ETL) services to automatically collect data.[^fn1] 

This functionality could also be built into remote access tools. 

This technique may incorporate use of other techniques such as [File and Directory Discovery](https://attack.mitre.org/techniques/T1083) and [Lateral Tool Transfer](https://attack.mitre.org/techniques/T1570) to identify and move files, as well as [Cloud Service Dashboard](https://attack.mitre.org/techniques/T1538) and [Cloud Storage Object Discovery](https://attack.mitre.org/techniques/T1619) to identify resources in cloud environments.


# Platform(s)

- IaaS
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Pacu|Pacu]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/ROADTools|ROADTools]]
- [[../Tools/Mythic|Mythic]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1119](https://attack.mitre.org/techniques/T1119)

[^fn1]: [Mandiant Intelligence. (2023, September 14). Why Are You Texting Me? UNC3944 Leverages SMS Phishing Campaigns for SIM Swapping, Ransomware, Extortion, and Notoriety. Retrieved January 2, 2024.](https://www.mandiant.com/resources/blog/unc3944-sms-phishing-sim-swapping-ransomware)