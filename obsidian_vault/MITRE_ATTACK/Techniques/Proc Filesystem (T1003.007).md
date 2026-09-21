---
mitre_data:
  id: T1003.007
  linker_tags:
  - mitre/attack/linker/credential_access/proc_filesystem
  name: Proc Filesystem
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Proc Filesystem (`T1003.007`)

Adversaries may gather credentials from the proc filesystem or `/proc`. The proc filesystem is a pseudo-filesystem used as an interface to kernel data structures for Linux based systems managing virtual memory. For each process, the `/proc/<PID>/maps` file shows how memory is mapped within the process’s virtual address space. And `/proc/<PID>/mem`, exposed for debugging purposes, provides access to the process’s virtual address space.[^fn5][^fn2]

When executing with root privileges, adversaries can search these memory locations for all processes on a system that contain patterns indicative of credentials. Adversaries may use regex patterns, such as <code>grep -E "^[0-9a-f-]* r" /proc/"$pid"/maps | cut -d' ' -f 1</code>, to look for fixed strings in memory structures or cached hashes.[^fn1] When running without privileged access, processes can still view their own virtual memory locations. Some services or programs may save credentials in clear text inside the process’s memory.[^fn4][^fn3]

If running as or with the permissions of a web browser, a process can search the `/maps` & `/mem` locations for common website credential patterns (that can also be used to find adjacent memory within the same structure) in which hashes or cleartext credentials may be located.


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/MimiPenguin|MimiPenguin]]
- [[../Tools/LaZagne|LaZagne]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.007](https://attack.mitre.org/techniques/T1003/007)

[^fn1]: [Atomic Red Team. (2023, November). T1003.007 - OS Credential Dumping: Proc Filesystem. Retrieved March 28, 2024.](https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1003.007/T1003.007.md)
[^fn2]: [baeldung. (2022, April 8). Understanding the Linux /proc/id/maps File. Retrieved March 31, 2023.](https://www.baeldung.com/linux/proc-id-maps)
[^fn3]: [Carlos Polop. (2023, March 5). Linux Privilege Escalation. Retrieved March 31, 2023.](https://book.hacktricks.xyz/linux-hardening/privilege-escalation#proc-usdpid-maps-and-proc-usdpid-mem)
[^fn4]: [Gregal, H. (2017, May 12). MimiPenguin. Retrieved December 5, 2017.](https://github.com/huntergregal/mimipenguin)
[^fn5]: [Huseyin Can YUCEEL & Picus Labs. (2022, March 22). Retrieved March 31, 2023.](https://www.picussecurity.com/resource/the-mitre-attck-t1003-os-credential-dumping-technique-and-its-adversary-use)