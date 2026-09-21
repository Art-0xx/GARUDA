---
mitre_data:
  id: T1153
  linker_tags:
  - mitre/attack/linker/execution/source
  name: Source
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Source (`T1153`)

**This technique has been deprecated and should no longer be used.**

The <code>source</code> command loads functions into the current shell or executes files in the current context. This built-in command can be run in two different ways <code>source /path/to/filename [arguments]</code> or <code>.**This technique has been deprecated and should no longer be used.** /path/to/filename [arguments]</code>. Take note of the space after the ".". Without a space, a new shell is created that runs the program instead of running the program within the current context. This is often used to make certain features or functions available to a shell or to update a specific shell's environment.[^fn1]

Adversaries can abuse this functionality to execute programs. The file executed with this technique does not need to be marked executable beforehand.


# Platform(s)

- Linux
- macOS

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1153](https://attack.mitre.org/techniques/T1153)

[^fn1]: [ss64. (n.d.). Source or Dot Operator. Retrieved May 21, 2019.](https://ss64.com/bash/source.html)