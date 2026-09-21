---
tags:
  - mitre/attack/tool
---

# Covenant (`S1155`)

[Covenant](https://attack.mitre.org/software/S1155) is a multi-platform command and control framework written in .NET. While designed for penetration testing and security research, the tool has also been used by threat actors such as [HAFNIUM](https://attack.mitre.org/groups/G0125) during operations. [Covenant](https://attack.mitre.org/software/S1155) functions through a central listener managing multiple deployed "Grunts" that communicate back to the controller.[^fn1][^fn2]



# Platform(s)

- Linux
- macOS
- Windows

# Techniques Used

## PowerShell

[Covenant](https://attack.mitre.org/software/S1155) can create PowerShell-based launchers for Grunt installation.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Non-Standard Port

[Covenant](https://attack.mitre.org/software/S1155) listeners and controllers can be configured to use non-standard ports.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Non-Standard Port (T1571)|Non-Standard Port]]

## Windows Management Instrumentation

[Covenant](https://attack.mitre.org/software/S1155) can utilize WMI to install new Grunt listeners through XSL files or command one-liners.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Regsvr32

[Covenant](https://attack.mitre.org/software/S1155) can create SCT files for installation via `Regsvr32` to deploy new Grunt listeners.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Regsvr32 (T1218.010)|Regsvr32]]

## InstallUtil

[Covenant](https://attack.mitre.org/software/S1155) can create launchers via an InstallUtil XML file to install new Grunt listeners.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/InstallUtil (T1218.004)|InstallUtil]]

## System Information Discovery

[Covenant](https://attack.mitre.org/software/S1155) implants can gather basic information on infected systems.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Windows Command Shell

[Covenant](https://attack.mitre.org/software/S1155) provides access to a Command Shell in Windows environments for follow-on command execution and tasking.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Web Protocols

[Covenant](https://attack.mitre.org/software/S1155) can establish command and control via HTTP.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Mshta

[Covenant](https://attack.mitre.org/software/S1155) can create HTA files to install Grunt listeners.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Mshta (T1218.005)|Mshta]]

## Asymmetric Cryptography

[Covenant](https://attack.mitre.org/software/S1155) can utilize SSL to encrypt command and control traffic.[\[Github Covenant\]](https://github.com/cobbr/Covenant)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]


# External References(s)

- [S1155](https://attack.mitre.org/software/S1155)

[^fn1]: [cobbr. (2021, April 21). Covenant. Retrieved September 4, 2024.](https://github.com/cobbr/Covenant)
[^fn2]: [MSTIC. (2021, March 2). HAFNIUM targeting Exchange Servers with 0-day exploits. Retrieved March 3, 2021.](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)