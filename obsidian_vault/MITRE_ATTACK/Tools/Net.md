---
tags:
  - mitre/attack/tool
---

# Net (`S0039`)

The [Net](https://attack.mitre.org/software/S0039) utility is a component of the Windows operating system. It is used in command-line operations for control of users, groups, services, and network connections. [^fn1]

[Net](https://attack.mitre.org/software/S0039) has a great deal of functionality, [^fn2] much of which is useful for an adversary, such as gathering system and network information for Discovery, moving laterally through [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002) using <code>net use</code> commands, and interacting with services. The net1.exe utility is executed for certain functionality when net.exe is run and can be used directly in commands such as <code>net1 user</code>.



# Platform(s)

- Windows

# Techniques Used

## Password Policy Discovery

The <code>net accounts</code> and <code>net accounts /domain</code> commands with [Net](https://attack.mitre.org/software/S0039) can be used to obtain password policy information.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Password Policy Discovery (T1201)|Password Policy Discovery]]

## Domain Groups

Commands such as <code>net group /domain</code> can be used in [Net](https://attack.mitre.org/software/S0039) to gather information about and manipulate groups.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## System Time Discovery

The <code>net time</code> command can be used in [Net](https://attack.mitre.org/software/S0039) to determine the local or remote system time.[\[TechNet Net Time\]](https://technet.microsoft.com/bb490716.aspx)

- *Technique:* [[../Techniques/System Time Discovery (T1124)|System Time Discovery]]

## Domain Account

[Net](https://attack.mitre.org/software/S0039) commands used with the <code>/domain</code> flag can be used to gather information about and manipulate user accounts on the current domain.[\[Microsoft Net\]](https://support.microsoft.com/en-us/help/556003)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Local Account

Commands under <code>net user</code> can be used in [Net](https://attack.mitre.org/software/S0039) to gather information about and manipulate user accounts.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Local Account (T1087.001)|Local Account]]

## System Service Discovery

The <code>net start</code> command can be used in [Net](https://attack.mitre.org/software/S0039) to find information about Windows services.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/System Service Discovery (T1007)|System Service Discovery]]

## Remote System Discovery

Commands such as <code>net view</code> can be used in [Net](https://attack.mitre.org/software/S0039) to gather information about available remote systems.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## Network Share Discovery

The <code>net view \\remotesystem</code> and <code>net share</code> commands in [Net](https://attack.mitre.org/software/S0039) can be used to find shared drives and directories on remote and local systems respectively.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Network Share Discovery (T1135)|Network Share Discovery]]

## System Network Connections Discovery

Commands such as <code>net use</code> and <code>net session</code> can be used in [Net](https://attack.mitre.org/software/S0039) to gather information about network connections from a particular host.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Network Share Connection Removal

The <code>net use \\system\share /delete</code> command can be used in [Net](https://attack.mitre.org/software/S0039) to remove an established connection to a network share.[\[Technet Net Use\]](https://technet.microsoft.com/bb490717.aspx)

- *Technique:* [[../Techniques/Network Share Connection Removal (T1070.005)|Network Share Connection Removal]]

## Service Execution

The <code>net start</code> and <code>net stop</code> commands can be used in [Net](https://attack.mitre.org/software/S0039) to execute or stop Windows services.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Local Account

The <code>net user username \password</code> commands in [Net](https://attack.mitre.org/software/S0039) can be used to create a local account.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Local Account (T1136.001)|Local Account]]

## Additional Local or Domain Groups

The `net localgroup` and `net group` commands in [Net](https://attack.mitre.org/software/S0039) can be used to add existing users to local and domain groups.[\[Microsoft Net Localgroup\]](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc725622(v=ws.11)) [\[Microsoft Net Group\]](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc754051(v=ws.11))

- *Technique:* [[../Techniques/Additional Local or Domain Groups (T1098.007)|Additional Local or Domain Groups]]

## Local Groups

Commands such as <code>net group</code> and <code>net localgroup</code> can be used in [Net](https://attack.mitre.org/software/S0039) to gather information about and manipulate groups.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Local Groups (T1069.001)|Local Groups]]

## SMB/Windows Admin Shares

Lateral movement can be done with [Net](https://attack.mitre.org/software/S0039) through <code>net use</code> commands to connect to the on remote systems.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/SMB_Windows Admin Shares (T1021.002)|SMB/Windows Admin Shares]]

## Domain Account

The <code>net user username \password \domain</code> commands in [Net](https://attack.mitre.org/software/S0039) can be used to create a domain account.[\[Savill 1999\]](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)

- *Technique:* [[../Techniques/Domain Account (T1136.002)|Domain Account]]


# External References(s)

- [S0039](https://attack.mitre.org/software/S0039)

[^fn1]: [Microsoft. (2006, October 18). Net.exe Utility. Retrieved September 22, 2015.](https://msdn.microsoft.com/en-us/library/aa939914)
[^fn2]: [Savill, J. (1999, March 4). Net.exe reference. Retrieved September 22, 2015.](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)