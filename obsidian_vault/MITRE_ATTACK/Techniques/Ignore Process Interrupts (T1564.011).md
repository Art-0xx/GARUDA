---
mitre_data:
  id: T1564.011
  linker_tags:
  - mitre/attack/linker/stealth/ignore_process_interrupts
  name: Ignore Process Interrupts
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Ignore Process Interrupts (`T1564.011`)

Adversaries may evade defensive mechanisms by executing commands that hide from process interrupt signals. Many operating systems use signals to deliver messages to control process behavior. Command interpreters often include specific commands/flags that ignore errors and other hangups, such as when the user of the active session logs off.[^fn1]  These interrupt signals may also be used by defensive tools and/or analysts to pause or terminate specified running processes. 

Adversaries may invoke processes using `nohup`, [PowerShell](https://attack.mitre.org/techniques/T1059/001) `-ErrorAction SilentlyContinue`, or similar commands that may be immune to hangups.[^fn2][^fn3] This may enable malicious commands and malware to continue execution through system events that would otherwise terminate its execution, such as users logging off or the termination of its C2 network connection.

Hiding from process interrupt signals may allow malware to continue execution, but unlike [Trap](https://attack.mitre.org/techniques/T1546/005) this does not establish [Persistence](https://attack.mitre.org/tactics/TA0003) since the process will not be re-invoked once actually terminated.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.011](https://attack.mitre.org/techniques/T1564/011)

[^fn1]: [Linux man-pages. (2023, April 3). signal(7). Retrieved August 30, 2023.](https://man7.org/linux/man-pages/man7/signal.7.html)
[^fn2]: [Meyering, J. (n.d.). nohup(1). Retrieved August 30, 2023.](https://linux.die.net/man/1/nohup)
[^fn3]: [Microsoft. (2023, March 2). $DebugPreference. Retrieved August 30, 2023.](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_preference_variables?view=powershell-7.3#debugpreference)