---
mitre_data:
  id: T1036.009
  linker_tags:
  - mitre/attack/linker/stealth/break_process_trees
  name: Break Process Trees
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Break Process Trees (`T1036.009`)

An adversary may attempt to evade process tree-based analysis by modifying executed malware's parent process ID (PPID). If endpoint protection software leverages the “parent-child" relationship for detection, breaking this relationship could result in the adversary’s behavior not being associated with previous process tree activity. On Unix-based systems breaking this process tree is common practice for administrators to execute software using scripts and programs.[^fn1] 

On Linux systems, adversaries may execute a series of [Native API](https://attack.mitre.org/techniques/T1106) calls to alter malware's process tree. For example, adversaries can execute their payload without any arguments, call the `fork()` API call twice, then have the parent process exit. This creates a grandchild process with no parent process that is immediately adopted by the `init` system process (PID 1), which successfully disconnects the execution of the adversary's payload from its previous process tree.

Another example is using the “daemon” syscall to detach from the current parent process and run in the background.[^fn3][^fn2] 


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.009](https://attack.mitre.org/techniques/T1036/009)

[^fn1]: [Juan Tapiador. (2022, April 11). UNIX daemonization and the double fork. Retrieved September 29, 2023.](https://0xjet.github.io/3OHA/2022/04/11/post.html)
[^fn2]: [Microsoft Threat Intelligence. (2022, May 19). Rise in XorDdos: A deeper look at the stealthy DDoS malware targeting Linux devices. Retrieved September 27, 2023.](https://www.microsoft.com/en-us/security/blog/2022/05/19/rise-in-xorddos-a-deeper-look-at-the-stealthy-ddos-malware-targeting-linux-devices/)
[^fn3]: [The Sandfly Security Team. (2022, May 11). BPFDoor - An Evasive Linux Backdoor Technical Analysis. Retrieved September 29, 2023.](https://sandflysecurity.com/blog/bpfdoor-an-evasive-linux-backdoor-technical-analysis/)