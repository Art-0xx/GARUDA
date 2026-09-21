---
mitre_data:
  id: T1021.003
  linker_tags:
  - mitre/attack/linker/lateral_movement/distributed_component_object_model
  name: Distributed Component Object Model
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Distributed Component Object Model (`T1021.003`)

Adversaries may use [Valid Accounts](https://attack.mitre.org/techniques/T1078) to interact with remote machines by taking advantage of Distributed Component Object Model (DCOM). The adversary may then perform actions as the logged-on user.

The Windows Component Object Model (COM) is a component of the native Windows application programming interface (API) that enables interaction between software objects, or executable code that implements one or more interfaces. Through COM, a client object can call methods of server objects, which are typically Dynamic Link Libraries (DLL) or executables (EXE). Distributed COM (DCOM) is transparent middleware that extends the functionality of COM beyond a local computer using remote procedure call (RPC) technology.[^fn1][^fn2]

Permissions to interact with local and remote server COM objects are specified by access control lists (ACL) in the Registry.[^fn4] By default, only Administrators may remotely activate and launch COM objects through DCOM.[^fn3]

Through DCOM, adversaries operating in the context of an appropriately privileged user can remotely obtain arbitrary and even direct shellcode execution through Office applications[^fn8] as well as other Windows objects that contain insecure methods.[^fn7][^fn6] DCOM can also execute macros in existing documents[^fn9] and may also invoke [Dynamic Data Exchange](https://attack.mitre.org/techniques/T1559/002) (DDE) execution directly through a COM created instance of a Microsoft Office application[^fn10], bypassing the need for a malicious document. DCOM can be used as a method of remotely interacting with [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047). [^fn5]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Remote Services (T1021)|Remote Services]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021.003](https://attack.mitre.org/techniques/T1021/003)

[^fn1]: [Hamilton, C. (2019, June 4). Hunting COM Objects. Retrieved June 10, 2019.](https://www.fireeye.com/blog/threat-research/2019/06/hunting-com-objects.html)
[^fn2]: [Microsoft. (n.d.). Component Object Model (COM). Retrieved November 22, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms680573.aspx)
[^fn3]: [Microsoft. (n.d.). DCOM Security Enhancements in Windows XP Service Pack 2 and Windows Server 2003 Service Pack 1. Retrieved November 22, 2017.](https://docs.microsoft.com/en-us/windows/desktop/com/dcom-security-enhancements-in-windows-xp-service-pack-2-and-windows-server-2003-service-pack-1)
[^fn4]: [Microsoft. (n.d.). Setting Process-Wide Security Through the Registry. Retrieved November 21, 2017.](https://msdn.microsoft.com/en-us/library/windows/desktop/ms687317(v=vs.85).aspx)
[^fn5]: [Microsoft. (n.d.). Windows Management Instrumentation. Retrieved April 27, 2016.](https://msdn.microsoft.com/en-us/library/aa394582.aspx)
[^fn6]: [Nelson, M. (2017, January 23). Lateral Movement via DCOM: Round 2. Retrieved November 21, 2017.](https://enigma0x3.net/2017/01/23/lateral-movement-via-dcom-round-2/)
[^fn7]: [Nelson, M. (2017, January 5). Lateral Movement using the MMC20 Application COM Object. Retrieved November 21, 2017.](https://enigma0x3.net/2017/01/05/lateral-movement-using-the-mmc20-application-com-object/)
[^fn8]: [Nelson, M. (2017, November 16). Lateral Movement using Outlook's CreateObject Method and DotNetToJScript. Retrieved November 21, 2017.](https://enigma0x3.net/2017/11/16/lateral-movement-using-outlooks-createobject-method-and-dotnettojscript/)
[^fn9]: [Nelson, M. (2017, September 11). Lateral Movement using Excel.Application and DCOM. Retrieved November 21, 2017.](https://enigma0x3.net/2017/09/11/lateral-movement-using-excel-application-and-dcom/)
[^fn10]: [Tsukerman, P. (2017, November 8). Leveraging Excel DDE for lateral movement via DCOM. Retrieved November 21, 2017.](https://www.cybereason.com/blog/leveraging-excel-dde-for-lateral-movement-via-dcom)