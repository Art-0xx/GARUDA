---
mitre_data:
  id: T1059.006
  linker_tags:
  - mitre/attack/linker/execution/python
  name: Python
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Python (`T1059.006`)

Adversaries may abuse Python commands and scripts for execution. Python is a very popular scripting/programming language, with capabilities to perform many functions. Python can be executed interactively from the command-line (via the <code>python.exe</code> interpreter) or via scripts (.py) that can be written and distributed to different systems. Python code can also be compiled into binary executables.[^fn1]

Python comes with many built-in packages to interact with the underlying system, such as file operations and device I/O. Adversaries can use these libraries to download and execute commands or other scripts as well as perform various malicious behaviors.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Donut|Donut]]
- [[../Tools/IronNetInjector|IronNetInjector]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.006](https://attack.mitre.org/techniques/T1059/006)

[^fn1]: [Singh, S. and Antil, S. (2020, October 27). APT-31 Leverages COVID-19 Vaccine Theme and Abuses Legitimate Online Services. Retrieved March 24, 2021.](https://www.zscaler.com/blogs/security-research/apt-31-leverages-covid-19-vaccine-theme-and-abuses-legitimate-online)