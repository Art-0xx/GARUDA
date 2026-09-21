---
mitre_data:
  id: T1003.006
  linker_tags:
  - mitre/attack/linker/credential_access/dcsync
  name: DCSync
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# DCSync (`T1003.006`)

Adversaries may attempt to access credentials and other sensitive information by abusing a Windows Domain Controller's application programming interface (API)[^fn4] [^fn6] [^fn8] [^fn12] to simulate the replication process from a remote domain controller using a technique called DCSync.

Members of the Administrators, Domain Admins, and Enterprise Admin groups or computer accounts on the domain controller are able to run DCSync to pull password data[^fn2] from Active Directory, which may include current and historical hashes of potentially useful accounts such as KRBTGT and Administrators. The hashes can then in turn be used to create a [Golden Ticket](https://attack.mitre.org/techniques/T1558/001) for use in [Pass the Ticket](https://attack.mitre.org/techniques/T1550/003)[^fn10] or change an account's password as noted in [Account Manipulation](https://attack.mitre.org/techniques/T1098).[^fn11]

DCSync functionality has been included in the "lsadump" module in [Mimikatz](https://attack.mitre.org/software/S0002).[^fn1] Lsadump also includes NetSync, which performs DCSync over a legacy replication protocol.[^fn5]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/Mimikatz|Mimikatz]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.006](https://attack.mitre.org/techniques/T1003/006)
- [Metcalf, S. (2015, September 25). Mimikatz DCSync Usage, Exploitation, and Detection. Retrieved December 4, 2017.](https://adsecurity.org/?p=1729)
- [Microsoft. (n.d.). MS-SAMR Security Account Manager (SAM) Remote Protocol (Client-to-Server) - Transport. Retrieved December 4, 2017.](https://msdn.microsoft.com/library/cc245496.aspx)
- [Schroeder, W. (2015, September 22). Mimikatz and DCSync and ExtraSids, Oh My. Retrieved December 4, 2017.](http://www.harmj0y.net/blog/redteaming/mimikatz-and-dcsync-and-extrasids-oh-my/)

[^fn1]: [Deply, B., Le Toux, V. (2016, June 5). module ~ lsadump. Retrieved August 7, 2017.](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)
[^fn2]: [Metcalf, S. (2015, September 25). Mimikatz DCSync Usage, Exploitation, and Detection. Retrieved August 7, 2017.](https://adsecurity.org/?p=1729)
[^fn4]: [Microsoft. (2017, December 1). MS-DRSR Directory Replication Service (DRS) Remote Protocol. Retrieved December 4, 2017.](https://msdn.microsoft.com/library/cc228086.aspx)
[^fn5]: [Microsoft. (2017, December 1). MS-NRPC - Netlogon Remote Protocol. Retrieved December 6, 2017.](https://msdn.microsoft.com/library/cc237008.aspx)
[^fn6]: [Microsoft. (n.d.). IDL_DRSGetNCChanges (Opnum 3). Retrieved December 4, 2017.](https://msdn.microsoft.com/library/dd207691.aspx)
[^fn8]: [SambaWiki. (n.d.). DRSUAPI. Retrieved December 4, 2017.](https://wiki.samba.org/index.php/DRSUAPI)
[^fn10]: [Schroeder, W. (2015, September 22). Mimikatz and DCSync and ExtraSids, Oh My. Retrieved September 23, 2024.](https://blog.harmj0y.net/redteaming/mimikatz-and-dcsync-and-extrasids-oh-my/)
[^fn11]: [Warren, J. (2017, July 11). Manipulating User Passwords with Mimikatz. Retrieved December 4, 2017.](https://blog.stealthbits.com/manipulating-user-passwords-with-mimikatz-SetNTLM-ChangeNTLM)
[^fn12]: [Wine API. (n.d.). samlib.dll. Retrieved November 17, 2024.](https://strontic.github.io/xcyclopedia/library/samlib.dll-0BDF6351009F6EBA5BA7E886F23263B1.html)