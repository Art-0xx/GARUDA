---
mitre_data:
  id: T1622
  linker_tags:
  - mitre/attack/linker/stealth/debugger_evasion
  - mitre/attack/linker/discovery/debugger_evasion
  name: Debugger Evasion
  related_tactics:
  - stealth
  - discovery
tags:
- mitre/attack/technique
---



# Debugger Evasion (`T1622`)

Adversaries may employ various means to detect and avoid debuggers. Debuggers are typically used by defenders to trace and/or analyze the execution of potential malware payloads.[^fn7]

Debugger evasion may include changing behaviors based on the results of the checks for the presence of artifacts indicative of a debugged environment. Similar to [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497), if the adversary detects a debugger, they may alter their malware to disengage from the victim or conceal the core functions of the implant. They may also search for debugger artifacts before dropping secondary or additional payloads.

Specific checks will vary based on the target and/or adversary. On Windows, this may involve [Native API](https://attack.mitre.org/techniques/T1106) function calls such as <code>IsDebuggerPresent()</code> and <code> NtQueryInformationProcess()</code>, or manually checking the <code>BeingDebugged</code> flag of the Process Environment Block (PEB). On Linux, this may involve querying `/proc/self/status` for the `TracerPID` field, which indicates whether or not the process is being traced by dynamic analysis tools.[^fn4][^fn8] Other checks for debugging artifacts may also seek to enumerate hardware breakpoints, interrupt assembly opcodes, time checks, or measurements if exceptions are raised in the current process (assuming a present debugger would “swallow” or handle the potential error).[^fn3][^fn5][^fn9]

Malware may also leverage Structured Exception Handling (SEH) to detect debuggers by throwing an exception and detecting whether the process is suspended. SEH handles both hardware and software expectations, providing control over the exceptions including support for debugging. If a debugger is present, the program’s control will be transferred to the debugger, and the execution of the code will be suspended. If the debugger is not present, control will be transferred to the SEH handler, which will automatically handle the exception and allow the program’s execution to continue.[^fn1]

Adversaries may use the information learned from these debugger checks during automated discovery to shape follow-on behaviors. Debuggers can also be evaded by detaching the process or flooding debug logs with meaningless data via messages produced by looping [Native API](https://attack.mitre.org/techniques/T1106) function calls such as <code>OutputDebugStringW()</code>.[^fn6][^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/AsyncRAT|AsyncRAT]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1622](https://attack.mitre.org/techniques/T1622)

[^fn1]: [Apriorit. (2024, June 4). Anti Debugging Protection Techniques with Examples. Retrieved March 4, 2025.](https://www.apriorit.com/dev-blog/367-anti-reverse-engineering-protection-techniques-to-use-before-releasing-software)
[^fn2]: [Check Point Research. (2021, January 4). Stopping Serial Killer: Catching the Next Strike. Retrieved September 7, 2021.](https://research.checkpoint.com/2021/stopping-serial-killer-catching-the-next-strike/)
[^fn3]: [hasherezade. (2021, June 30). Module 3 - Understanding and countering malware's evasion and self-defence. Retrieved April 1, 2022.](https://github.com/hasherezade/malware_training_vol1/blob/main/slides/module3/Module3_2_fingerprinting.pdf)
[^fn4]: [jbowen. (2023, December 4). P2Pinfect - New Variant Targets MIPS Devices. Retrieved March 18, 2025.](https://www.cadosecurity.com/blog/p2pinfect-new-variant-targets-mips-devices)
[^fn5]: [Noteworthy. (2019, January 6). Al-Khaser. Retrieved April 1, 2022.](https://github.com/LordNoteworthy/al-khaser/tree/master/al-khaser/AntiDebug)
[^fn6]: [Patrick Wardle. (2020, July 3). OSX.EvilQuest Uncovered part ii: insidious capabilities. Retrieved March 21, 2021.](https://objective-see.com/blog/blog_0x60.html)
[^fn7]: [ProcessHacker. (2009, October 27). Process Hacker. Retrieved April 11, 2022.](https://github.com/processhacker/processhacker)
[^fn8]: [PT Expert Security Center. (2023, November 29). Hellhounds: operation Lahat. Retrieved March 18, 2025.](https://global.ptsecurity.com/analytics/pt-esc-threat-intelligence/hellhounds-operation-lahat)
[^fn9]: [vxunderground. (2021, June 30). VX-API. Retrieved April 1, 2022.](https://web.archive.org/web/20250904153443/https://github.com/vxunderground/VX-API/tree/main#anti-debug)