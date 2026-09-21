---
mitre_data:
  id: T1547.008
  linker_tags:
  - mitre/attack/linker/persistence/lsass_driver
  - mitre/attack/linker/privilege_escalation/lsass_driver
  name: LSASS Driver
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# LSASS Driver (`T1547.008`)

Adversaries may modify or add LSASS drivers to obtain persistence on compromised systems. The Windows security subsystem is a set of components that manage and enforce the security policy for a computer or domain. The Local Security Authority (LSA) is the main component responsible for local security policy and user authentication. The LSA includes multiple dynamic link libraries (DLLs) associated with various other security functions, all of which run in the context of the LSA Subsystem Service (LSASS) lsass.exe process.[^fn3]

Adversaries may target LSASS drivers to obtain persistence. By either replacing or adding illegitimate drivers (e.g., [Hijack Execution Flow](https://attack.mitre.org/techniques/T1574)), an adversary can use LSA operations to continuously execute malicious payloads.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.008](https://attack.mitre.org/techniques/T1547/008)
- [Microsoft. (2014, March 12). Configuring Additional LSA Protection. Retrieved November 27, 2017.](https://technet.microsoft.com/library/dn408187.aspx)
- [Microsoft. (n.d.). Dynamic-Link Library Security. Retrieved November 27, 2017.](https://msdn.microsoft.com/library/windows/desktop/ff919712.aspx)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn3]: [Microsoft. (n.d.). Security Subsystem Architecture. Retrieved November 27, 2017.](https://technet.microsoft.com/library/cc961760.aspx)