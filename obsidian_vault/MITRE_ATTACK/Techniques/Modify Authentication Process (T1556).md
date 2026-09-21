---
mitre_data:
  id: T1556
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_authentication_process
  - mitre/attack/linker/persistence/modify_authentication_process
  - mitre/attack/linker/credential_access/modify_authentication_process
  name: Modify Authentication Process
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Modify Authentication Process (`T1556`)

Adversaries may modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts. The authentication process is handled by mechanisms, such as the Local Security Authentication Server (LSASS) process and the Security Accounts Manager (SAM) on Windows, pluggable authentication modules (PAM) on Unix-based systems, and authorization plugins on MacOS systems, responsible for gathering, storing, and validating credentials. By modifying an authentication process, an adversary may be able to authenticate to a service or system without using [Valid Accounts](https://attack.mitre.org/techniques/T1078).

Adversaries may maliciously modify a part of this process to either reveal credentials or bypass authentication mechanisms. Compromised credentials or access may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as VPNs, Outlook Web Access and remote desktop.


# Platform(s)

- IaaS
- Identity Provider
- Linux
- macOS
- Network Devices
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Pluggable Authentication Modules (T1556.003)|Pluggable Authentication Modules]]
- [[../Techniques/Password Filter DLL (T1556.002)|Password Filter DLL]]
- [[../Techniques/Hybrid Identity (T1556.007)|Hybrid Identity]]
- [[../Techniques/Network Provider DLL (T1556.008)|Network Provider DLL]]
- [[../Techniques/Multi-Factor Authentication (T1556.006)|Multi-Factor Authentication]]
- [[../Techniques/Conditional Access Policies (T1556.009)|Conditional Access Policies]]
- [[../Techniques/Domain Controller Authentication (T1556.001)|Domain Controller Authentication]]
- [[../Techniques/Reversible Encryption (T1556.005)|Reversible Encryption]]
- [[../Techniques/Network Device Authentication (T1556.004)|Network Device Authentication]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556](https://attack.mitre.org/techniques/T1556)
