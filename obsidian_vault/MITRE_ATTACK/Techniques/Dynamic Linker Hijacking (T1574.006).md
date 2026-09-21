---
mitre_data:
  id: T1574.006
  linker_tags:
  - mitre/attack/linker/stealth/dynamic_linker_hijacking
  - mitre/attack/linker/execution/dynamic_linker_hijacking
  name: Dynamic Linker Hijacking
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Dynamic Linker Hijacking (`T1574.006`)

Adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. During the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from various environment variables and files, such as <code>LD_PRELOAD</code> on Linux or <code>DYLD_INSERT_LIBRARIES</code> on macOS.[^fn3][^fn9][^fn5] Libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name.[^fn6][^fn8][^fn1] Each platform's linker uses an extensive list of environment variables at different points in execution. These variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions in the original library.[^fn2]

Hijacking dynamic linker variables may grant access to the victim process's memory, system/network resources, and possibly elevated privileges. On Linux, adversaries may set <code>LD_PRELOAD</code> to point to malicious libraries that match the name of legitimate libraries which are requested by a victim program, causing the operating system to load the adversary's malicious code upon execution of the victim program. For example, adversaries have used `LD_PRELOAD` to inject a malicious library into every descendant process of the `sshd` daemon, resulting in execution under a legitimate process. When the executing sub-process calls the `execve` function, for example, the malicious library’s `execve` function is executed rather than the system function `execve` contained in the system library on disk. This allows adversaries to [Hide Artifacts](https://attack.mitre.org/techniques/T1564) from detection, as hooking system functions such as `execve` and `readdir` enables malware to scrub its own artifacts from the results of commands such as `ls`, `ldd`, `iptables`, and `dmesg`.[^fn10][^fn4][^fn7]

Hijacking dynamic linker variables may grant access to the victim process's memory, system/network resources, and possibly elevated privileges.


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.006](https://attack.mitre.org/techniques/T1574/006)

[^fn1]: [Apple Inc.. (2012, July 23). Overview of Dynamic Libraries. Retrieved March 24, 2021.](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html)
[^fn2]: [baeldung. (2020, August 9). What Is the LD_PRELOAD Trick?. Retrieved March 24, 2021.](https://www.baeldung.com/linux/ld_preload-trick-what-is)
[^fn3]: [Fitzl, C. (2019, July 9). DYLD_INSERT_LIBRARIES DYLIB injection in macOS / OSX. Retrieved March 26, 2020.](https://theevilbit.github.io/posts/dyld_insert_libraries_dylib_injection_in_macos_osx_deep_dive/)
[^fn4]: [Joakim Kennedy and The BlackBerry Threat Research & Intelligence Team. (2022, June 9). Symbiote Deep-Dive: Analysis of a New, Nearly-Impossible-to-Detect Linux Threat. Retrieved March 24, 2025.](https://intezer.com/blog/research/new-linux-threat-symbiote/)
[^fn5]: [Jon Gabilondo. (2019, September 22). How to Inject Code into Mach-O Apps. Part II.. Retrieved March 24, 2021.](https://jon-gabilondo-angulo-7635.medium.com/how-to-inject-code-into-mach-o-apps-part-ii-ddb13ebc8191)
[^fn6]: [Kerrisk, M. (2020, June 13). Linux Programmer's Manual. Retrieved June 15, 2020.](https://www.man7.org/linux/man-pages/man8/ld.so.8.html)
[^fn7]: [Remco Sprooten and Ruben Groenewoud. (2024, December 11). Declawing PUMAKIT. Retrieved March 24, 2025.](https://www.elastic.co/security-labs/declawing-pumakit)
[^fn8]: [The Linux Documentation Project. (n.d.). Shared Libraries. Retrieved January 31, 2020.](https://www.tldp.org/HOWTO/Program-Library-HOWTO/shared-libraries.html)
[^fn9]: [Timac. (2012, December 18). Simple code injection using DYLD_INSERT_LIBRARIES. Retrieved March 26, 2020.](https://blog.timac.org/2012/1218-simple-code-injection-using-dyld_insert_libraries/)
[^fn10]: [Vachon, F. (2017, October 30). Windigo Still not Windigone: An Ebury Update . Retrieved February 10, 2021.](https://www.welivesecurity.com/2017/10/30/windigo-ebury-update-2/)