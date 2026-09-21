---
mitre_data:
  id: T1552.002
  linker_tags:
  - mitre/attack/linker/credential_access/credentials_in_registry
  name: Credentials in Registry
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Credentials in Registry (`T1552.002`)

Adversaries may search the Registry on compromised systems for insecurely stored credentials. The Windows Registry stores configuration information that can be used by the system or other programs. Adversaries may query the Registry looking for credentials and passwords that have been stored for use by other programs or services. Sometimes these credentials are used for automatic logons.

Example commands to find Registry keys related to password information: [^fn1]

* Local Machine Hive: <code>reg query HKLM /f password /t REG_SZ /s</code>
* Current User Hive: <code>reg query HKCU /f password /t REG_SZ /s</code>


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Reg|Reg]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.002](https://attack.mitre.org/techniques/T1552/002)

[^fn1]: [netbiosX. (2017, April 19). Stored Credentials. Retrieved April 6, 2018.](https://pentestlab.blog/2017/04/19/stored-credentials/)