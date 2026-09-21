---
mitre_data:
  id: T1558
  linker_tags:
  - mitre/attack/linker/credential_access/steal_or_forge_kerberos_tickets
  name: Steal or Forge Kerberos Tickets
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Steal or Forge Kerberos Tickets (`T1558`)

Adversaries may attempt to subvert Kerberos authentication by stealing or forging Kerberos tickets to enable [Pass the Ticket](https://attack.mitre.org/techniques/T1550/003). Kerberos is an authentication protocol widely used in modern Windows domain environments. In Kerberos environments, referred to as “realms”, there are three basic participants: client, service, and Key Distribution Center (KDC).[^fn9] Clients request access to a service and through the exchange of Kerberos tickets, originating from KDC, they are granted access after having successfully authenticated. The KDC is responsible for both authentication and ticket granting.  Adversaries may attempt to abuse Kerberos by stealing tickets or forging tickets to enable unauthorized access.

On Windows, the built-in <code>klist</code> utility can be used to list and analyze cached Kerberos tickets.[^fn8]



# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Ccache Files (T1558.005)|Ccache Files]]
- [[../Techniques/AS-REP Roasting (T1558.004)|AS-REP Roasting]]
- [[../Techniques/Golden Ticket (T1558.001)|Golden Ticket]]
- [[../Techniques/Silver Ticket (T1558.002)|Silver Ticket]]
- [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1558](https://attack.mitre.org/techniques/T1558)
- [Abolins, D., Boldea, C., Socha, K., Soria-Machado, M. (2016, April 26). Kerberos Golden Ticket Protection. Retrieved July 13, 2017.](https://cert.europa.eu/static/WhitePapers/UPDATED%20-%20CERT-EU_Security_Whitepaper_2014-007_Kerberos_Golden_Ticket_Protection_v1_4.pdf)
- [Bani, M. (2018, February 23). Detecting Kerberoasting activity using Azure Security Center. Retrieved March 23, 2018.](https://blogs.technet.microsoft.com/motiba/2018/02/23/detecting-kerberoasting-activity-using-azure-security-center/)
- [French, D. (2018, October 2). Detecting Attempts to Steal Passwords from Memory. Retrieved October 11, 2019.](https://medium.com/threatpunter/detecting-attempts-to-steal-passwords-from-memory-558f16dce4ea)
- [Jeff Warren. (2019, February 19). How to Detect Pass-the-Ticket Attacks. Retrieved February 27, 2020.](https://blog.stealthbits.com/detect-pass-the-ticket-attacks)
- [Metcalf, S. (2015, December 31). Cracking Kerberos TGS Tickets Using Kerberoast – Exploiting Kerberos to Compromise the Active Directory Domain. Retrieved March 22, 2018.](https://adsecurity.org/?p=2293)
- [Metcalf, S. (2015, May 03). Detecting Forged Kerberos Ticket (Golden Ticket & Silver Ticket) Use in Active Directory. Retrieved December 23, 2015.](https://adsecurity.org/?p=1515)
- [Microsoft. (2015, March 24). Kerberos Golden Ticket Check (Updated). Retrieved February 27, 2020.](https://gallery.technet.microsoft.com/scriptcenter/Kerberos-Golden-Ticket-b4814285)

[^fn8]: [Microsoft. (2021, March 3). klist. Retrieved October 14, 2021.](https://docs.microsoft.com/windows-server/administration/windows-commands/klist)
[^fn9]: [Sean Metcalf. (2014, September 12). Kerberos, Active Directory’s Secret Decoder Ring. Retrieved February 27, 2020.](https://adsecurity.org/?p=227)