---
mitre_data:
  id: T1558.003
  linker_tags:
  - mitre/attack/linker/credential_access/kerberoasting
  name: Kerberoasting
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Kerberoasting (`T1558.003`)

Adversaries may abuse a valid Kerberos ticket-granting ticket (TGT) or sniff network traffic to obtain a ticket-granting service (TGS) ticket that may be vulnerable to [Brute Force](https://attack.mitre.org/techniques/T1110).[^fn2][^fn4] 

Service principal names (SPNs) are used to uniquely identify each instance of a Windows service. To enable authentication, Kerberos requires that SPNs be associated with at least one service logon account (an account specifically tasked with running a service[^fn1]).[^fn6][^fn5][^fn3][^fn7]

Adversaries possessing a valid Kerberos ticket-granting ticket (TGT) may request one or more Kerberos ticket-granting service (TGS) service tickets for any SPN from a domain controller (DC).[^fn2][^fn4] Portions of these tickets may be encrypted with the RC4 algorithm, meaning the Kerberos 5 TGS-REP etype 23 hash of the service account associated with the SPN is used as the private key and is thus vulnerable to offline [Brute Force](https://attack.mitre.org/techniques/T1110) attacks that may expose plaintext credentials.[^fn4][^fn2] [^fn7]

This same behavior could be executed using service tickets captured from network traffic.[^fn4]

Cracked hashes may enable [Persistence](https://attack.mitre.org/tactics/TA0003), [Privilege Escalation](https://attack.mitre.org/tactics/TA0004), and [Lateral Movement](https://attack.mitre.org/tactics/TA0008) via access to [Valid Accounts](https://attack.mitre.org/techniques/T1078).[^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Steal or Forge Kerberos Tickets (T1558)|Steal or Forge Kerberos Tickets]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Impacket|Impacket]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Rubeus|Rubeus]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1558.003](https://attack.mitre.org/techniques/T1558/003)

[^fn1]: [Bani, M. (2018, February 23). Detecting Kerberoasting activity using Azure Security Center. Retrieved March 23, 2018.](https://blogs.technet.microsoft.com/motiba/2018/02/23/detecting-kerberoasting-activity-using-azure-security-center/)
[^fn2]: [EmpireProject. (2016, October 31). Invoke-Kerberoast.ps1. Retrieved March 22, 2018.](https://github.com/EmpireProject/Empire/blob/master/data/module_source/credentials/Invoke-Kerberoast.ps1)
[^fn3]: [Medin, T. (2014, November). Attacking Kerberos - Kicking the Guard Dog of Hades. Retrieved March 22, 2018.](https://redsiege.com/kerberoast-slides)
[^fn4]: [Metcalf, S. (2015, December 31). Cracking Kerberos TGS Tickets Using Kerberoast – Exploiting Kerberos to Compromise the Active Directory Domain. Retrieved March 22, 2018.](https://adsecurity.org/?p=2293)
[^fn5]: [Microsoft. (2010, April 13). Service Principal Names (SPNs) SetSPN Syntax (Setspn.exe). Retrieved March 22, 2018.](https://social.technet.microsoft.com/wiki/contents/articles/717.service-principal-names-spns-setspn-syntax-setspn-exe.aspx)
[^fn6]: [Microsoft. (n.d.). Service Principal Names. Retrieved March 22, 2018.](https://msdn.microsoft.com/library/ms677949.aspx)
[^fn7]: [Schroeder, W. (2016, November 1). Kerberoasting Without Mimikatz. Retrieved September 23, 2024.](https://blog.harmj0y.net/powershell/kerberoasting-without-mimikatz/)