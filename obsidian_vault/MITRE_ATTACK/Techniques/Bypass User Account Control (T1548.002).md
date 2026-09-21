---
mitre_data:
  id: T1548.002
  linker_tags:
  - mitre/attack/linker/privilege_escalation/bypass_user_account_control
  name: Bypass User Account Control
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Bypass User Account Control (`T1548.002`)

Adversaries may bypass UAC mechanisms to elevate process privileges on system. Windows User Account Control (UAC) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. The impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.[^fn2]

If the UAC protection level of a computer is set to anything but the highest level, certain Windows programs can elevate privileges or execute some elevated [Component Object Model](https://attack.mitre.org/techniques/T1559/001) objects without prompting the user through the UAC notification box.[^fn6][^fn4] An example of this is use of [Rundll32](https://attack.mitre.org/techniques/T1218/011) to load a specifically crafted DLL which loads an auto-elevated [Component Object Model](https://attack.mitre.org/techniques/T1559/001) object and performs a file operation in a protected directory which would typically require elevated access. Malicious software may also be injected into a trusted process to gain elevated privileges without prompting a user.[^fn1]

Many methods have been discovered to bypass UAC. The Github readme page for UACME contains an extensive list of methods[^fn8] that have been discovered and implemented, but may not be a comprehensive list of bypasses. Additional bypass methods are regularly discovered and some used in the wild, such as:

* <code>eventvwr.exe</code> can auto-elevate and execute a specified binary or script.[^fn5][^fn7]

Another bypass is possible through some lateral movement techniques if credentials for an account with administrator privileges are known, since UAC is a single system security mechanism, and the privilege or integrity of a process running on one system will be unknown on remote systems and default to high integrity.[^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Abuse Elevation Control Mechanism (T1548)|Abuse Elevation Control Mechanism]]

# Tool(s)

- [[../Tools/UACMe|UACMe]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1548.002](https://attack.mitre.org/techniques/T1548/002)

[^fn1]: [Davidson, L. (n.d.). Windows 7 UAC whitelist. Retrieved November 12, 2014.](http://www.pretentiousname.com/misc/win7_uac_whitelist2.html)
[^fn2]: [Lich, B. (2016, May 31). How User Account Control Works. Retrieved June 3, 2016.](https://technet.microsoft.com/en-us/itpro/windows/keep-secure/how-user-account-control-works)
[^fn3]: [Medin, T. (2013, August 8). PsExec UAC Bypass. Retrieved June 3, 2016.](http://pen-testing.sans.org/blog/pen-testing/2013/08/08/psexec-uac-bypass)
[^fn4]: [Microsoft. (n.d.). The COM Elevation Moniker. Retrieved July 26, 2016.](https://msdn.microsoft.com/en-us/library/ms679687.aspx)
[^fn5]: [Nelson, M. (2016, August 15). "Fileless" UAC Bypass using eventvwr.exe and Registry Hijacking. Retrieved December 27, 2016.](https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/)
[^fn6]: [Russinovich, M. (2009, July). User Account Control: Inside Windows 7 User Account Control. Retrieved July 26, 2016.](https://technet.microsoft.com/en-US/magazine/2009.07.uac.aspx)
[^fn7]: [Salvio, J., Joven, R. (2016, December 16). Malicious Macro Bypasses UAC to Elevate Privilege for Fareit Malware. Retrieved December 27, 2016.](https://blog.fortinet.com/2016/12/16/malicious-macro-bypasses-uac-to-elevate-privilege-for-fareit-malware)
[^fn8]: [UACME Project. (2016, June 16). UACMe. Retrieved July 26, 2016.](https://github.com/hfiref0x/UACME)