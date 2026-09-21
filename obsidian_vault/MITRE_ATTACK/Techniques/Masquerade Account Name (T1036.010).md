---
mitre_data:
  id: T1036.010
  linker_tags:
  - mitre/attack/linker/stealth/masquerade_account_name
  name: Masquerade Account Name
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Masquerade Account Name (`T1036.010`)

Adversaries may match or approximate the names of legitimate accounts to make newly created ones appear benign. This will typically occur during [Create Account](https://attack.mitre.org/techniques/T1136), although accounts may also be renamed at a later date. This may also coincide with [Account Access Removal](https://attack.mitre.org/techniques/T1531) if the actor first deletes an account before re-creating one with the same name.[^fn3]

Often, adversaries will attempt to masquerade as service accounts, such as those associated with legitimate software, data backups, or container cluster management.[^fn1][^fn4] They may also give accounts generic, trustworthy names, such as “admin”, “help”, or “root.”[^fn2] Sometimes adversaries may model account names off of those already existing in the system, as a follow-on behavior to [Account Discovery](https://attack.mitre.org/techniques/T1087).  

Note that this is distinct from [Impersonation](https://attack.mitre.org/techniques/T1684/001), which describes impersonating specific trusted individuals or organizations, rather than user or service account names.  


# Platform(s)

- Containers
- IaaS
- Identity Provider
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.010](https://attack.mitre.org/techniques/T1036/010)

[^fn1]: [Daniel Stepanic, Derek Ditch, Seth Goodwin, Salim Bitam, Andrew Pease. (2022, September 7). CUBA Ransomware Campaign Analysis. Retrieved August 5, 2024.](https://www.elastic.co/security-labs/cuba-ransomware-campaign-analysis)
[^fn2]: [Invictus IR. (2024, January 11). Ransomware in the cloud. Retrieved August 5, 2024.](https://www.invictus-ir.com/news/ransomware-in-the-cloud)
[^fn3]: [John Hammond. (2023, June 1). MOVEit Transfer Critical Vulnerability CVE-2023-34362 Rapid Response. Retrieved August 5, 2024.](https://www.huntress.com/blog/moveit-transfer-critical-vulnerability-rapid-response)
[^fn4]: [Michael Katchinskiy, Assaf Morag. (2023, April 21). First-Ever Attack Leveraging Kubernetes RBAC to Backdoor Clusters. Retrieved July 14, 2023.](https://blog.aquasec.com/leveraging-kubernetes-rbac-to-backdoor-clusters)