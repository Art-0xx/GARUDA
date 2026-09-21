---
mitre_data:
  id: T1003.003
  linker_tags:
  - mitre/attack/linker/credential_access/ntds
  name: NTDS
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# NTDS (`T1003.003`)

Adversaries may attempt to access or create a copy of the Active Directory domain database in order to steal credential information, as well as obtain other information about domain members such as devices, users, and access rights. By default, the NTDS file (NTDS.dit) is located in <code>%SystemRoot%\NTDS\Ntds.dit</code> of a domain controller.[^fn2]

In addition to looking for NTDS files on active Domain Controllers, adversaries may search for backups that contain the same or similar information.[^fn1]

The following tools and techniques can be used to enumerate the NTDS file and the contents of the entire Active Directory hashes.

* Volume Shadow Copy
* secretsdump.py
* Using the in-built Windows tool, ntdsutil.exe
* Invoke-NinjaCopy



# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/Impacket|Impacket]]
- [[../Tools/esentutl|esentutl]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.003](https://attack.mitre.org/techniques/T1003/003)

[^fn1]: [Metcalf, S. (2015, January 19). Attackers Can Now Use Mimikatz to Implant Skeleton Key on Domain Controllers & BackDoor Your Active Directory Forest. Retrieved February 3, 2015.](http://adsecurity.org/?p=1275)
[^fn2]: [Wikipedia. (2018, March 10). Active Directory. Retrieved April 11, 2018.](https://en.wikipedia.org/wiki/Active_Directory)