---
mitre_data:
  id: T1602
  linker_tags:
  - mitre/attack/linker/collection/data_from_configuration_repository
  name: Data from Configuration Repository
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data from Configuration Repository (`T1602`)

Adversaries may collect data related to managed devices from configuration repositories. Configuration repositories are used by management systems in order to configure, manage, and control data on remote systems. Configuration repositories may also facilitate remote access and administration of devices.

Adversaries may target these repositories in order to collect large quantities of sensitive system administration data. Data from configuration repositories may be exposed by various protocols and software and can store a wide variety of data, much of which may align with adversary Discovery objectives.[^fn3][^fn2]


# Platform(s)

- Network Devices

# Sub-Technique(s)

- [[../Techniques/Network Device Configuration Dump (T1602.002)|Network Device Configuration Dump]]
- [[../Techniques/SNMP (MIB Dump) (T1602.001)|SNMP (MIB Dump)]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1602](https://attack.mitre.org/techniques/T1602)
- [Cisco. (2008, June 10). Identifying and Mitigating Exploitation of the SNMP Version 3 Authentication Vulnerabilities. Retrieved October 19, 2020.](https://tools.cisco.com/security/center/content/CiscoAppliedMitigationBulletin/cisco-amb-20080610-SNMPv3)

[^fn2]: [US-CERT. (2017, June 5). Reducing the Risk of SNMP Abuse. Retrieved October 19, 2020.](https://us-cert.cisa.gov/ncas/alerts/TA17-156A)
[^fn3]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)