---
mitre_data:
  id: T1056.004
  linker_tags:
  - mitre/attack/linker/collection/credential_api_hooking
  - mitre/attack/linker/credential_access/credential_api_hooking
  name: Credential API Hooking
  related_tactics:
  - collection
  - credential_access
tags:
- mitre/attack/technique
---



# Credential API Hooking (`T1056.004`)

Adversaries may hook into Windows application programming interface (API) functions and Linux system functions to collect user credentials. Malicious hooking mechanisms may capture API or function calls that include parameters that reveal user authentication credentials.[^fn8] Unlike [Keylogging](https://attack.mitre.org/techniques/T1056/001), this technique focuses specifically on API functions that include parameters that reveal user credentials. 

In Windows, hooking involves redirecting calls to these functions and can be implemented via:

* **Hooks procedures**, which intercept and execute designated code in response to events such as messages, keystrokes, and mouse inputs.[^fn9][^fn5]
* **Import address table (IAT) hooking**, which use modifications to a process’s IAT, where pointers to imported API functions are stored.[^fn5][^fn14][^fn4]
* **Inline hooking**, which overwrites the first bytes in an API function to redirect code flow.[^fn5][^fn7][^fn4]

In Linux and macOS, adversaries may hook into system functions via the `LD_PRELOAD` (Linux) or `DYLD_INSERT_LIBRARIES` (macOS) environment variables, which enables loading shared libraries into a program’s address space. For example, an adversary may capture credentials by hooking into the `libc read` function leveraged by SSH or SCP.[^fn6]


# Platform(s)

- Windows
- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Input Capture (T1056)|Input Capture]]

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1056.004](https://attack.mitre.org/techniques/T1056/004)
- [Eye of Ra. (2017, June 27). Windows Keylogger Part 2: Defense against user-land. Retrieved December 12, 2017.](https://eyeofrablog.wordpress.com/2017/06/27/windows-keylogger-part-2-defense-against-user-land/)
- [Felici, M. (2006, December 6). Any application-defined hook procedure on my machine?. Retrieved December 12, 2017.](https://zairon.wordpress.com/2006/12/06/any-application-defined-hook-procedure-on-my-machine/)
- [GMER. (n.d.). GMER. Retrieved December 12, 2017.](http://www.gmer.net/)
- [Microsoft. (n.d.). Taking a Snapshot and Viewing Processes. Retrieved December 12, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms686701.aspx)
- [Prekas, G. (2011, July 11). Winhook. Retrieved December 12, 2017.](https://github.com/prekageo/winhook)
- [Satiro, J. (2011, September 14). GetHooks. Retrieved December 12, 2017.](https://github.com/jay/gethooks)
- [Stack Exchange - Security. (2012, July 31). What are the methods to find hooked functions and APIs?. Retrieved December 12, 2017.](https://security.stackexchange.com/questions/17904/what-are-the-methods-to-find-hooked-functions-and-apis)
- [Volatility Labs. (2012, September 24). MoVP 3.1 Detecting Malware Hooks in the Windows GUI Subsystem. Retrieved December 12, 2017.](https://volatility-labs.blogspot.com/2012/09/movp-31-detecting-malware-hooks-in.html)

[^fn4]: [Hillman, M. (2015, August 8). Dynamic Hooking Techniques: User Mode. Retrieved December 20, 2017.](https://www.mwrinfosecurity.com/our-thinking/dynamic-hooking-techniques-user-mode/)
[^fn5]: [Hosseini, A. (2017, July 18). Ten Process Injection Techniques: A Technical Survey Of Common And Trending Process Injection Techniques. Retrieved December 7, 2017.](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
[^fn6]: [Joakim Kennedy and The BlackBerry Threat Research & Intelligence Team. (2022, June 9). Symbiote Deep-Dive: Analysis of a New, Nearly-Impossible-to-Detect Linux Threat. Retrieved March 24, 2025.](https://intezer.com/blog/research/new-linux-threat-symbiote/)
[^fn7]: [Mariani, B. (2011, September 6). Inline Hooking in Windows. Retrieved November 17, 2024.](https://www.scribd.com/document/68671361/Inline-Hooking-in-Windows)
[^fn8]: [Microsoft. (2017, September 15). TrojanSpy:Win32/Ursnif.gen!I. Retrieved December 18, 2017.](https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=TrojanSpy:Win32/Ursnif.gen!I&threatId=-2147336918)
[^fn9]: [Microsoft. (n.d.). Hooks Overview. Retrieved December 12, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms644959.aspx)
[^fn14]: [Tigzy. (2014, October 15). Userland Rootkits: Part 1, IAT hooks. Retrieved December 12, 2017.](https://www.adlice.com/userland-rootkits-part-1-iat-hooks/)