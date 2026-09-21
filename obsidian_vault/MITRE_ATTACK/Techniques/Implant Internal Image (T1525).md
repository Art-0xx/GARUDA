---
mitre_data:
  id: T1525
  linker_tags:
  - mitre/attack/linker/persistence/implant_internal_image
  name: Implant Internal Image
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Implant Internal Image (`T1525`)

Adversaries may implant cloud or container images with malicious code to establish persistence after gaining access to an environment. Amazon Web Services (AWS) Amazon Machine Images (AMIs), Google Cloud Platform (GCP) Images, and Azure Images as well as popular container runtimes such as Docker can be implanted or backdoored. Unlike [Upload Malware](https://attack.mitre.org/techniques/T1608/001), this technique focuses on adversaries implanting an image in a registry within a victim’s environment. Depending on how the infrastructure is provisioned, this could provide persistent access if the infrastructure provisioning tool is instructed to always use the latest image.[^fn1]

A tool has been developed to facilitate planting backdoors in cloud container images.[^fn2] If an adversary has access to a compromised AWS instance, and permissions to list the available container images, they may implant a backdoor such as a [Web Shell](https://attack.mitre.org/techniques/T1505/003).[^fn1]


# Platform(s)

- IaaS
- Containers

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1525](https://attack.mitre.org/techniques/T1525)

[^fn1]: [Rhino Labs. (2019, August). Exploiting AWS ECR and ECS with the Cloud Container Attack Tool (CCAT). Retrieved September 12, 2019.](https://rhinosecuritylabs.com/aws/cloud-container-attack-tool/)
[^fn2]: [Rhino Labs. (2019, September). Cloud Container Attack Tool (CCAT). Retrieved September 12, 2019.](https://github.com/RhinoSecurityLabs/ccat)