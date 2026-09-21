---
mitre_data:
  id: T1547.005
  linker_tags:
  - mitre/attack/linker/persistence/security_support_provider
  - mitre/attack/linker/privilege_escalation/security_support_provider
  name: Security Support Provider
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Security Support Provider (`T1547.005`)

Adversaries may abuse security support providers (SSPs) to execute DLLs when the system boots. Windows SSP DLLs are loaded into the Local Security Authority (LSA) process at system start. Once loaded into the LSA, SSP DLLs have access to encrypted and plaintext passwords that are stored in Windows, such as any logged-on user's Domain password or smart card PINs.

The SSP configuration is stored in two Registry keys: <code>HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Security Packages</code> and <code>HKLM\SYSTEM\CurrentControlSet\Control\Lsa\OSConfig\Security Packages</code>. An adversary may modify these Registry keys to add new SSPs, which will be loaded the next time the system boots, or when the AddSecurityPackage Windows API function is called.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Mimikatz|Mimikatz]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.005](https://attack.mitre.org/techniques/T1547/005)
- [Microsoft. (2013, July 31). Configuring Additional LSA Protection. Retrieved June 24, 2015.](https://technet.microsoft.com/en-us/library/dn408187.aspx)

[^fn1]: [Graeber, M. (2014, October). Analysis of Malicious Security Support Provider DLLs. Retrieved March 1, 2017.](http://docplayer.net/20839173-Analysis-of-malicious-security-support-provider-dlls.html)