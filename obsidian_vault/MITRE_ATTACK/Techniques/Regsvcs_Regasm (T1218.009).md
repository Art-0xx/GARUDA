---
mitre_data:
  id: T1218.009
  linker_tags:
  - mitre/attack/linker/stealth/regsvcs_regasm
  name: Regsvcs/Regasm
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Regsvcs/Regasm (`T1218.009`)

Adversaries may abuse Regsvcs and Regasm to proxy execution of code through a trusted Windows utility. Regsvcs and Regasm are Windows command-line utilities that are used to register .NET [Component Object Model](https://attack.mitre.org/techniques/T1559/001) (COM) assemblies. Both are binaries that may be digitally signed by Microsoft. [^fn4] [^fn3]

Both utilities may be used to bypass application control through use of attributes within the binary to specify code that should be run before registration or unregistration: <code>[ComRegisterFunction]</code> or <code>[ComUnregisterFunction]</code> respectively. The code with the registration and unregistration attributes will be executed even if the process is run under insufficient privileges and fails to execute. [^fn2][^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.009](https://attack.mitre.org/techniques/T1218/009)

[^fn1]: [LOLBAS. (n.d.). Regasm.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Regasm/)
[^fn2]: [LOLBAS. (n.d.). Regsvcs.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Regsvcs/)
[^fn3]: [Microsoft. (n.d.). Regasm.exe (Assembly Registration Tool). Retrieved July 1, 2016.](https://msdn.microsoft.com/en-us/library/tzat5yw6.aspx)
[^fn4]: [Microsoft. (n.d.). Regsvcs.exe (.NET Services Installation Tool). Retrieved July 1, 2016.](https://msdn.microsoft.com/en-us/library/04za0hca.aspx)