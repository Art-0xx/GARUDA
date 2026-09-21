---
mitre_data:
  id: T1602.001
  linker_tags:
  - mitre/attack/linker/collection/snmp_mib_dump
  name: SNMP (MIB Dump)
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# SNMP (MIB Dump) (`T1602.001`)

Adversaries may target the Management Information Base (MIB) to collect and/or mine valuable information in a network managed using Simple Network Management Protocol (SNMP).

The MIB is a configuration repository that stores variable information accessible via SNMP in the form of object identifiers (OID). Each OID identifies a variable that can be read or set and permits active management tasks, such as configuration changes, through remote modification of these variables. SNMP can give administrators great insight in their systems, such as, system information, description of hardware, physical location, and software packages[^fn1]. The MIB may also contain device operational information, including running configuration, routing table, and interface details.

Adversaries may use SNMP queries to collect MIB content directly from SNMP-managed devices in order to collect network information that allows the adversary to build network maps and facilitate future targeted exploitation.[^fn2][^fn3] 


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Data from Configuration Repository (T1602)|Data from Configuration Repository]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1602.001](https://attack.mitre.org/techniques/T1602/001)
- [Cisco. (2008, June 10). Identifying and Mitigating Exploitation of the SNMP Version 3 Authentication Vulnerabilities. Retrieved October 19, 2020.](https://tools.cisco.com/security/center/content/CiscoAppliedMitigationBulletin/cisco-amb-20080610-SNMPv3)

[^fn1]: [Michael Stump. (2003). Information Security Reading Room Securing SNMP: A Look atNet-SNMP (SNMPv3). Retrieved October 19, 2020.](https://www.sans.org/reading-room/whitepapers/networkdevs/securing-snmp-net-snmp-snmpv3-1051)
[^fn2]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)
[^fn3]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)