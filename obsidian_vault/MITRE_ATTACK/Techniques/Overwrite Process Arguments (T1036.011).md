---
mitre_data:
  id: T1036.011
  linker_tags:
  - mitre/attack/linker/stealth/overwrite_process_arguments
  name: Overwrite Process Arguments
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Overwrite Process Arguments (`T1036.011`)

Adversaries may modify a process's in-memory arguments to change its name in order to appear as a legitimate or benign process. On Linux, the operating system stores command-line arguments in the process’s stack and passes them to the `main()` function as the `argv` array. The first element, `argv[0]`, typically contains the process name or path - by default, the command used to actually start the process (e.g., `cat /etc/passwd`). By default, the Linux `/proc` filesystem uses this value to represent the process name. The `/proc/<PID>/cmdline` file reflects the contents of this memory, and tools like `ps` use it to display process information. Since arguments are stored in user-space memory at launch, this modification can be performed without elevated privileges. 

During runtime, adversaries can erase the memory used by all command-line arguments for a process, overwriting each argument string with null bytes. This removes evidence of how the process was originally launched. They can then write a spoofed string into the memory region previously occupied by `argv[0]` to mimic a benign command, such as `cat resolv.conf`. The new command-line string is reflected in `/proc/<PID>/cmdline` and displayed by tools like `ps`.[^fn2][^fn1] 


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.011](https://attack.mitre.org/techniques/T1036/011)

[^fn1]: [Ratnesh Pandey, Yevgeny Kulakov, and Jonathan Bar Or with Saurabh Swaroop. (2022, May 19). Rise in XorDdos: A deeper look at the stealthy DDoS malware targeting Linux devices. Retrieved September 27, 2023.](https://www.microsoft.com/en-us/security/blog/2022/05/19/rise-in-xorddos-a-deeper-look-at-the-stealthy-ddos-malware-targeting-linux-devices/)
[^fn2]: [The Sandfly Security Team. (2022, May 11). BPFDoor - An Evasive Linux Backdoor Technical Analysis. Retrieved September 29, 2023.](https://sandflysecurity.com/blog/bpfdoor-an-evasive-linux-backdoor-technical-analysis/)