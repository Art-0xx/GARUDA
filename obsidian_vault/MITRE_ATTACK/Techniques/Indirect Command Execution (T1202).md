---
mitre_data:
  id: T1202
  linker_tags:
  - mitre/attack/linker/stealth/indirect_command_execution
  name: Indirect Command Execution
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Indirect Command Execution (`T1202`)

Adversaries may abuse utilities that allow for command execution to bypass security restrictions that limit the use of command-line interpreters. Various Windows utilities may be used to execute commands, possibly without invoking [cmd](https://attack.mitre.org/software/S0106). For example, [Forfiles](https://attack.mitre.org/software/S0193), the Program Compatibility Assistant (`pcalua.exe`), components of the Windows Subsystem for Linux (WSL), `Scriptrunner.exe`, as well as other utilities may invoke the execution of programs and commands from a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059), Run window, or via scripts.[^fn6][^fn3][^fn4][^fn5][^fn1] Adversaries may also abuse the `ssh.exe` binary to execute malicious commands via the `ProxyCommand` and `LocalCommand` options, which can be invoked via the `-o` flag or by modifying the SSH config file.[^fn2]

Adversaries may abuse these features for [Stealth](https://attack.mitre.org/tactics/TA0005), specifically to perform arbitrary execution while subverting detections and/or mitigation controls (such as Group Policy) that limit/prevent the usage of [cmd](https://attack.mitre.org/software/S0106) or file extensions more commonly associated with malicious payloads.


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/Forfiles|Forfiles]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1202](https://attack.mitre.org/techniques/T1202)

[^fn1]: [Bill Toulas. (2023, January 4). Hackers abuse Windows error reporting tool to deploy malware. Retrieved July 8, 2024.](https://www.bleepingcomputer.com/news/security/hackers-abuse-windows-error-reporting-tool-to-deploy-malware/)
[^fn2]: [Cyble. (2024, December 5). Threat Actor Targets the Manufacturing industry with Lumma Stealer and Amadey Bot. Retrieved February 4, 2025.](https://cyble.com/blog/threat-actor-targets-manufacturing-industry-with-malware/)
[^fn3]: [Evi1cg. (2017, November 26). block cmd.exe ? try this :. Retrieved September 12, 2024.](https://x.com/Evi1cg/status/935027922397573120)
[^fn4]: [Secure Team - Information Assurance. (2023, January 8). Windows Error Reporting Tool Abused to Load Malware. Retrieved July 8, 2024.](https://secureteam.co.uk/2023/01/08/windows-error-reporting-tool-abused-to-load-malware/)
[^fn5]: [SS64. (n.d.). ScriptRunner.exe. Retrieved July 8, 2024.](https://ss64.com/nt/scriptrunner.html)
[^fn6]: [vector_sec. (2017, August 11). Defenders watching launches of cmd? What about forfiles?. Retrieved September 12, 2024.](https://x.com/vector_sec/status/896049052642533376)