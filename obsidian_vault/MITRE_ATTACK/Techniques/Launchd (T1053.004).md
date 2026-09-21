---
mitre_data:
  id: T1053.004
  linker_tags:
  - mitre/attack/linker/execution/launchd
  - mitre/attack/linker/persistence/launchd
  - mitre/attack/linker/privilege_escalation/launchd
  name: Launchd
  related_tactics:
  - execution
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Launchd (`T1053.004`)

This technique is deprecated due to the inaccurate usage. The report cited did not provide technical detail as to how the malware interacted directly with launchd rather than going through known services. Other system services are used to interact with launchd rather than launchd being used by itself. 

Adversaries may abuse the <code>Launchd</code> daemon to perform task scheduling for initial or recurring execution of malicious code. The <code>launchd</code> daemon, native to macOS, is responsible for loading and maintaining services within the operating system. This process loads the parameters for each launch-on-demand system-level daemon from the property list (plist) files found in <code>/System/Library/LaunchDaemons</code> and <code>/Library/LaunchDaemons</code> [^fn1]. These LaunchDaemons have property list files which point to the executables that will be launched [^fn2].

An adversary may use the <code>launchd</code> daemon in macOS environments to schedule new executables to run at system startup or on a scheduled basis for persistence. <code>launchd</code> can also be abused to run a process under the context of a specified account. Daemons, such as <code>launchd</code>, run with the permissions of the root user account, and will operate regardless of which user account is logged in.


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Scheduled Task_Job (T1053)|Scheduled Task/Job]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1053.004](https://attack.mitre.org/techniques/T1053/004)

[^fn1]: [Apple. (n.d.). Creating Launch Daemons and Agents. Retrieved July 10, 2017.](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)
[^fn2]: [Patrick Wardle. (2014, September). Methods of Malware Persistence on Mac OS X. Retrieved July 5, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)