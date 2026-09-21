---
mitre_data:
  id: T1559
  linker_tags:
  - mitre/attack/linker/execution/inter-process_communication
  name: Inter-Process Communication
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Inter-Process Communication (`T1559`)

Adversaries may abuse inter-process communication (IPC) mechanisms for local code or command execution. IPC is typically used by processes to share data, communicate with each other, or synchronize execution. IPC is also commonly used to avoid situations such as deadlocks, which occurs when processes are stuck in a cyclic waiting pattern. 

Adversaries may abuse IPC to execute arbitrary code or commands. IPC mechanisms may differ depending on OS, but typically exists in a form accessible through programming languages/libraries or native interfaces such as Windows [Dynamic Data Exchange](https://attack.mitre.org/techniques/T1559/002) or [Component Object Model](https://attack.mitre.org/techniques/T1559/001). Linux environments support several different IPC mechanisms, two of which being sockets and pipes.[^fn2] Higher level execution mediums, such as those of [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059)s, may also leverage underlying IPC mechanisms. Adversaries may also use [Remote Services](https://attack.mitre.org/techniques/T1021) such as [Distributed Component Object Model](https://attack.mitre.org/techniques/T1021/003) to facilitate remote IPC execution.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Dynamic Data Exchange (T1559.002)|Dynamic Data Exchange]]
- [[../Techniques/Component Object Model (T1559.001)|Component Object Model]]
- [[../Techniques/XPC Services (T1559.003)|XPC Services]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1559](https://attack.mitre.org/techniques/T1559)

[^fn1]: [Hamilton, C. (2019, June 4). Hunting COM Objects. Retrieved June 10, 2019.](https://www.fireeye.com/blog/threat-research/2019/06/hunting-com-objects.html)
[^fn2]: [N/A. (2021, April 1). Inter Process Communication (IPC). Retrieved March 11, 2022.](https://www.geeksforgeeks.org/inter-process-communication-ipc/#:~:text=Inter%2Dprocess%20communication%20(IPC),of%20co%2Doperation%20between%20them.)