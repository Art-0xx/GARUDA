---
mitre_data:
  id: T1059.004
  linker_tags:
  - mitre/attack/linker/execution/unix_shell
  name: Unix Shell
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Unix Shell (`T1059.004`)

Adversaries may abuse Unix shell commands and scripts for execution. Unix shells are the primary command prompt on Linux, macOS, and ESXi systems, though many variations of the Unix shell exist (e.g. sh, ash, bash, zsh, etc.) depending on the specific OS or distribution.[^fn2][^fn1] Unix shells can control every aspect of a system, with certain commands requiring elevated privileges.

Unix shells also support scripts that enable sequential execution of commands as well as other typical programming operations such as conditionals and loops. Common uses of shell scripts include long or repetitive tasks, or the need to run the same set of commands on multiple systems.

Adversaries may abuse Unix shells to execute various commands or payloads. Interactive shells may be accessed through command and control channels or during lateral movement such as with [SSH](https://attack.mitre.org/techniques/T1021/004). Adversaries may also leverage shell scripts to deliver and execute multiple commands on victims or as part of payloads used for persistence.

Some systems, such as embedded devices, lightweight Linux distributions, and ESXi servers, may leverage stripped-down Unix shells via Busybox, a small executable that contains a variety of tools, including a simple shell.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.004](https://attack.mitre.org/techniques/T1059/004)

[^fn1]: [Apple. (2020, January 28). Use zsh as the default shell on your Mac. Retrieved June 12, 2020.](https://support.apple.com/HT208050)
[^fn2]: [die.net. (n.d.). bash(1) - Linux man page. Retrieved June 12, 2020.](https://linux.die.net/man/1/bash)