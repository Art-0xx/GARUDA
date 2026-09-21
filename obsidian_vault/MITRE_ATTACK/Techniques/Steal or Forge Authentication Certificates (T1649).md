---
mitre_data:
  id: T1649
  linker_tags:
  - mitre/attack/linker/credential_access/steal_or_forge_authentication_certificates
  name: Steal or Forge Authentication Certificates
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Steal or Forge Authentication Certificates (`T1649`)

Adversaries may steal or forge certificates used for authentication to access remote systems or resources. Digital certificates are often used to sign and encrypt messages and/or files. Certificates are also used as authentication material. For example, Entra ID device certificates and Active Directory Certificate Services (AD CS) certificates bind to an identity and can be used as credentials for domain accounts.[^fn5][^fn2]

Authentication certificates can be both stolen and forged. For example, AD CS certificates can be stolen from encrypted storage (in the Registry or files)[^fn7], misplaced certificate files (i.e. [Unsecured Credentials](https://attack.mitre.org/techniques/T1552)), or directly from the Windows certificate store via various crypto APIs.[^fn4][^fn6][^fn1] With appropriate enrollment rights, users and/or machines within a domain can also request and/or manually renew certificates from enterprise certificate authorities (CA). This enrollment process defines various settings and permissions associated with the certificate. Of note, the certificate’s extended key usage (EKU) values define signing, encryption, and authentication use cases, while the certificate’s subject alternative name (SAN) values define the certificate owner’s alternate names.[^fn3]

Abusing certificates for authentication credentials may enable other behaviors such as [Lateral Movement](https://attack.mitre.org/tactics/TA0008). Certificate-related misconfigurations may also enable opportunities for [Privilege Escalation](https://attack.mitre.org/tactics/TA0004), by way of allowing users to impersonate or assume privileged accounts or permissions via the identities (SANs) associated with a certificate. These abuses may also enable [Persistence](https://attack.mitre.org/tactics/TA0003) via stealing or forging certificates that can be used as [Valid Accounts](https://attack.mitre.org/techniques/T1078) for the duration of the certificate's validity, despite user password resets. Authentication certificates can also be stolen and forged for machine accounts.

Adversaries who have access to root (or subordinate) CA certificate private keys (or mechanisms protecting/managing these keys) may also establish [Persistence](https://attack.mitre.org/tactics/TA0003) by forging arbitrary authentication certificates for the victim domain (known as “golden” certificates).[^fn3] Adversaries may also target certificates and related services in order to access other forms of credentials, such as [Golden Ticket](https://attack.mitre.org/techniques/T1558/001) ticket-granting tickets (TGT) or NTLM plaintext.[^fn3]


# Platform(s)

- Windows
- Linux
- macOS
- Identity Provider

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/Mimikatz|Mimikatz]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1649](https://attack.mitre.org/techniques/T1649)

[^fn1]: [HarmJ0y. (2018, August 22). SharpDPAPI - Certificates. Retrieved August 2, 2022.](https://github.com/GhostPack/SharpDPAPI#certificates)
[^fn2]: [Microsoft. (2016, August 31). Active Directory Certificate Services Overview. Retrieved August 2, 2022.](https://docs.microsoft.com/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh831740(v=ws.11))
[^fn3]: [Schroeder, W. (2021, June 17). Certified Pre-Owned. Retrieved August 2, 2022.](https://posts.specterops.io/certified-pre-owned-d95910965cd2)
[^fn4]: [Schroeder, W. & Christensen, L. (2021, June 22). Certified Pre-Owned - Abusing Active Directory Certificate Services. Retrieved August 2, 2022.](https://web.archive.org/web/20220818094600/https://specterops.io/assets/resources/Certified_Pre-Owned.pdf)
[^fn5]: [Syynimaa, N. (2022, February 15). Stealing and faking Azure AD device identities. Retrieved August 3, 2022.](https://o365blog.com/post/deviceidentity/)
[^fn6]: [TheWover. (2021, April 21). CertStealer. Retrieved August 2, 2022.](https://github.com/TheWover/CertStealer)
[^fn7]: [Thibault Van Geluwe De Berlaere. (2022, November 8). They See Me Roaming: Following APT29 by Taking a Deeper Look at Windows Credential Roaming. Retrieved November 9, 2022.](https://www.mandiant.com/resources/blog/apt29-windows-credential-roaming)