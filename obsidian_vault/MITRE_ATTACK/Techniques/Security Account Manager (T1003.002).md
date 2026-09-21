---
mitre_data:
  id: T1003.002
  linker_tags:
  - mitre/attack/linker/credential_access/security_account_manager
  name: Security Account Manager
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Security Account Manager (`T1003.002`)

Adversaries may attempt to extract credential material from the Security Account Manager (SAM) database either through in-memory techniques or through the Windows Registry where the SAM database is stored. The SAM is a database file that contains local accounts for the host, typically those found with the <code>net user</code> command. Enumerating the SAM database requires SYSTEM level access.

A number of tools can be used to retrieve the SAM file through in-memory techniques:

* pwdumpx.exe
* [gsecdump](https://attack.mitre.org/software/S0008)
* [Mimikatz](https://attack.mitre.org/software/S0002)
* secretsdump.py

Alternatively, the SAM can be extracted from the Registry with Reg:

* <code>reg save HKLM\sam sam</code>
* <code>reg save HKLM\system system</code>

Creddump7 can then be used to process the SAM database locally to retrieve hashes.[^fn1]

Notes: 

* RID 500 account is the local, built-in administrator.
* RID 501 is the guest account.
* User accounts start with a RID of 1,000+.



# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/Impacket|Impacket]]
- [[../Tools/Fgdump|Fgdump]]
- [[../Tools/pwdump|pwdump]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/gsecdump|gsecdump]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.002](https://attack.mitre.org/techniques/T1003/002)

[^fn1]: [Flathers, R. (2018, February 19). creddump7. Retrieved April 11, 2018.](https://github.com/Neohapsis/creddump7)