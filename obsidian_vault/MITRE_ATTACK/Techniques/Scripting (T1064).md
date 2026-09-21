---
mitre_data:
  id: T1064
  linker_tags:
  - mitre/attack/linker/stealth/scripting
  - mitre/attack/linker/execution/scripting
  name: Scripting
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Scripting (`T1064`)

**This technique has been deprecated. Please use [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059) where appropriate.**

Adversaries may use scripts to aid in operations and perform multiple actions that would otherwise be manual. Scripting is useful for speeding up operational tasks and reducing the time required to gain access to critical resources. Some scripting languages may be used to bypass process monitoring mechanisms by directly interacting with the operating system at an API level instead of calling other programs. Common scripting languages for Windows include VBScript and [PowerShell](https://attack.mitre.org/techniques/T1086) but could also be in the form of command-line batch scripts.

Scripts can be embedded inside Office documents as macros that can be set to execute when files used in [Spearphishing Attachment](https://attack.mitre.org/techniques/T1193) and other types of spearphishing are opened. Malicious embedded macros are an alternative means of execution than software exploitation through [Exploitation for Client Execution](https://attack.mitre.org/techniques/T1203), where adversaries will rely on macros being allowed or that the user will accept to activate them.

Many popular offensive frameworks exist which use forms of scripting for security testers and adversaries alike. Metasploit [^fn1], Veil [^fn2], and PowerSploit [^fn3] are three examples that are popular among penetration testers for exploit and post-compromise operations and include many features for evading defenses. Some adversaries are known to use PowerShell. [^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1064](https://attack.mitre.org/techniques/T1064)
- [Felix. (2016, September). Analyzing Malicious Office Documents. Retrieved April 11, 2018.](https://www.uperesia.com/analyzing-malicious-office-documents)

[^fn1]: [Metasploit. (n.d.). Retrieved December 4, 2014.](http://www.metasploit.com)
[^fn2]: [Veil Framework. (n.d.). Retrieved December 4, 2014.](https://www.veil-framework.com/framework/)
[^fn3]: [PowerSploit. (n.d.). Retrieved December 4, 2014.](https://github.com/mattifestation/PowerSploit)
[^fn4]: [Alperovitch, D. (2014, July 7). Deep in Thought: Chinese Targeting of National Security Think Tanks. Retrieved November 12, 2014.](https://blog.crowdstrike.com/deep-thought-chinese-targeting-national-security-think-tanks/)