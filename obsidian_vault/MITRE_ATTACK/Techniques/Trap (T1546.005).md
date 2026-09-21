---
mitre_data:
  id: T1546.005
  linker_tags:
  - mitre/attack/linker/privilege_escalation/trap
  - mitre/attack/linker/persistence/trap
  name: Trap
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Trap (`T1546.005`)

Adversaries may establish persistence by executing malicious content triggered by an interrupt signal. The <code>trap</code> command allows programs and shells to specify commands that will be executed upon receiving interrupt signals. A common situation is a script allowing for graceful termination and handling of common keyboard interrupts like <code>ctrl+c</code> and <code>ctrl+d</code>.

Adversaries can use this to register code to be executed when the shell encounters specific interrupts as a persistence mechanism. Trap commands are of the following format <code>trap 'command list' signals</code> where "command list" will be executed when "signals" are received.[^fn1][^fn2]


# Platform(s)

- macOS
- Linux

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.005](https://attack.mitre.org/techniques/T1546/005)

[^fn1]: [ss64. (n.d.). trap. Retrieved May 21, 2019.](https://ss64.com/bash/trap.html)
[^fn2]: [Cyberciti. (2016, March 29). Trap statement. Retrieved May 21, 2019.](https://bash.cyberciti.biz/guide/Trap_statement)