---
mitre_data:
  id: T1558.001
  linker_tags:
  - mitre/attack/linker/credential_access/golden_ticket
  name: Golden Ticket
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Golden Ticket (`T1558.001`)

Adversaries who have the KRBTGT account password hash may forge Kerberos ticket-granting tickets (TGT), also known as a golden ticket.[^fn1] Golden tickets enable adversaries to generate authentication material for any account in Active Directory.[^fn2] 

Using a golden ticket, adversaries are then able to request ticket granting service (TGS) tickets, which enable access to specific resources. Golden tickets require adversaries to interact with the Key Distribution Center (KDC) in order to obtain TGS.[^fn3]

The KDC service runs all on domain controllers that are part of an Active Directory domain. KRBTGT is the Kerberos Key Distribution Center (KDC) service account and is responsible for encrypting and signing all Kerberos tickets.[^fn4] The KRBTGT password hash may be obtained using [OS Credential Dumping](https://attack.mitre.org/techniques/T1003) and privileged access to a domain controller.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Steal or Forge Kerberos Tickets (T1558)|Steal or Forge Kerberos Tickets]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/Rubeus|Rubeus]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1558.001](https://attack.mitre.org/techniques/T1558/001)
- [Jeff Warren. (2019, February 19). How to Detect Pass-the-Ticket Attacks. Retrieved February 27, 2020.](https://blog.stealthbits.com/detect-pass-the-ticket-attacks)
- [Microsoft. (2015, March 24). Kerberos Golden Ticket Check (Updated). Retrieved February 27, 2020.](https://gallery.technet.microsoft.com/scriptcenter/Kerberos-Golden-Ticket-b4814285)

[^fn1]: [Metcalf, S. (2015, August 7). Kerberos Golden Tickets are Now More Golden. Retrieved December 1, 2017.](https://adsecurity.org/?p=1640)
[^fn2]: [Abolins, D., Boldea, C., Socha, K., Soria-Machado, M. (2016, April 26). Kerberos Golden Ticket Protection. Retrieved July 13, 2017.](https://cert.europa.eu/static/WhitePapers/UPDATED%20-%20CERT-EU_Security_Whitepaper_2014-007_Kerberos_Golden_Ticket_Protection_v1_4.pdf)
[^fn3]: [Metcalf, S. (2015, May 03). Detecting Forged Kerberos Ticket (Golden Ticket & Silver Ticket) Use in Active Directory. Retrieved December 23, 2015.](https://adsecurity.org/?p=1515)
[^fn4]: [Sean Metcalf. (2014, November 10). Kerberos & KRBTGT: Active Directory’s Domain Kerberos Service Account. Retrieved January 30, 2020.](https://adsecurity.org/?p=483)