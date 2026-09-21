---
mitre_data:
  id: T1059.003
  linker_tags:
  - mitre/attack/linker/execution/windows_command_shell
  name: Windows Command Shell
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Windows Command Shell (`T1059.003`)

Adversaries may abuse the Windows command shell for execution. The Windows command shell ([cmd](https://attack.mitre.org/software/S0106)) is the primary command prompt on Windows systems. The Windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. The command prompt can be invoked remotely via [Remote Services](https://attack.mitre.org/techniques/T1021) such as [SSH](https://attack.mitre.org/techniques/T1021/004).[^fn1]

Batch files (ex: .bat or .cmd) also provide the shell with a list of sequential commands to run, as well as normal scripting operations such as conditionals and loops. Common uses of batch files include long or repetitive tasks, or the need to run the same set of commands on multiple systems.

Adversaries may leverage [cmd](https://attack.mitre.org/software/S0106) to execute various commands and payloads. Common uses include [cmd](https://attack.mitre.org/software/S0106) to execute a single command, or abusing [cmd](https://attack.mitre.org/software/S0106) interactively with input and output forwarded over a command and control channel.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/Diskpart|Diskpart]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Out1|Out1]]
- [[../Tools/MCMD|MCMD]]
- [[../Tools/cmd|cmd]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.003](https://attack.mitre.org/techniques/T1059/003)

[^fn1]: [Microsoft. (2020, May 19). Tutorial: SSH in Windows Terminal. Retrieved July 26, 2021.](https://docs.microsoft.com/en-us/windows/terminal/tutorials/ssh)