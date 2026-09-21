---
mitre_data:
  id: T1003.004
  linker_tags:
  - mitre/attack/linker/credential_access/lsa_secrets
  name: LSA Secrets
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# LSA Secrets (`T1003.004`)

Adversaries with SYSTEM access to a host may attempt to access Local Security Authority (LSA) secrets, which can contain a variety of different credential materials, such as credentials for service accounts.[^fn4][^fn3][^fn1] LSA secrets are stored in the registry at <code>HKEY_LOCAL_MACHINE\SECURITY\Policy\Secrets</code>. LSA secrets can also be dumped from memory.[^fn2]

[Reg](https://attack.mitre.org/software/S0075) can be used to extract from the Registry. [Mimikatz](https://attack.mitre.org/software/S0002) can be used to extract secrets from memory.[^fn2]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/Impacket|Impacket]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/gsecdump|gsecdump]]
- [[../Tools/LaZagne|LaZagne]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.004](https://attack.mitre.org/techniques/T1003/004)
- [PowerSploit. (n.d.). Retrieved December 4, 2014.](https://github.com/mattifestation/PowerSploit)

[^fn1]: [Chad Tilbury. (2017, August 8). 1Windows Credentials: Attack, Mitigation, Defense. Retrieved February 21, 2020.](https://www.first.org/resources/papers/conf2017/Windows-Credentials-Attacks-and-Mitigation-Techniques.pdf)
[^fn2]: [Mantvydas Baranauskas. (2019, November 16). Dumping LSA Secrets. Retrieved February 21, 2020.](https://ired.team/offensive-security/credential-access-and-credential-dumping/dumping-lsa-secrets)
[^fn3]: [Microsoft. (2019, February 14). Active Directory administrative tier model. Retrieved February 21, 2020.](https://docs.microsoft.com/en-us/windows-server/identity/securing-privileged-access/securing-privileged-access-reference-material?redirectedfrom=MSDN)
[^fn4]: [Passcape. (n.d.). Windows LSA secrets. Retrieved February 21, 2020.](https://www.passcape.com/index.php?section=docsys&cmd=details&id=23)