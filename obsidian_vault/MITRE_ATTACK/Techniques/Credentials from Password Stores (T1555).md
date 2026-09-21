---
mitre_data:
  id: T1555
  linker_tags:
  - mitre/attack/linker/credential_access/credentials_from_password_stores
  name: Credentials from Password Stores
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Credentials from Password Stores (`T1555`)

Adversaries may search for common password storage locations to obtain user credentials.[^fn1] Passwords are stored in several places on a system, depending on the operating system or application holding the credentials. There are also specific applications and services that store passwords to make them easier for users to manage and maintain, such as password managers and cloud secrets vaults. Once credentials are obtained, they can be used to perform lateral movement and access restricted information.


# Platform(s)

- IaaS
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Securityd Memory (T1555.002)|Securityd Memory]]
- [[../Techniques/Keychain (T1555.001)|Keychain]]
- [[../Techniques/Password Managers (T1555.005)|Password Managers]]
- [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]
- [[../Techniques/Cloud Secrets Management Stores (T1555.006)|Cloud Secrets Management Stores]]
- [[../Techniques/Windows Credential Manager (T1555.004)|Windows Credential Manager]]

# Tool(s)

- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/LaZagne|LaZagne]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1555](https://attack.mitre.org/techniques/T1555)

[^fn1]: [F-Secure Labs. (2015, September 17). The Dukes: 7 years of Russian cyberespionage. Retrieved December 10, 2015.](https://www.f-secure.com/documents/996508/1030745/dukes_whitepaper.pdf)