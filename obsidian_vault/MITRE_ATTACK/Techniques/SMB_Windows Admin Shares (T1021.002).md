---
mitre_data:
  id: T1021.002
  linker_tags:
  - mitre/attack/linker/lateral_movement/smb_windows_admin_shares
  name: SMB/Windows Admin Shares
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# SMB/Windows Admin Shares (`T1021.002`)

Adversaries may use [Valid Accounts](https://attack.mitre.org/techniques/T1078) to interact with a remote network share using Server Message Block (SMB). The adversary may then perform actions as the logged-on user.

SMB is a file, printer, and serial port sharing protocol for Windows machines on the same network or domain. Adversaries may use SMB to interact with file shares, allowing them to move laterally throughout a network. Linux and macOS implementations of SMB typically use Samba.

Windows systems have hidden network shares that are accessible only to administrators and provide the ability for remote file copy and other administrative functions. Example network shares include `C$`, `ADMIN$`, and `IPC$`. Adversaries may use this technique in conjunction with administrator-level [Valid Accounts](https://attack.mitre.org/techniques/T1078) to remotely access a networked system over SMB,[^fn6] to interact with systems using remote procedure calls (RPCs),[^fn2] transfer files, and run transferred binaries through remote Execution. Example execution techniques that rely on authenticated sessions over SMB/RPC are [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053), [Service Execution](https://attack.mitre.org/techniques/T1569/002), and [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047). Adversaries can also use NTLM hashes to access administrator shares on systems with [Pass the Hash](https://attack.mitre.org/techniques/T1550/002) and certain configuration and patch levels.[^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Remote Services (T1021)|Remote Services]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/PsExec|PsExec]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021.002](https://attack.mitre.org/techniques/T1021/002)
- [French, D. (2018, October 9). Detecting & Removing an Attacker’s WMI Persistence. Retrieved October 11, 2019.](https://medium.com/threatpunter/detecting-removing-wmi-persistence-60ccbb7dff96)
- [Payne, J. (2015, November 23). Monitoring what matters - Windows Event Forwarding for everyone (even if you already have a SIEM.). Retrieved February 1, 2016.](https://docs.microsoft.com/en-us/archive/blogs/jepayne/monitoring-what-matters-windows-event-forwarding-for-everyone-even-if-you-already-have-a-siem)
- [Payne, J. (2015, November 26). Tracking Lateral Movement Part One - Special Groups and Specific Service Accounts. Retrieved February 1, 2016.](https://docs.microsoft.com/en-us/archive/blogs/jepayne/tracking-lateral-movement-part-one-special-groups-and-specific-service-accounts)

[^fn2]: [Microsoft. (2003, March 28). What Is RPC?. Retrieved June 12, 2016.](https://technet.microsoft.com/en-us/library/cc787851.aspx)
[^fn3]: [Microsoft. (n.d.). How to create and delete hidden or administrative shares on client computers. Retrieved November 20, 2014.](http://support.microsoft.com/kb/314984)
[^fn6]: [Wikipedia. (2017, December 16). Server Message Block. Retrieved December 21, 2017.](https://en.wikipedia.org/wiki/Server_Message_Block)