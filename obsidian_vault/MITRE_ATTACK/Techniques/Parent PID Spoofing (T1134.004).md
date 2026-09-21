---
mitre_data:
  id: T1134.004
  linker_tags:
  - mitre/attack/linker/stealth/parent_pid_spoofing
  - mitre/attack/linker/privilege_escalation/parent_pid_spoofing
  name: Parent PID Spoofing
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Parent PID Spoofing (`T1134.004`)

Adversaries may spoof the parent process identifier (PPID) of a new process to evade process-monitoring defenses or to elevate privileges. New processes are typically spawned directly from their parent, or calling, process unless explicitly specified. One way of explicitly assigning the PPID of a new process is via the <code>CreateProcess</code> API call, which supports a parameter that defines the PPID to use.[^fn4] This functionality is used by Windows features such as User Account Control (UAC) to correctly set the PPID after a requested elevated process is spawned by SYSTEM (typically via <code>svchost.exe</code> or <code>consent.exe</code>) rather than the current user context.[^fn3]

Adversaries may abuse these mechanisms to evade defenses, such as those blocking processes spawning directly from Office documents, and analysis targeting unusual/potentially malicious parent-child process relationships, such as spoofing the PPID of [PowerShell](https://attack.mitre.org/techniques/T1059/001)/[Rundll32](https://attack.mitre.org/techniques/T1218/011) to be <code>explorer.exe</code> rather than an Office document delivered as part of [Spearphishing Attachment](https://attack.mitre.org/techniques/T1566/001).[^fn2] This spoofing could be executed via [Visual Basic](https://attack.mitre.org/techniques/T1059/005) within a malicious Office document or any code that can perform [Native API](https://attack.mitre.org/techniques/T1106).[^fn5][^fn2]

Explicitly assigning the PPID may also enable elevated privileges given appropriate access rights to the parent process. For example, an adversary in a privileged user context (i.e. administrator) may spawn a new process and assign the parent as a process running as SYSTEM (such as <code>lsass.exe</code>), causing the new process to be elevated via the inherited access token.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1134.004](https://attack.mitre.org/techniques/T1134/004)

[^fn1]: [Chester, A. (2017, November 20). Alternative methods of becoming SYSTEM. Retrieved June 4, 2019.](https://blog.xpnsec.com/becoming-system/)
[^fn2]: [Loh, I. (2018, December 21). Detecting Parent PID Spoofing. Retrieved June 3, 2019.](https://web.archive.org/web/20200726110643/https://blog.f-secure.com/detecting-parent-pid-spoofing/)
[^fn3]: [Montemayor, D. et al.. (2018, November 15). How User Account Control works. Retrieved June 3, 2019.](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)
[^fn4]: [Stevens, D. (2009, November 22). Quickpost: SelectMyParent or Playing With the Windows Process Tree. Retrieved June 3, 2019.](https://blog.didierstevens.com/2009/11/22/quickpost-selectmyparent-or-playing-with-the-windows-process-tree/)
[^fn5]: [Tafani-Dereeper, C. (2019, March 12). Building an Office macro to spoof parent processes and command line arguments. Retrieved June 3, 2019.](https://blog.christophetd.fr/building-an-office-macro-to-spoof-process-parent-and-command-line/)