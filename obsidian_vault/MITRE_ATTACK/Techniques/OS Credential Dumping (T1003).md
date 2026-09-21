---
mitre_data:
  id: T1003
  linker_tags:
  - mitre/attack/linker/credential_access/os_credential_dumping
  name: OS Credential Dumping
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# OS Credential Dumping (`T1003`)

Adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password. Credentials can be obtained from OS caches, memory, or structures.[^fn10] Credentials can then be used to perform [Lateral Movement](https://attack.mitre.org/tactics/TA0008) and access restricted information.

Several of the tools mentioned in associated sub-techniques may be used by both adversaries and professional security testers. Additional custom tools likely exist as well.



# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Security Account Manager (T1003.002)|Security Account Manager]]
- [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]
- [[../Techniques/Proc Filesystem (T1003.007)|Proc Filesystem]]
- [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]
- [[../Techniques/Cached Domain Credentials (T1003.005)|Cached Domain Credentials]]
- [[../Techniques/_etc_passwd and _etc_shadow (T1003.008)|/etc/passwd and /etc/shadow]]
- [[../Techniques/NTDS (T1003.003)|NTDS]]
- [[../Techniques/DCSync (T1003.006)|DCSync]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003](https://attack.mitre.org/techniques/T1003)
- [French, D. (2018, October 2). Detecting Attempts to Steal Passwords from Memory. Retrieved October 11, 2019.](https://medium.com/threatpunter/detecting-attempts-to-steal-passwords-from-memory-558f16dce4ea)
- [Metcalf, S. (2015, September 25). Mimikatz DCSync Usage, Exploitation, and Detection. Retrieved December 4, 2017.](https://adsecurity.org/?p=1729)
- [Microsoft. (2017, December 1). MS-DRSR Directory Replication Service (DRS) Remote Protocol. Retrieved December 4, 2017.](https://msdn.microsoft.com/library/cc228086.aspx)
- [Microsoft. (2017, December 1). MS-NRPC - Netlogon Remote Protocol. Retrieved December 6, 2017.](https://msdn.microsoft.com/library/cc237008.aspx)
- [Microsoft. (n.d.). IDL_DRSGetNCChanges (Opnum 3). Retrieved December 4, 2017.](https://msdn.microsoft.com/library/dd207691.aspx)
- [Microsoft. (n.d.). MS-SAMR Security Account Manager (SAM) Remote Protocol (Client-to-Server) - Transport. Retrieved December 4, 2017.](https://msdn.microsoft.com/library/cc245496.aspx)
- [PowerSploit. (n.d.). Retrieved December 4, 2014.](https://github.com/mattifestation/PowerSploit)
- [SambaWiki. (n.d.). DRSUAPI. Retrieved December 4, 2017.](https://wiki.samba.org/index.php/DRSUAPI)
- [Schroeder, W. (2015, September 22). Mimikatz and DCSync and ExtraSids, Oh My. Retrieved December 4, 2017.](http://www.harmj0y.net/blog/redteaming/mimikatz-and-dcsync-and-extrasids-oh-my/)

[^fn10]: [Tim Wadhwa-Brown. (2018, November). Where 2 worlds collide Bringing Mimikatz et al to UNIX. Retrieved October 13, 2021.](https://labs.portcullis.co.uk/download/eu-18-Wadhwa-Brown-Where-2-worlds-collide-Bringing-Mimikatz-et-al-to-UNIX.pdf)