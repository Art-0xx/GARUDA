---
mitre_data:
  id: T1559.001
  linker_tags:
  - mitre/attack/linker/execution/component_object_model
  name: Component Object Model
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Component Object Model (`T1559.001`)

Adversaries may use the Windows Component Object Model (COM) for local code execution. COM is an inter-process communication (IPC) component of the native Windows application programming interface (API) that enables interaction between software objects, or executable code that implements one or more interfaces.[^fn2] Through COM, a client object can call methods of server objects, which are typically binary Dynamic Link Libraries (DLL) or executables (EXE).[^fn3] Remote COM execution is facilitated by [Remote Services](https://attack.mitre.org/techniques/T1021) such as  [Distributed Component Object Model](https://attack.mitre.org/techniques/T1021/003) (DCOM).[^fn2]

Various COM interfaces are exposed that can be abused to invoke arbitrary execution via a variety of programming languages such as C, C++, Java, and [Visual Basic](https://attack.mitre.org/techniques/T1059/005).[^fn3] Specific COM objects also exist to directly perform functions beyond code execution, such as creating a [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053), fileless download/execution, and other adversary behaviors related to privilege escalation and persistence.[^fn2][^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Inter-Process Communication (T1559)|Inter-Process Communication]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1559.001](https://attack.mitre.org/techniques/T1559/001)
- [Nelson, M. (2017, January 5). Lateral Movement using the MMC20 Application COM Object. Retrieved November 21, 2017.](https://enigma0x3.net/2017/01/05/lateral-movement-using-the-mmc20-application-com-object/)
- [Nelson, M. (2017, November 16). Lateral Movement using Outlook's CreateObject Method and DotNetToJScript. Retrieved November 21, 2017.](https://enigma0x3.net/2017/11/16/lateral-movement-using-outlooks-createobject-method-and-dotnettojscript/)

[^fn1]: [Forshaw, J. (2018, April 18). Windows Exploitation Tricks: Exploiting Arbitrary File Writes for Local Elevation of Privilege. Retrieved May 3, 2018.](https://googleprojectzero.blogspot.com/2018/04/windows-exploitation-tricks-exploiting.html)
[^fn2]: [Hamilton, C. (2019, June 4). Hunting COM Objects. Retrieved June 10, 2019.](https://www.fireeye.com/blog/threat-research/2019/06/hunting-com-objects.html)
[^fn3]: [Microsoft. (n.d.). Component Object Model (COM). Retrieved November 22, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms680573.aspx)