---
mitre_data:
  id: T1574.009
  linker_tags:
  - mitre/attack/linker/stealth/path_interception_by_unquoted_path
  - mitre/attack/linker/execution/path_interception_by_unquoted_path
  name: Path Interception by Unquoted Path
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Path Interception by Unquoted Path (`T1574.009`)

Adversaries may execute their own malicious payloads by hijacking vulnerable file path references. Adversaries can take advantage of paths that lack surrounding quotations by placing an executable in a higher level directory within the path, so that Windows will choose the adversary's executable to launch.

Service paths [^fn4] and shortcut paths may also be vulnerable to path interception if the path has one or more spaces and is not surrounded by quotation marks (e.g., <code>C:\unsafe path with space\program.exe</code> vs. <code>"C:\safe path with space\program.exe"</code>). [^fn3] (stored in Windows Registry keys) An adversary can place an executable in a higher level directory of the path, and Windows will resolve that executable instead of the intended executable. For example, if the path in a shortcut is <code>C:\program files\myapp.exe</code>, an adversary may create a program at <code>C:\program.exe</code> that will be run instead of the intended program. [^fn2] [^fn1]

This technique can be used for persistence if executables are called on a regular basis, as well as privilege escalation if intercepted executables are started by a higher privileged process.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.009](https://attack.mitre.org/techniques/T1574/009)

[^fn1]: [absolomb. (2018, January 26). Windows Privilege Escalation Guide. Retrieved August 10, 2018.](https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/)
[^fn2]: [HackHappy. (2018, April 23). Windows Privilege Escalation – Unquoted Services. Retrieved August 10, 2018.](https://securityboulevard.com/2018/04/windows-privilege-escalation-unquoted-services/)
[^fn3]: [Mark Baggett. (2012, November 8). Help eliminate unquoted path vulnerabilities. Retrieved November 8, 2012.](https://isc.sans.edu/diary/Help+eliminate+unquoted+path+vulnerabilities/14464)
[^fn4]: [Microsoft. (2017, April 20). HKLM\SYSTEM\CurrentControlSet\Services Registry Tree. Retrieved March 16, 2020.](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/hklm-system-currentcontrolset-services-registry-tree)