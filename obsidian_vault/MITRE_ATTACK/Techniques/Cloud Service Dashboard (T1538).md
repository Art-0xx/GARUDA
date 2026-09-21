---
mitre_data:
  id: T1538
  linker_tags:
  - mitre/attack/linker/discovery/cloud_service_dashboard
  name: Cloud Service Dashboard
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Cloud Service Dashboard (`T1538`)

An adversary may use a cloud service dashboard GUI with stolen credentials to gain useful information from an operational cloud environment, such as specific services, resources, and features. For example, the GCP Command Center can be used to view all assets, review findings of potential security risks, and run additional queries, such as finding public IP addresses and open ports.[^fn2]

Depending on the configuration of the environment, an adversary may be able to enumerate more information via the graphical dashboard than an API. This also allows the adversary to gain information without manually making any API requests.


# Platform(s)

- IaaS
- SaaS
- Office Suite
- Identity Provider

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1538](https://attack.mitre.org/techniques/T1538)
- [Amazon. (n.d.). AWS Console Sign-in Events. Retrieved October 23, 2019.](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-aws-console-sign-in-events.html)

[^fn2]: [Google. (2019, October 3). Quickstart: Using the dashboard. Retrieved October 8, 2019.](https://cloud.google.com/security-command-center/docs/quickstart-scc-dashboard)