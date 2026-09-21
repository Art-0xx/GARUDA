---
mitre_data:
  id: T1602.002
  linker_tags:
  - mitre/attack/linker/collection/network_device_configuration_dump
  name: Network Device Configuration Dump
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Network Device Configuration Dump (`T1602.002`)

Adversaries may access network configuration files to collect sensitive data about the device and the network. The network configuration is a file containing parameters that determine the operation of the device. The device typically stores an in-memory copy of the configuration while operating, and a separate configuration on non-volatile storage to load after device reset. Adversaries can inspect the configuration files to reveal information about the target network and its layout, the network device and its software, or identifying legitimate accounts and credentials for later use.

Adversaries can use common management tools and protocols, such as Simple Network Management Protocol (SNMP) and Smart Install (SMI), to access network configuration files.[^fn2][^fn1] These tools may be used to query specific data from a configuration repository or configure the device to export the configuration for later analysis. 


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Data from Configuration Repository (T1602)|Data from Configuration Repository]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1602.002](https://attack.mitre.org/techniques/T1602/002)
- [US-CERT. (2018, March 27). TA18-068A Brute Force Attacks Conducted by Cyber Actors. Retrieved October 2, 2019.](https://www.us-cert.gov/ncas/alerts/TA18-086A)

[^fn1]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)
[^fn2]: [US-CERT. (2018, April 20). Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://us-cert.cisa.gov/ncas/alerts/TA18-106A)