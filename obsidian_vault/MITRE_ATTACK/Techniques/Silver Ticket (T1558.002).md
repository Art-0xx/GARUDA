---
mitre_data:
  id: T1558.002
  linker_tags:
  - mitre/attack/linker/credential_access/silver_ticket
  name: Silver Ticket
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Silver Ticket (`T1558.002`)

Adversaries who have the password hash of a target service account (e.g. SharePoint, MSSQL) may forge Kerberos ticket granting service (TGS) tickets, also known as silver tickets. Kerberos TGS tickets are also known as service tickets.[^fn1]

Silver tickets are more limited in scope in than golden tickets in that they only enable adversaries to access a particular resource (e.g. MSSQL) and the system that hosts the resource; however, unlike golden tickets, adversaries with the ability to forge silver tickets are able to create TGS tickets without interacting with the Key Distribution Center (KDC), potentially making detection more difficult.[^fn2]

Password hashes for target services may be obtained using [OS Credential Dumping](https://attack.mitre.org/techniques/T1003) or [Kerberoasting](https://attack.mitre.org/techniques/T1558/003).


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Steal or Forge Kerberos Tickets (T1558)|Steal or Forge Kerberos Tickets]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/Rubeus|Rubeus]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1558.002](https://attack.mitre.org/techniques/T1558/002)
- [French, D. (2018, October 2). Detecting Attempts to Steal Passwords from Memory. Retrieved October 11, 2019.](https://medium.com/threatpunter/detecting-attempts-to-steal-passwords-from-memory-558f16dce4ea)

[^fn1]: [Sean Metcalf. (2015, November 17). How Attackers Use Kerberos Silver Tickets to Exploit Systems. Retrieved February 27, 2020.](https://adsecurity.org/?p=2011)
[^fn2]: [Metcalf, S. (2015, May 03). Detecting Forged Kerberos Ticket (Golden Ticket & Silver Ticket) Use in Active Directory. Retrieved December 23, 2015.](https://adsecurity.org/?p=1515)