---
mitre_data:
  id: T1061
  linker_tags:
  - mitre/attack/linker/execution/graphical_user_interface
  name: Graphical User Interface
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Graphical User Interface (`T1061`)

**This technique has been deprecated. Please use [Remote Services](https://attack.mitre.org/techniques/T1021) where appropriate.**

The Graphical User Interfaces (GUI) is a common way to interact with an operating system. Adversaries may use a system's GUI during an operation, commonly through a remote interactive session such as [Remote Desktop Protocol](https://attack.mitre.org/techniques/T1076), instead of through a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059), to search for information and execute files via mouse double-click events, the Windows Run command [^fn1], or other potentially difficult to monitor interactions.


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1061](https://attack.mitre.org/techniques/T1061)

[^fn1]: [Wikipedia. (2018, August 3). Run Command. Retrieved October 12, 2018.](https://en.wikipedia.org/wiki/Run_command)