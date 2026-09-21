---
mitre_data:
  id: T1021.007
  linker_tags:
  - mitre/attack/linker/lateral_movement/cloud_services
  name: Cloud Services
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Cloud Services (`T1021.007`)

Adversaries may log into accessible cloud services within a compromised environment using [Valid Accounts](https://attack.mitre.org/techniques/T1078) that are synchronized with or federated to on-premises user identities. The adversary may then perform management actions or access cloud-hosted resources as the logged-on user. 

Many enterprises federate centrally managed user identities to cloud services, allowing users to login with their domain credentials in order to access the cloud control plane. Similarly, adversaries may connect to available cloud services through the web console or through the cloud command line interface (CLI) (e.g., [Cloud API](https://attack.mitre.org/techniques/T1059/009)), using commands such as <code>Connect-AZAccount</code> for Azure PowerShell, <code>Connect-MgGraph</code> for Microsoft Graph PowerShell, and <code>gcloud auth login</code> for the Google Cloud CLI.

In some cases, adversaries may be able to authenticate to these services via [Application Access Token](https://attack.mitre.org/techniques/T1550/001) instead of a username and password. 


# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS

# Parent Technique(s)

- [[../Techniques/Remote Services (T1021)|Remote Services]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021.007](https://attack.mitre.org/techniques/T1021/007)
