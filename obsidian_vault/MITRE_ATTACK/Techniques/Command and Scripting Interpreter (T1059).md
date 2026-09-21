---
mitre_data:
  id: T1059
  linker_tags:
  - mitre/attack/linker/execution/command_and_scripting_interpreter
  name: Command and Scripting Interpreter
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Command and Scripting Interpreter (`T1059`)

Adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. These interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. Most systems come with some built-in command-line interface and scripting capabilities, for example, macOS and Linux distributions include some flavor of [Unix Shell](https://attack.mitre.org/techniques/T1059/004) while Windows installations include the [Windows Command Shell](https://attack.mitre.org/techniques/T1059/003) and [PowerShell](https://attack.mitre.org/techniques/T1059/001).

There are also cross-platform interpreters such as [Python](https://attack.mitre.org/techniques/T1059/006), as well as those commonly associated with client applications such as [JavaScript](https://attack.mitre.org/techniques/T1059/007) and [Visual Basic](https://attack.mitre.org/techniques/T1059/005).

Adversaries may abuse these technologies in various ways as a means of executing arbitrary commands. Commands and scripts can be embedded in [Initial Access](https://attack.mitre.org/tactics/TA0001) payloads delivered to victims as lure documents or as secondary payloads downloaded from an existing C2. Adversaries may also execute commands through interactive terminals/shells, as well as utilize various [Remote Services](https://attack.mitre.org/techniques/T1021) in order to achieve remote Execution.[^fn3][^fn2][^fn1]


# Platform(s)

- Containers
- ESXi
- IaaS
- Identity Provider
- Linux
- macOS
- Network Devices
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/JavaScript (T1059.007)|JavaScript]]
- [[../Techniques/AppleScript (T1059.002)|AppleScript]]
- [[../Techniques/AutoHotKey & AutoIT (T1059.010)|AutoHotKey & AutoIT]]
- [[../Techniques/Cloud API (T1059.009)|Cloud API]]
- [[../Techniques/Network Device CLI (T1059.008)|Network Device CLI]]
- [[../Techniques/PowerShell (T1059.001)|PowerShell]]
- [[../Techniques/Unix Shell (T1059.004)|Unix Shell]]
- [[../Techniques/Lua (T1059.011)|Lua]]
- [[../Techniques/Container CLI_API (T1059.013)|Container CLI/API]]
- [[../Techniques/Python (T1059.006)|Python]]
- [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]
- [[../Techniques/Hypervisor CLI (T1059.012)|Hypervisor CLI]]
- [[../Techniques/Visual Basic (T1059.005)|Visual Basic]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059](https://attack.mitre.org/techniques/T1059)

[^fn1]: [Abdou Rockikz. (2020, July). How to Execute Shell Commands in a Remote Machine in Python. Retrieved July 26, 2021.](https://www.thepythoncode.com/article/executing-bash-commands-remotely-in-python)
[^fn2]: [Cisco. (n.d.). Cisco IOS Software Integrity Assurance - Command History. Retrieved October 21, 2020.](https://tools.cisco.com/security/center/resources/integrity_assurance.html#23)
[^fn3]: [Microsoft. (2020, August 21). Running Remote Commands. Retrieved July 26, 2021.](https://docs.microsoft.com/en-us/powershell/scripting/learn/remoting/running-remote-commands?view=powershell-7.1)