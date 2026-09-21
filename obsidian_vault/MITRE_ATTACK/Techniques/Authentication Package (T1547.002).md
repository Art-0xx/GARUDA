---
mitre_data:
  id: T1547.002
  linker_tags:
  - mitre/attack/linker/persistence/authentication_package
  - mitre/attack/linker/privilege_escalation/authentication_package
  name: Authentication Package
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Authentication Package (`T1547.002`)

Adversaries may abuse authentication packages to execute DLLs when the system boots. Windows authentication package DLLs are loaded by the Local Security Authority (LSA) process at system start. They provide support for multiple logon processes and multiple security protocols to the operating system.[^fn3]

Adversaries can use the autostart mechanism provided by LSA authentication packages for persistence by placing a reference to a binary in the Windows Registry location <code>HKLM\SYSTEM\CurrentControlSet\Control\Lsa\</code> with the key value of <code>"Authentication Packages"=&lt;target binary&gt;</code>. The binary will then be executed by the system when the authentication packages are loaded.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.002](https://attack.mitre.org/techniques/T1547/002)
- [Graeber, M. (2014, October). Analysis of Malicious Security Support Provider DLLs. Retrieved March 1, 2017.](http://docplayer.net/20839173-Analysis-of-malicious-security-support-provider-dlls.html)
- [Microsoft. (2013, July 31). Configuring Additional LSA Protection. Retrieved June 24, 2015.](https://technet.microsoft.com/en-us/library/dn408187.aspx)

[^fn3]: [Microsoft. (n.d.). Authentication Packages. Retrieved March 1, 2017.](https://msdn.microsoft.com/library/windows/desktop/aa374733.aspx)