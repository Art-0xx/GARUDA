---
mitre_data:
  id: T1134.005
  linker_tags:
  - mitre/attack/linker/stealth/sid-history_injection
  - mitre/attack/linker/privilege_escalation/sid-history_injection
  name: SID-History Injection
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# SID-History Injection (`T1134.005`)

Adversaries may use SID-History Injection to escalate privileges and bypass access controls. The Windows security identifier (SID) is a unique value that identifies a user or group account. SIDs are used by Windows security in both security descriptors and access tokens. [^fn3] An account can hold additional SIDs in the SID-History Active Directory attribute [^fn2], allowing inter-operable account migration between domains (e.g., all values in SID-History are included in access tokens).

With Domain Administrator (or equivalent) rights, harvested or well-known SID values [^fn1] may be inserted into SID-History to enable impersonation of arbitrary users/groups such as Enterprise Administrators. This manipulation may result in elevated access to local resources and/or access to otherwise inaccessible domains via lateral movement techniques such as [Remote Services](https://attack.mitre.org/techniques/T1021), [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002), or [Windows Remote Management](https://attack.mitre.org/techniques/T1021/006).


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/Mimikatz|Mimikatz]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1134.005](https://attack.mitre.org/techniques/T1134/005)

[^fn1]: [Microsoft. (2017, June 23). Well-known security identifiers in Windows operating systems. Retrieved November 30, 2017.](https://support.microsoft.com/help/243330/well-known-security-identifiers-in-windows-operating-systems)
[^fn2]: [Microsoft. (n.d.). Active Directory Schema - SID-History attribute. Retrieved November 30, 2017.](https://msdn.microsoft.com/library/ms679833.aspx)
[^fn3]: [Microsoft. (n.d.). Security Identifiers. Retrieved November 30, 2017.](https://msdn.microsoft.com/library/windows/desktop/aa379571.aspx)