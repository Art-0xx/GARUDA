---
mitre_data:
  id: T1059.009
  linker_tags:
  - mitre/attack/linker/execution/cloud_api
  name: Cloud API
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Cloud API (`T1059.009`)

Adversaries may abuse cloud APIs to execute malicious commands. APIs available in cloud environments provide various functionalities and are a feature-rich method for programmatic access to nearly all aspects of a tenant. These APIs may be utilized through various methods such as command line interpreters (CLIs), in-browser Cloud Shells, [PowerShell](https://attack.mitre.org/techniques/T1059/001) modules like Azure for PowerShell[^fn1], or software developer kits (SDKs) available for languages such as [Python](https://attack.mitre.org/techniques/T1059/006).  

Cloud API functionality may allow for administrative access across all major services in a tenant such as compute, storage, identity and access management (IAM), networking, and security policies.

With proper permissions (often via use of credentials such as [Application Access Token](https://attack.mitre.org/techniques/T1550/001) and [Web Session Cookie](https://attack.mitre.org/techniques/T1550/004)), adversaries may abuse cloud APIs to invoke various functions that execute malicious actions. For example, CLI and PowerShell functionality may be accessed through binaries installed on cloud-hosted or on-premises hosts or accessed through a browser-based cloud shell offered by many cloud platforms (such as AWS, Azure, and GCP). These cloud shells are often a packaged unified environment to use CLI and/or scripting modules hosted as a container in the cloud environment.  


# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.009](https://attack.mitre.org/techniques/T1059/009)

[^fn1]: [Microsoft. (2014, December 12). Azure/azure-powershell. Retrieved March 24, 2023.](https://github.com/Azure/azure-powershell)