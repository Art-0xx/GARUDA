---
mitre_data:
  id: T1106
  linker_tags:
  - mitre/attack/linker/execution/native_api
  name: Native API
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Native API (`T1106`)

Adversaries may interact with the native OS application programming interface (API) to execute behaviors. Native APIs provide a controlled means of calling low-level OS services within the kernel, such as those involving hardware/devices, memory, and processes.[^fn15][^fn10] These native APIs are leveraged by the OS during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.

Adversaries may abuse these OS API functions as a means of executing behaviors. Similar to [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059), the native API and its hierarchy of interfaces provide mechanisms to interact with and utilize various components of a victimized system.

Native API functions (such as <code>NtCreateProcess</code>) may be directed invoked via system calls / syscalls, but these features are also often exposed to user-mode applications via interfaces and libraries.[^fn4][^fn7][^fn11] For example, functions such as the Windows API <code>CreateProcess()</code> or GNU <code>fork()</code> will allow programs and scripts to start other processes.[^fn12][^fn6] This may allow API callers to execute a binary, run a CLI command, load modules, etc. as thousands of similar API functions exist for various system operations.[^fn13][^fn9][^fn8]

Higher level software frameworks, such as Microsoft .NET and macOS Cocoa, are also available to interact with native APIs. These frameworks typically provide language wrappers/abstractions to API functionalities and are designed for ease-of-use/portability of code.[^fn14][^fn2][^fn1][^fn3]

Adversaries may use assembly to directly or in-directly invoke syscalls in an attempt to subvert defensive sensors and detection signatures such as user mode API-hooks.[^fn5] Adversaries may also attempt to tamper with sensors and defensive tools associated with API monitoring, such as unhooking monitored functions via [Disable or Modify Tools](https://attack.mitre.org/techniques/T1685).


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1106](https://attack.mitre.org/techniques/T1106)

[^fn1]: [Apple. (2015, September 16). Cocoa Application Layer. Retrieved June 25, 2020.](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/OSX_Technology_Overview/CocoaApplicationLayer/CocoaApplicationLayer.html#//apple_ref/doc/uid/TP40001067-CH274-SW1)
[^fn2]: [Apple. (n.d.). Core Services. Retrieved June 25, 2020.](https://developer.apple.com/documentation/coreservices)
[^fn3]: [Apple. (n.d.). Foundation. Retrieved July 1, 2020.](https://developer.apple.com/documentation/foundation)
[^fn4]: [de Plaa, C. (2019, June 19). Red Team Tactics: Combining Direct System Calls and sRDI to bypass AV/EDR. Retrieved September 29, 2021.](https://outflank.nl/blog/2019/06/19/red-team-tactics-combining-direct-system-calls-and-srdi-to-bypass-av-edr/)
[^fn5]: [Feichter, D. (2023, June 30). Direct Syscalls vs Indirect Syscalls. Retrieved September 27, 2023.](https://redops.at/en/blog/direct-syscalls-vs-indirect-syscalls)
[^fn6]: [Free Software Foundation, Inc.. (2020, June 18). Creating a Process. Retrieved June 25, 2020.](https://www.gnu.org/software/libc/manual/html_node/Creating-a-Process.html)
[^fn7]: [Gavriel, H. (2018, November 27). Malware Mitigation when Direct System Calls are Used. Retrieved September 29, 2021.](https://www.cyberbit.com/blog/endpoint-security/malware-mitigation-when-direct-system-calls-are-used/)
[^fn8]: [glibc developer community. (2020, February 1). The GNU C Library (glibc). Retrieved June 25, 2020.](https://www.gnu.org/software/libc/)
[^fn9]: [Kerrisk, M. (2016, December 12). libc(7) — Linux manual page. Retrieved June 25, 2020.](https://man7.org/linux/man-pages//man7/libc.7.html)
[^fn10]: [Linux Kernel Organization, Inc. (n.d.). The Linux Kernel API. Retrieved June 25, 2020.](https://www.kernel.org/doc/html/v4.12/core-api/kernel-api.html)
[^fn11]: [MDSec Research. (2020, December). Bypassing User-Mode Hooks and Direct Invocation of System Calls for Red Teams. Retrieved September 29, 2021.](https://www.mdsec.co.uk/2020/12/bypassing-user-mode-hooks-and-direct-invocation-of-system-calls-for-red-teams/)
[^fn12]: [Microsoft. (n.d.). CreateProcess function. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa)
[^fn13]: [Microsoft. (n.d.). Programming reference for the Win32 API. Retrieved March 15, 2020.](https://docs.microsoft.com/en-us/windows/win32/api/)
[^fn14]: [Microsoft. (n.d.). What is .NET Framework?. Retrieved March 15, 2020.](https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework)
[^fn15]: [The NTinterlnals.net team. (n.d.). Nowak, T. Retrieved June 25, 2020.](https://undocumented.ntinternals.net/)