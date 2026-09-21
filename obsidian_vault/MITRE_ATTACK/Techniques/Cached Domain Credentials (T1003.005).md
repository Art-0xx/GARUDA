---
mitre_data:
  id: T1003.005
  linker_tags:
  - mitre/attack/linker/credential_access/cached_domain_credentials
  name: Cached Domain Credentials
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Cached Domain Credentials (`T1003.005`)

Adversaries may attempt to access cached domain credentials used to allow authentication to occur in the event a domain controller is unavailable.[^fn3]

On Windows Vista and newer, the hash format is DCC2 (Domain Cached Credentials version 2) hash, also known as MS-Cache v2 hash.[^fn1] The number of default cached credentials varies and can be altered per system. This hash does not allow pass-the-hash style attacks, and instead requires [Password Cracking](https://attack.mitre.org/techniques/T1110/002) to recover the plaintext password.[^fn2]

On Linux systems, Active Directory credentials can be accessed through caches maintained by software like System Security Services Daemon (SSSD) or Quest Authentication Services (formerly VAS). Cached credential hashes are typically located at `/var/lib/sss/db/cache.[domain].ldb` for SSSD or `/var/opt/quest/vas/authcache/vas_auth.vdb` for Quest. Adversaries can use utilities, such as `tdbdump`, on these database files to dump the cached hashes and use [Password Cracking](https://attack.mitre.org/techniques/T1110/002) to obtain the plaintext password.[^fn5] 

With SYSTEM or sudo access, the tools/utilities such as [Mimikatz](https://attack.mitre.org/software/S0002), [Reg](https://attack.mitre.org/software/S0075), and secretsdump.py for Windows or Linikatz for Linux can be used to extract the cached credentials.[^fn5]

Note: Cached credentials for Windows Vista are derived using PBKDF2.[^fn1]


# Platform(s)

- Windows
- Linux

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/LaZagne|LaZagne]]
- [[../Tools/Cachedump|Cachedump]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.005](https://attack.mitre.org/techniques/T1003/005)
- [PowerSploit. (n.d.). Retrieved December 4, 2014.](https://github.com/mattifestation/PowerSploit)

[^fn1]: [Eli Collins. (2016, November 25). Windows' Domain Cached Credentials v2. Retrieved February 21, 2020.](https://passlib.readthedocs.io/en/stable/lib/passlib.hash.msdcc2.html)
[^fn2]: [Mantvydas Baranauskas. (2019, November 16). Dumping and Cracking mscash - Cached Domain Credentials. Retrieved February 21, 2020.](https://ired.team/offensive-security/credential-access-and-credential-dumping/dumping-and-cracking-mscash-cached-domain-credentials)
[^fn3]: [Microsoft. (2016, August 21). Cached and Stored Credentials Technical Overview. Retrieved February 21, 2020.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh994565(v%3Dws.11))
[^fn5]: [Tim Wadhwa-Brown. (2018, November). Where 2 worlds collide Bringing Mimikatz et al to UNIX. Retrieved October 13, 2021.](https://labs.portcullis.co.uk/download/eu-18-Wadhwa-Brown-Where-2-worlds-collide-Bringing-Mimikatz-et-al-to-UNIX.pdf)